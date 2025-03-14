
import axios from 'axios';

const weatherService = {
  async fetchData(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
};

export default weatherService;
