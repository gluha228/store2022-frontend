import axios from 'axios'

class ItemService{
    getItems() {
        return axios.get('http://localhost:8080/store/getitems');
    }
}

export default new ItemService()