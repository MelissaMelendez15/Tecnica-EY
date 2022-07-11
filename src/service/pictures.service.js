import axios from 'axios'

export default class PicturesService {
  
    constructor() {
        this.service = axios.create({
             baseURL: 'https://jsonplaceholder.typicode.com/photos'
        })
    }

    getAllPictures = () => this.service.get('/')
}