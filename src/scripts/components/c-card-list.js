import { ClientApi } from '../api/ClientApi';

class CardList extends HTMLElement {
    constructor() {
        super();
        this.client = new ClientApi();
    }

    set movies(movies) {
        this._movies = movies;
        this.render()
    }
    
    connectedCallback() {
        window.addEventListener("hashchange", e => this.onRouteChange(e));
        this.render();
    }
    
    onRouteChange() {
        const hashLocation = window.location.hash.substring(1);
        this.getData(hashLocation);
    }
    
    async getData(uri) {
        switch(uri) {
            case "trending-movies":
                await this.client.get("https://api.themoviedb.org/3/movie/popular")
                .then(res => this.movies = res.data.results);
                break;
            case "new-movies":
                await this.client.get("https://api.themoviedb.org/3/movie/upcoming")
                .then(res => this.movies = res.data.results);
                break;
            case "now-playing":
                await this.client.get("https://api.themoviedb.org/3/movie/now_playing")
                .then(res => this.movies = res.data.results);
                break;
            case "recomendation":  
                await this.client.get("https://api.themoviedb.org/3/movie/top_rated")
                .then(res => this.movies = res.data.results);
                break;
        }
    }
    
    render() {
        this.innerHTML = "";

        if(this._movies == null) {
            this.innerHTML += `<h1> Selamat Datang di Bioskop XIX</h1>`
        } else {
            this.setAttribute("class", "row");
            this._movies.forEach(movie => {
                const cardItemElement = document.createElement('c-card-item'); 
                cardItemElement.movie = movie;
                this.appendChild(cardItemElement);
            });
        }        
    }
}

customElements.define('c-card-list', CardList);