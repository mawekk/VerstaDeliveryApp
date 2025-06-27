import axios from 'axios';

const axiosService = axios.create({baseURL: import.meta.env.VITE_API_URL});

export const createOrder = async (order) =>
    await axiosService.post(`orders/new`, order);

export const getOrders = async (id) =>
    await axiosService.get(`orders`, {params: {id}});

