import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'fa1f52842fa54a6393d8f24fefe2ac2e'
    }
})