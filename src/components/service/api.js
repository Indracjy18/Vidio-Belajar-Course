import axios from "axios";

// const cors = require('cors');

// Membuat instance Axios dengan base URL dari environment variable atau default ke localhost:3000
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
});

// Interceptor untuk menangani response dan error
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("API Response Error:", error.response);
    } else if (error.request) {
      console.error("API Request Error:", error.request);
    } else {
      console.error("API Error:", error.message);
    }
    return Promise.reject(error);
  }
);


// Fungsi untuk menangani error
const handleError = (error) => {
  console.error("Request Error:", error);
  throw error;
};

// Fungsi untuk mengirim request API
const sendRequest = async (method, url, data) => {
  try {
    const response = await axiosInstance[method](url, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};


// Fungsi spesifik untuk berinteraksi dengan API
export const getAllProduct = async (url) => {
  return sendRequest('get', url); // Pastikan endpoint ini sesuai dengan backend
};

export const addNewProduct = async (url, data) => {
  return sendRequest('post', url, data); // Endpoint untuk menambahkan produk
};

export const updateProduct = async (url, data) => {
  return sendRequest('put', url, data); // Endpoint untuk mengupdate produk
};

export const deleteProduct = async (url) => {
  return sendRequest('delete', url); // Endpoint untuk menghapus produk
};