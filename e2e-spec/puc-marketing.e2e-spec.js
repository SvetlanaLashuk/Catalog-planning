describe('PuC.Marketing testing', function () {
  const sidebar       = require("../page-objects/left-sidebar.po.js"),
        elementTree   = require("../page-objects/element-tree.po.js"),
        werberplanung = require("../page-objects/right-sidebar.po.js"),
        utils         = require("../helpers/utils.js"),
        title         = require("../page-objects/title.po.js"),
        data          = require("../helpers/marketing.json");
  beforeEach(function () {
    browser.get('http://localhost:8080/catalog-planning/#/productionsEditor');
  });

  it('Tests whether PuC.Marketing Publikationspflege form is displayed', function (done) {
    sidebar.waitForSidebarDisplayed();
    sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    title.titleElement.getText().then(function (text) {
      expect(text).toEqual(data.submenuItem);
    }).then(function () {
      done();
    });
  });

  it('Checks whether fields have necessary values', function (done) {
    sidebar.waitForSidebarDisplayed();
    sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    elementTree.chooseTreeItem(data.season, data.type, data.publication);
    utils.getValue(werberplanung.numberElement).then(function (number) {
      expect(number).toBe(data.nummer);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.typeElement).getText();
    }).then(function (type) {
      expect(type).toBe(data.typ.option2);
    }).then(function () {
      return utils.getValue(werberplanung.dateElement);
    }).then(function (date) {
      expect(date).toBe(data.ET);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.priceElement).getText();
    }).then(function (price) {
      expect(price).toBe(data.preise.option1);
    }).then(function () {
      done();
    });
  });

  it('Checks whether fields have values that corresponds to the entered values', function (done) {
    sidebar.waitForSidebarDisplayed();
    sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    elementTree.chooseTreeItem(data.season, data.type, data.publication);
    werberplanung.numberElement.clear().then(function () {
      return werberplanung.numberElement.sendKeys(data.enteredNummer);
    }).then(function () {
      return utils.getValue(werberplanung.numberElement);
    }).then(function (number) {
      expect(number).toBe(data.enteredNummer);
    }).then(function () {
      return werberplanung.typeElement;
    }).then(function (res) {
      return res.all(by.tagName('option')).get(0).click();  // почему-то функция getDropdownItem(right-sidebar.po) не работает для первого элемента списка
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.typeElement).getText();
    }).then(function (type) {
      expect(type).toBe(data.typ.option1);
    }).then(function () {
      return werberplanung.priceElement;
    }).then(function () {
      return werberplanung.getDropdownItem(data.preise.option2).click();
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.priceElement).getText();
    }).then(function (type) {
      expect(type).toBe(data.preise.option2);
    }).then(function () {
      return werberplanung.dateElement.clear();
    }).then(function () {
      return werberplanung.dateElement.sendKeys(data.enteredET);
    }).then(function () {
      return utils.getValue(werberplanung.dateElement);
    }).then(function (number) {
      expect(number).toBe(data.enteredET);
    }).then(function () {
      return werberplanung.countryElement;
    }).then(function (res) {
      return werberplanung.getDropdownItem(data.land.option4).click();
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.countryElement).getText();
    }).then(function (country) {
      expect(country).toBe(data.land.option4);
    }).then(function () {
      return werberplanung.commentElement.sendKeys(data.kommentar);
    }).then(function () {
      return utils.getValue(werberplanung.commentElement);
    }).then(function (comment) {
      expect(comment).toBe(data.kommentar);
    }).then(function () {
      done();
    });
  });

  it('Checks whether changes are cancelled', function (done) {
    sidebar.waitForSidebarDisplayed();
    sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    elementTree.chooseTreeItem(data.season, data.type, data.publication);
    werberplanung.numberElement.clear().then(function () {
      return werberplanung.numberElement.sendKeys(data.enteredNummer);
    }).then(function () {
      return werberplanung.typeElement;
    }).then(function (res) {
      return res.all(by.tagName('option')).get(0).click();
    }).then(function () {
      return werberplanung.priceElement;
    }).then(function () {
      return werberplanung.getDropdownItem(data.preise.option2).click();
    }).then(function () {
      return werberplanung.dateElement.clear();
    }).then(function () {
      return werberplanung.dateElement.sendKeys(data.enteredET);
    }).then(function () {
      return utils.getValue(werberplanung.dateElement);
    }).then(function (number) {
      expect(number).toBe(data.enteredET);
    }).then(function () {
      return werberplanung.countryElement;
    }).then(function () {
      return werberplanung.getDropdownItem(data.land.option4).click();
    }).then(function () {
      return werberplanung.commentElement.sendKeys(data.kommentar);
    }).then(function () {
      return werberplanung.buttonElement.click();
    }).then(function () {
      return werberplanung.textElement.getText();
    }).then(function (text) {
      expect(text).toBe(data.cancelWord);
    }).then(function () {
      return utils.getValue(werberplanung.numberElement);
    }).then(function (number) {
      expect(number).toBe(data.nummer);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.typeElement).getText();
    }).then(function (type) {
      expect(type).toBe(data.typ.option2);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.priceElement).getText();
    }).then(function (price) {
      expect(price).toBe(data.preise.option1);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.countryElement).getText();
    }).then(function (country) {
      expect(country).toBe(data.land.option1);
    }).then(function () {
      return utils.getValue(werberplanung.commentElement);
    }).then(function (comment) {
      expect(comment).toBe('');
    }).then(function () {
      done();
    });
  });
});
