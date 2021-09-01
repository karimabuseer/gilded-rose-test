Shop =  require('../src/gildedRoseShop.js').Shop;
describe("Gilded Rose", function() {
  let manaPotionDouble; 
  beforeEach(() => { 
    manaPotionDouble = { name: 'manaPotion', sellIn: 20, quality: 20 } ;
  })

  it("should foo", function() {
    // console.log(Shop)
    const gildedRose = new Shop([manaPotionDouble]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("manaPotion");
  });

});