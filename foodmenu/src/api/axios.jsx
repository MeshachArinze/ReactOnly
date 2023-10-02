import axios from 'axios';
// eslint-disable-next-line react-refresh/only-export-components
export default axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/'
});