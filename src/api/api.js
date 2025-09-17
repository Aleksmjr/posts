import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function joinUrl(base, endpoint) {
  return `${base.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
}

export async function apiRequest(endpoint, params = {}) {
  try {
    const url = joinUrl(BASE_URL, endpoint);
    const response = await axios.get(url, { params });
    return response.data;
  } catch (err) {
    console.error('API error:', err);
    return [];
  }
}
