// generateService.js

import fs from 'fs';
import path from 'path';

const serviceName = process.argv[2];

if (!serviceName) {
  console.error('Por favor proporciona un nombre para el servicio.');
  process.exit(1);
}

// Ruta para crear el archivo de servicio
const servicePath = path.join('src', 'services', `${serviceName}.js`);

// Ruta para crear la prueba del servicio
const testPath = path.join('src', '__tests__', 'services', `${serviceName}.spec.js`);

// Contenido del archivo de servicio
const serviceContent = `
import axios from 'axios';

const ${serviceName} = {
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

export default ${serviceName};
`;

// Contenido del archivo de prueba
const testContent = `
import ${serviceName} from '../../services/${serviceName}';
import axios from 'axios';
import { jest } from '@jest/globals';

jest.mock('axios');

describe('${serviceName}', () => {
  it('should fetch data successfully', async () => {
    const data = { key: 'value' };
    axios.get.mockResolvedValue({ data });

    const result = await ${serviceName}.fetchData('https://example.com');
    expect(result).toEqual(data);
  });

  it('should handle errors', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(${serviceName}.fetchData('https://example.com')).rejects.toThrow('Network Error');
  });
});
`;

// Crear directorio si no existe
fs.mkdirSync(path.dirname(servicePath), { recursive: true });
fs.mkdirSync(path.dirname(testPath), { recursive: true });

// Crear archivos
fs.writeFileSync(servicePath, serviceContent);
fs.writeFileSync(testPath, testContent);

console.log(`✅ Servicio ${serviceName}.js y su prueba ${serviceName}.spec.js generados exitosamente.`);
