/**
 * @overview Спецификация для тестирования формы STAMMDATEN Vorteile
 */
describe("STAMMDATEN Vorteile form", function () {
  const sidebar      = require("../page-objects/left-sidebar.po.js"),
        vorteileForm = require("../page-objects/vorteile-form.po.js"),
        utils        = require("../helpers/utils.js"),
        title        = require("../page-objects/title.po.js"),
        data         = require("../helpers/stammdaten-vorteile.json");
  beforeEach(function () {
    browser.get('http://localhost:8080/catalog-planning/#/productionsEditor');
  });

  it('Tests whether PuC.Marketing Vorteile form is displayed', function (done) {
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

  it('Checks whether field has necessary value', function (done) {
    sidebar.waitForSidebarDisplayed().then(function () {
      return sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    }).then(function () {
      return vorteileForm.waitForVorteileFormDisplayed();
    }).then(function () {
      return utils.click(vorteileForm.chooseLine(data.lineName));
    }).then(function () {
      return  utils.getValue(vorteileForm.name);
    }).then(function (name) {
      expect(name).toBe(data.lineName);
    }).then(function () {
      done();
    })
  });

  it('Checks whether new line with entered name is displayed', function (done) {
    sidebar.waitForSidebarDisplayed().then(function () {
      return sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    }).then(function () {
      return vorteileForm.waitForVorteileFormDisplayed();
    }).then(function () {
      return vorteileForm.plusButton();
    }).then(function () {
      return vorteileForm.waitForModalWindowDisplayed();
    }).then(function () {
      return browser.actions().mouseMove(vorteileForm.name).sendKeys(data.enteredName).perform();
    }).then(function () {
      return vorteileForm.modalWindowButton(data.button.name1);
    }).then(function () {
      return utils.click(vorteileForm.chooseLine(data.enteredName));
    }).then(function () {
      return utils.getValue(vorteileForm.name);
    }).then(function (name) {
      expect(name).toBe(data.enteredName);
    }).then(function () {
      done();
    });
  });

  it('Checks whether line was edited', function (done) {
    sidebar.waitForSidebarDisplayed().then(function () {
      return sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    }).then(function () {
      return vorteileForm.waitForVorteileFormDisplayed();
    }).then(function () {
      return utils.click(vorteileForm.chooseLine(data.enteredName));
    }).then(function () {
      return vorteileForm.name.clear();
    }).then(function () {
      return vorteileForm.name.sendKeys(data.editedName);
    }).then(function () {
      return vorteileForm.saveButton();
    }).then(function () {
      return vorteileForm.chooseLine(data.editedName);
    }).then(function () {
      return utils.getValue(vorteileForm.name);
    }).then(function (res) {
      expect(res).toBe(data.editedName)
    }).then(function () {
      done();
    });
  });

  it('Checks whether line was deleted', function (done) {
    sidebar.waitForSidebarDisplayed().then(function () {
      return sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    }).then(function () {
      return vorteileForm.waitForVorteileFormDisplayed();
    }).then(function () {
      return utils.click(vorteileForm.chooseLine(data.editedName));
    }).then(function () {
      return vorteileForm.minusButton();
    }).then(function () {
      return vorteileForm.waitForModalWindowDisplayed();
    }).then(function () {
      return vorteileForm.modalWindowButton(data.button.name2);
    }).then(function () {
      return vorteileForm.chooseLine(data.editedName).isPresent();
    }).then(function (res) {
      expect(res).toBe(false);
    }).then(function () {
      done();
    });
  });
});