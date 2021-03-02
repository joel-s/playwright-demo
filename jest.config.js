module.exports = {
  preset: "jest-playwright-preset",
  testMatch: ["**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["chromium"],
    },
  },
};
