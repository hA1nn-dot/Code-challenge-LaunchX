const Reader = require("../../lib/utils/Reader");
test("1) Test reader class", () => {
    const explorers = Reader.readJsonFile(__dirname+"/../data/visualpartners.test.json");
    expect(explorers).toBeDefined();
});