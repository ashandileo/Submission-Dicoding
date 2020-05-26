import { ClientApi } from '../api/ClientApi';

document.addEventListener('click',  (e) => {
    if(e.target.classList.contains('btn-detail')) {
        const dataId = e.target.dataset.id;
        const cardItem = new CardItem();
        cardItem.getDetail(dataId)
    }
});

class CardItem extends HTMLElement {
    constructor() {
        super();
        this.client = new ClientApi();
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    getDetail(id) {
        this.client.get(`https://api.themoviedb.org/3/movie/${id}`)
        .then(res => this.uiDetail(res.data))
    }

    uiDetail(data) {
        const detailElement = `
            <div class="col-lg-4 col-sm-12 text-center mb-3">
                <img src="https://image.tmdb.org/t/p/w220_and_h330_face${data.poster_path}" class="img-fluid">
            </div>
            <div class="col">
                <ul class="list-group"> 
                    <li class="list-group-item"><h4>${data.title}</h4></li>
                    <li class="list-group-item"><p>Title : ${data.title}</p></li>
                    <li class="list-group-item"><p>Overview : ${data.overview}</p></li>
                    <li class="list-group-item"><p>Original Language : ${data.original_language}</p></li>
                    <li class="list-group-item"><p>Popularity ${data.popularity}: </p></li>
                </ul>
            </div>
        `;

        const modalBody = document.querySelector('.modal-body');
        
        modalBody.innerHTML = detailElement;
    }
    
    render() {
        this.setAttribute("class", "col-lg-3 col-md-6 col-sm-12 mt-5");
        this.setAttribute("data-aos", "fade-down");

        this.innerHTML = `
                <div class='card'>
                    <img src="https://image.tmdb.org/t/p/w220_and_h330_face${this._movie.poster_path}">
                    <div class='card-body'>
                        <p class='font-weight-bold'>${this._movie.title}</p>
                        <small>${this._movie.release_date}</small> <br>
                        <button type="button" class="btn btn-primary btn-detail" data-toggle="modal" data-target=".bd-example-modal-xl" data-id="${this._movie.id}">
                            Detail
                        </button>
                    </div>
                </div>
                
                
                <!-- Modal -->
                <div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Movie Detail</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body row">
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Kembali</button>
                    </div>
                    </div>
                </div>
                </div>
        `;
    }
}

customElements.define('c-card-item', CardItem);
