const LEGENDARY_ITEMS = ['Sulfuras, Hand of Ragnaros']
const RARE_ITEMS = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert']

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.quality > 0) {
          if (!this.isLegendary(item)) {
            this.lowerQuality(item);
          }
        }
      } else {
        if (item.quality < 50) {
          this.increaseQualityByOne(item)
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
           this.increaseBackstagePassQuality(item);
          }
        }
      }
      if (!this.isLegendary(item)) {
        this.lowerSellIn(item);
      }
      if (item.sellIn < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > 0) {
              if (!this.isLegendary(item)) {
                this.lowerQuality(item)
              }
            }
          } else {
            this.setItemQualityToZero(item);
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

  lowerQuality (item) { 
    item.quality = item.quality - 1;
  }

  increaseQualityByOne (item) {
    item.quality = item.quality + 1;
  }

  increaseBackstagePassQuality(item) {
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

  setItemQualityToZero(item) { 
    item.quality = item.quality - item.quality;
  }

  isLegendary(item) { 
    return item.name == 'Sulfuras, Hand of Ragnaros'
  }
}

module.exports = {
  Shop: Shop
}