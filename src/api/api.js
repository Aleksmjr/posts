import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export async function apiRequest(endpoint, params = {}) {
  try {
    const response = await axios.get(`${BASE_URL}${endpoint}`, { params });
    return response.data;
  } catch (err) {
    console.error('API error:', err);
    return [];
  }
}
