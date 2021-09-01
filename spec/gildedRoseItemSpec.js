Item =  require('../src/gildedRoseItem.js').Item;
describe("Item", function() {
  const testItem = new Item('swordOfSundering', 20, 10);
  
  it("should know its name", function() {
    expect((testItem).name).toEqual("swordOfSundering");
  });
});
