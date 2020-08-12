module.exports = {
  roots: ["<rootDir>"],
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest"
  // },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["<rootDir>/config/setupEnzyme.ts"],
  moduleNameMapper: {
    "^components(.*)$": "<rootDir>/components$1",
  }
}