// generatePage.js

import fs from 'fs';
import path from 'path';

const pageRoute = process.argv[2]; // Ruta de la página (ej: weatherCities)
const pageName = process.argv[3]; // Nombre de la página (ej: WeatherCitiesByPopularity)

if (!pageRoute || !pageName) {
  console.error('Por favor proporciona una ruta y un nombre para la página.');
  process.exit(1);
}

// Rutas para crear los archivos de la página
const pagePath = path.join('src', 'pages', pageRoute, `${pageName}.jsx`);
const cssPath = path.join('src', 'pages', pageRoute, `${pageName}.css`);
const testPath = path.join('src', '__tests__', 'pages', pageRoute, `${pageName}.spec.js`);

// Contenido del archivo JSX de la página
const pageContent = `
import React from 'react';
import './${pageName}.css';

const ${pageName} = () => {
  return (
    <div className="${pageName.toLowerCase()}">
      <h1>Welcome to ${pageName} page</h1>
    </div>
  );
};

export default ${pageName};
`;

// Contenido del archivo CSS de la página
const cssContent = `
.${pageName.toLowerCase()} {
  padding: 20px;
  background-color: #f4f4f4;
}
`;

// Contenido del archivo de prueba de la página
const testContent = `
import { render, screen } from '@testing-library/react';
import ${pageName} from '../../pages/${pageRoute}/${pageName}';

describe('${pageName}', () => {
  it('should render the page', () => {
    render(<${pageName} />);
    const heading = screen.getByText(/Welcome to ${pageName} page/i);
    expect(heading).toBeInTheDocument();
  });
});
`;

// Crear directorios si no existen
fs.mkdirSync(path.dirname(pagePath), { recursive: true });
fs.mkdirSync(path.dirname(cssPath), { recursive: true });
fs.mkdirSync(path.dirname(testPath), { recursive: true });

// Crear los archivos
fs.writeFileSync(pagePath, pageContent);
fs.writeFileSync(cssPath, cssContent);
fs.writeFileSync(testPath, testContent);

console.log(`✅ Página ${pageName}.jsx, su estilo ${pageName}.css y su prueba ${pageName}.spec.js generados exitosamente.`);
