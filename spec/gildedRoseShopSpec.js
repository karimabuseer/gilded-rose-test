Shop =  require('../src/gildedRoseShop.js').Shop;
describe("Gilded Rose", function() {
  let manaPotionDouble; 
  beforeEach(() => { 
    manaPotionDouble = { name: 'manaPotion', sellIn: 20, quality: 20 } ;
  })

  it("should know details about its stock", function() {
    // console.log(Shop)
    const gildedRose = new Shop([manaPotionDouble]);
    const items = gildedRose.items;
    expect(items[0].name).toEqual("manaPotion");
  });
});
