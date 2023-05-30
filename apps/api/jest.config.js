const baseConfig = require("jest-config/jest.config.js");

/** @typedef {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  ...baseConfig,
  testEnvironment: "node"
};
