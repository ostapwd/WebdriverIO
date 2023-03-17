module.exports = {
  testTimeout: 10000,
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    '**/tests/**/*.test.ts'
  ],
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Test Report",
      "outputPath": "src/reports/index.html"
    }]
  ]
}