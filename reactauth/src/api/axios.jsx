/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

const base_url = "https://localhost:3500";

export default axios.create({
    baseURL: base_url
});

export const axiosPrivate = axios.create({
    baseURL: base_url,
    headers: { 'Content-Type': 'application/json',},
    withCredentials: true
})