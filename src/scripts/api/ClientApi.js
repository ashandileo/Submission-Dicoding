import Axios from 'axios';

const getClientAxios = () => {
    const options = {
        baseURL: "https://api.themoviedb.org/3",
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjZiMDEyYThmNGFhMWQ4Zjk2NWY3NzAxNjY2MWFjYSIsInN1YiI6IjVlOTJjZjZlODc1ZDFhMDAxNDQzODc1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eFiFEYmqMuq_9JAF9prCOdc0ehptJejbK7zmL-_ve9c`,
            Accept: "application/json"
        }
    };
    
    const clientAxios = Axios.create(options);

    return clientAxios;
}

export class ClientApi {
    constructor() {
        this._client = getClientAxios()
    }

    async get(url, conf = {}) {
        return await this._client.get(url, conf)
            .then(res => Promise.resolve(res))
            .catch(err => Promise.reject(err));
    }
}