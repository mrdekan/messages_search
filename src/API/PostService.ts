import axios from "axios";

export default class PostService{
    static async getAll(limit = 10, number = 1){
        return await axios.get('https://656b7f6cdac3630cf728293a.mockapi.io/api/articles/messages');
    }
}