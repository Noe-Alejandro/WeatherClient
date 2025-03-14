
import { weatherService } from '../../services/weatherService';
import axios from 'axios';
import { jest } from '@jest/globals';

jest.mock('axios');

describe('weatherService', () => {
  it('should fetch data successfully', async () => {
    const data = { key: 'value' };
    axios.get.mockResolvedValue({ data });

    const result = await weatherService.fetchData('https://example.com');
    expect(result).toEqual(data);
  });
});
