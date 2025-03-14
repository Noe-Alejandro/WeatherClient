import fs from 'fs';
import path from 'path';

const componentName = process.argv[2];

if (!componentName) {
  console.error('Por favor, proporciona un nombre para el componente.');
  process.exit(1);
}

const componentDir = path.join('src', 'components', componentName);
const testDir = path.join('src', '__tests__', 'components', componentName);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
}

if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}

const componentCode = `import React from 'react';
import './${componentName}.css';

const ${componentName} = () => {
  return (
    <div className="${componentName}">
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};
`;

const cssCode = `.${componentName} {
  /* Estilos para ${componentName} */
}
`;

const testCode = `import React from 'react';
import { render, screen } from '@testing-library/react';
import ${componentName} from '../../components/${componentName}/${componentName}';

describe('${componentName}', () => {
  test('debería renderizar el componente correctamente', () => {
    render(<${componentName} />);
    expect(screen.getByText('${componentName}')).toBeInTheDocument();
  });
});
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), componentCode);
fs.writeFileSync(path.join(componentDir, `${componentName}.css`), cssCode);
fs.writeFileSync(path.join(testDir, `${componentName}.spec.js`), testCode);

console.log(`Componente ${componentName} generado exitosamente.`);
