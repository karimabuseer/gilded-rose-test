class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            this.regularLowerQualityByOne(item);
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
           this.calculateBackstagePassChange(item);
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        this.lowerSellIn(item);
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                this.regularLowerQualityByOne(item)
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            this.increaseQualityByOne(item);
          }
        }
      }
    });

    return this.items;
  }

  regularLowerQualityByOne (item) { 
    item.quality = item.quality - 1;
  }

  increaseQualityByOne (item) {
    item.quality = item.quality + 1;
  }

  calculateBackstagePassChange(item) {
    if (item.sellIn < 11) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
    if (item.sellIn < 6) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }

  lowerSellIn(item) {
    item.sellIn = item.sellIn - 1;
  }

}


module.exports = {
  Shop: Shop
}