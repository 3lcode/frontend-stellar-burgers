import type {Config} from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const config: Config = {
  collectCoverage: true,

  coverageDirectory: "coverage",
  preset: 'ts-jest',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),

  // Указываем расширения файлов, которые Jest будет обрабатывать
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],

  // Настройка для обработки TypeScript и JavaScript файлов
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Используем ts-jest для TypeScript
    '^.+\\.(js|jsx)$': 'babel-jest', // Используем babel-jest для JavaScript (если нужно)
  },
};

export default config;