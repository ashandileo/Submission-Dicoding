class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                <a class="navbar-brand" href="/" id="HOME">Bioskop XIX</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#trending-movies">Trending Movies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#new-movies">New Movies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#now-playing">Now Playing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#recomendation">Recomendation</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('c-navbar', Navbar);



