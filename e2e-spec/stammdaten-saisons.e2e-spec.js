describe("STAMMDATEN-Saisons form", function () {
  const sidebar    = require("../page-objects/left-sidebar.po.js"),
        saisonForm = require("../page-objects/saison-form.po.js"),
        saison     = require("../page-objects/saison.po"),
        utils      = require("../helpers/utils.js"),
        title      = require("../page-objects/title.po.js"),
        data       = require("../helpers/stammdaten-saisons.json");
  beforeEach(function () {
    browser.get('http://localhost:8080/catalog-planning/#/productionsEditor');
  });

  it("Tests whether form PuC.Marketing Saisons is displayed", function (done) {
    sidebar.waitForSidebarDisplayed();
    sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    title.titleElement.getText().then(function (text) {
      expect(text).toEqual(data.submenuItem);
    }).then(function () {
      done();
    });
  });

  it("Checks whether fields have necessary values", function (done) {
    sidebar.waitForSidebarDisplayed();
    sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    saisonForm.waitForSeasonFormDisplayed();
    saisonForm.chooseSeason("Herbst/Winter 2012/2013");
    utils.getValue(saison.name).then(function (name) {
      expect(name).toBe(data.seasonName);
    }).then(function () {
      return utils.getValue(saison.saisontyp);
    }).then(function (type) {
      expect(type).toBe(data.saisontyp);
    }).then(function () {
      return utils.getValue(saison.startdatum);
    }).then(function (startDate) {
      expect(startDate).toBe(data.startdatum);
    }).then(function () {
      return utils.getValue(saison.enddatum);
    }).then(function (endDate) {
      expect(endDate).toBe(data.enddatum);
    }).then(function () {
      done();
    })
  });
});