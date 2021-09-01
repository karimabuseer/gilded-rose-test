Shop =  require('../src/gildedRoseShop.js').Shop;
describe("Gilded Rose", function() {
  let manaPotionDouble; 
  let gildedRose;
  beforeEach(() => { 
    manaPotionDouble = { name: 'manaPotion', sellIn: 20, quality: 20 } ;
    gildedRose = new Shop([manaPotionDouble]);
    items = gildedRose.items;
  })

  it("should know details about its stock", function() {
    expect(items[0].name).toEqual("manaPotion");
  });

  describe('Normal items', () => { 
    it("should have their quality reduced by 1 when SellIn is positive int", () => {
      expect(gildedRose.items[0].quality).toEqual(20);
      gildedRose.updateQuality()
      expect(gildedRose.items[0].quality).toEqual(19);
    })
  })
});
