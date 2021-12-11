import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {
  it("Quality drops by one when a day passes", function () {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(6);
  });

  it("SellIn drops by one when a day passes", function () {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
  });

  it("Quality drops twice as fast when the date has passed", function () {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 0, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(5);
  });

  it("Quality never goes negativity", function () {
    const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("Aged Brie quality increase 1 by day", function () {
    const gildedRose = new GildedRose([new Item("Aged Brie", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(1);
  });

  it("Aged Brie quality increase when in date has passed", function () {
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });


});
