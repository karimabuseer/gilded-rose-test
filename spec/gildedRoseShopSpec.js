Shop =  require('../src/gildedRoseShop.js').Shop;
describe("Gilded Rose", function() {
  let manaPotionDouble; 
  let gildedRose;
  beforeEach(() => { 
    manaPotionDouble = { name: 'manaPotion', sellIn: 10, quality: 20 } ;
    gildedRose = new Shop([manaPotionDouble]);
    items = gildedRose.items;
  });

  it("should know details about its stock", function() {
    expect(items[0].name).toEqual("manaPotion");
  });

  describe('Normal items', () => { 
    it("have their quality reduced by 1 when SellIn is positive int", () => {
      expect(gildedRose.items[0].quality).toEqual(20);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].quality).toEqual(19);
    });

    it("have their sellIn reduced by 1 when sellIn is positive int", () => {
      expect(gildedRose.items[0].sellIn).toEqual(10);
      gildedRose.updateQuality();
      expect(gildedRose.items[0].sellIn).toEqual(9);
    });
  })

  describe('Aged Brie', () => {
    let agedBrieDouble;
    beforeEach(() => { 
      agedBrieDouble = { name: 'Aged Brie', sellIn: 10, quality: 48 } ;
      gildedRose = new Shop([agedBrieDouble]);
      items = gildedRose.items;
    });

    it("has a quality that increases whilst sellIn is a positive int", () => { 
      expect(items[0].quality).toEqual(48);
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(49);
    })

    it("does not have its quality increased above 50", () => {
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    })
  });
  
  describe('Legendary Items', () => {
    let sulfuras;
    beforeEach(() => { 
      sulfuras = { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 49 } ;
      gildedRose = new Shop([sulfuras]);
      items = gildedRose.items;
    });

    it("sellIn never changes", () => {
      expect(items[0].sellIn).toEqual(0)
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0)
    })

    it("quality never changes", () => {
      expect(items[0].quality).toEqual(49)
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(49)
    })
    
  });

  describe('Legendary items', () => {
    
  });

  
});
