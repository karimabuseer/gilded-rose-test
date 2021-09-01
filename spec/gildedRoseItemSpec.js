Item =  require('../src/gildedRoseItem.js').Item;
describe("Item", function() {
  const testItem = new Item('swordOfSundering', 20, 10);
  
  it("should know its name", function() {
    expect((testItem).name).toEqual("swordOfSundering");
  });

  it("should know its sellIn", function() {
    expect((testItem).sellIn).toEqual(20);
  });

  it("should know its quality", function() {
    expect((testItem).sellIn).toEqual(10);
  });
});
