Shop = require('../src/gildedRoseShop.js').Shop;

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

  describe('Backstage Passes', () => {
    let backstagePass;
    let ancientBackstagePass;
    let archaicBackstagePass;
    beforeEach(() => { 
      backstagePass = { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 11, quality: 20 };
      ancientBackstagePass = { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 7, quality: 25 };
      archaicBackstagePass = { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 1, quality: 30 } ;
      gildedRose = new Shop([backstagePass, ancientBackstagePass, archaicBackstagePass]);
      items = gildedRose.items;
    });
    it("Quality increases by 1 when sellIn is greater than 10",() => {
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(21);
    });

    it("Quality increases by 2 when sellIn is greater than 5 but less than or equal to 10",() => {
      gildedRose.updateQuality();
      expect(items[1].quality).toEqual(27);
    });

    it("Quality increases by 3 when sellIn is greater than 0 but less than or equal to 5",() => {
      gildedRose.updateQuality();
      expect(items[2].quality).toEqual(33);
    });

    it("Quality drops to 0 when updateQuality is run and sellIn is equal to or less than 0",() => {
      gildedRose.updateQuality();
      gildedRose.updateQuality();
      expect(items[2].quality).toEqual(0);
    });
  });

  describe("Conjured items", () => {
    let conjuredHealthPotionDouble
    beforeEach(() => { 
      conjuredHealthPotionDouble = { name: 'Conjured Health Potion', sellIn: 10, quality: 10 } ;
      gildedRose = new Shop([conjuredHealthPotionDouble]);
      items = gildedRose.items;
    });
    it("Quality drops by 2 when a day passes for a conjured item and sellIn is above 0", () => {
      expect(items[0].quality).toEqual(10)
      gildedRose.updateQuality();
      expect(items[0].quality).toEqual(8)
    });
  })
  
   
});
