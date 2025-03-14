import '@testing-library/jest-dom';

// Configuración de variables de entorno (en lugar de `import.meta`)
process.env.VITE_API_URL = 'https://localhost:44336/';

// Si necesitas configurar TextEncoder/TextDecoder para algunas dependencias
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
