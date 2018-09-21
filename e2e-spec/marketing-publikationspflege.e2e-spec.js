/**
 * @overview Спецификация для тестирования формы Marketing Publikationspflege
 */
describe('Marketing Publikationspflege form', function () {
  const sidebar       = require("../page-objects/left-sidebar.po.js"),
        elementTree   = require("../page-objects/element-tree.po.js"),
        werberplanung = require("../page-objects/werberplanung.po.js"),
        utils         = require("../helpers/utils.js"),
        title         = require("../page-objects/title.po.js"),
        data          = require("../helpers/marketing-publikationspflege.json");
  beforeEach(function () {
    browser.get('http://localhost:8080/catalog-planning/#/productionsEditor');
  });

  it('Tests whether PuC.Marketing Publikationspflege form is displayed', function (done) {
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

  it('Checks whether fields have necessary values', function (done) {
    sidebar.waitForSidebarDisplayed().then(function () {
      return sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    }).then(function () {
      return elementTree.chooseTreeItem(data.season, data.type, data.publication);
    }).then(function () {
      return utils.getValue(werberplanung.numberElement);
    }).then(function (number) {
      expect(number).toBe(data.number);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.typeElement).getText();
    }).then(function (type) {
      expect(type).toBe(data.typ.option2);
    }).then(function () {
      return utils.getValue(werberplanung.dateElement);
    }).then(function (date) {
      expect(date).toBe(data.date);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.priceElement).getText();
    }).then(function (price) {
      expect(price).toBe(data.price.option1);
    }).then(function () {
      done();
    });
  });

  it('Checks whether fields have values that corresponds to the entered values', function (done) {
    sidebar.waitForSidebarDisplayed().then(function () {
      return sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    }).then(function () {
      return elementTree.chooseTreeItem(data.season, data.type, data.publication);
    }).then(function () {
      return werberplanung.fillNumberField(data, utils);
    }).then(function (number) {
      expect(number).toBe(data.enteredNumber);
    }).then(function () {
      return werberplanung.selectPublicationType(utils);
    }).then(function (type) {
      expect(type).toBe(data.typ.option1);
    }).then(function () {
      return werberplanung.selectPrice(data, utils);
    }).then(function (type) {
      expect(type).toBe(data.price.option2);
    }).then(function () {
      return werberplanung.fillDateField(data, utils);
    }).then(function (date) {
      expect(date).toBe(data.enteredDate);
    }).then(function () {
      return werberplanung.selectCountry(data, utils);
    }).then(function (country) {
      expect(country).toBe(data.country.option4);
    }).then(function () {
      return werberplanung.fillCommentField(data, utils);
    }).then(function (comment) {
      expect(comment).toBe(data.comment);
    }).then(function () {
      done();
    });
  });

  it('Checks whether changes were cancelled', function (done) {
    sidebar.waitForSidebarDisplayed().then(function () {
      return sidebar.chooseMenuItem(data.menuItem, data.submenuItem);
    }).then(function () {
      elementTree.chooseTreeItem(data.season, data.type, data.publication);
    }).then(function () {
      return werberplanung.fillNumberField(data, utils);
    }).then(function () {
      return werberplanung.selectPublicationType(utils);
    }).then(function () {
      return werberplanung.selectPrice(data, utils);
    }).then(function () {
      return werberplanung.fillDateField(data, utils);
    }).then(function (number) {
      expect(number).toBe(data.enteredDate);
    }).then(function () {
      return werberplanung.selectCountry(data, utils);
    }).then(function () {
      return werberplanung.commentElement.sendKeys(data.comment);
    }).then(function () {
      return werberplanung.buttonElement.click();
    }).then(function () {
      return werberplanung.textElement.getText();
    }).then(function (text) {
      expect(text).toBe(data.cancelWord);
    }).then(function () {
      return utils.getValue(werberplanung.numberElement);
    }).then(function (number) {
      expect(number).toBe(data.number);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.typeElement).getText();
    }).then(function (type) {
      expect(type).toBe(data.typ.option2);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.priceElement).getText();
    }).then(function (price) {
      expect(price).toBe(data.price.option1);
    }).then(function () {
      return utils.getSelectedDropdownItem(werberplanung.countryElement).getText();
    }).then(function (country) {
      expect(country).toBe(data.country.option1);
    }).then(function () {
      return utils.getValue(werberplanung.commentElement);
    }).then(function (comment) {
      expect(comment).toBe('');
    }).then(function () {
      done();
    });
  });
});
