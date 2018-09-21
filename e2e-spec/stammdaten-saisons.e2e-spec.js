/**
 * @overview Спецификация для тестирования формы STAMMDATEN Saisons
 */
describe("STAMMDATEN Saisons form", function () {
  const sidebar    = require("../page-objects/left-sidebar.po.js"),
        seasonForm = require("../page-objects/season-form.po.js"),
        season     = require("../page-objects/season.po"),
        utils      = require("../helpers/utils.js"),
        title      = require("../page-objects/title.po.js"),
        data       = require("../helpers/stammdaten-saisons.json");
  beforeEach(function () {
    browser.get('http://localhost:8080/catalog-planning/#/productionsEditor');
  });

  it("Tests whether form PuC.Marketing Saisons is displayed", function (done) {
    sidebar.waitForSidebarDisplayed().then(function () {
      return sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    }).then(function () {
      return title.titleElement.getText();
    }).then(function (text) {
      expect(text).toEqual(data.submenuItem);
    }).then(function () {
      done();
    });
  });

  it("Checks whether fields have necessary values", function (done) {
    sidebar.waitForSidebarDisplayed().then(function () {
      return sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    }).then(function () {
      return seasonForm.waitForSeasonFormDisplayed();
    }).then(function () {
      return seasonForm.chooseSeason(data.seasonType);
    }).then(function () {
      return utils.getValue(season.name);
    }).then(function (name) {
      expect(name).toBe(data.seasonName);
    }).then(function () {
      return utils.getValue(season.seasonType);
    }).then(function (type) {
      expect(type).toBe(data.seasonType);
    }).then(function () {
      return utils.getValue(season.startDate);
    }).then(function (startDate) {
      expect(startDate).toBe(data.startDate);
    }).then(function () {
      return utils.getValue(season.endDate);
    }).then(function (endDate) {
      expect(endDate).toBe(data.endDate);
    }).then(function () {
      done();
    });
  });
});