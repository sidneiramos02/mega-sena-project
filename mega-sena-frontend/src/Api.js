import axios from 'axios';

const baseURL= process.env.REACT_APP_API_URL || 'http://localhost:3000/api'

export const createDraw = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/sorteios`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar sorteio:', error);
    throw error;
  }
};

export const getDraws = async () => {
  try {
    const response = await axios.get(`${baseURL}/count`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar sorteios:', error);
    throw error;
  }
};
