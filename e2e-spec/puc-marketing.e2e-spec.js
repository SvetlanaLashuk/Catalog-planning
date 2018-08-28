/**
 * @overview
 * @copyright     Copyright (c) PETER-SERVICE RnD, 2018.
 */

describe('PuC.Marketing testing', function () {
  const sidebar       = require("../page-objects/left-sidebar.po.js"),
        elementTree   = require("../page-objects/element-tree.po.js"),
        werberplanung = require("../page-objects/right-sidebar.po.js"),
        utils         = require("../helpers/utils.js"),
        title         = require("../page-objects/title.po.js"),
        data          = require("../helpers/data.json"),
        EC            = protractor.ExpectedConditions;
  beforeEach(function () {
    browser.get('http://localhost:8080/catalog-planning/#/productionsEditor');
  });

  it('Tests whether necessary form is displayed', function (done) {
    browser.wait(EC.visibilityOf(sidebar.westLayoutElement), 3000);
    sidebar.getMenuItems(data.menuItem, data.submenuItem);
    title.titleElement.getText().then(function (text) {
      expect(text).toEqual(data.submenuItem);
    }).then(function () {
      done();
    });
  });

  it('Checks whether fields have necessary values', function (done) {
    browser.wait(EC.visibilityOf(sidebar.westLayoutElement), 3000);
    sidebar.getMenuItems(data.menuItem, data.submenuItem);
    elementTree.getTreeItems(data.season, data.type, data.publication);
    utils.getValue(werberplanung.numberElement).then(function (number) {
      expect(number).toBe(data.nummer);
    }).then(function () {
      return utils.getOptionValue(werberplanung.typeElement);
    }).then(function (type) {
      expect(type).toBe(data.typ.option2);
    }).then(function () {
      return utils.getValue(werberplanung.dateElement);
    }).then(function (date) {
      expect(date).toBe(data.ET);
    }).then(function () {
      return utils.getOptionValue(werberplanung.priceElement);
    }).then(function (price) {
      expect(price).toBe(data.preise.option1);
    }).then(function () {
      done();
    });
  });

  it('Checks whether fields have values that corresponds to the entered values', function (done) {
    browser.wait(EC.visibilityOf(sidebar.westLayoutElement), 3000);
    sidebar.getMenuItems(data.menuItem, data.submenuItem);
    elementTree.getTreeItems(data.season, data.type, data.publication);
    werberplanung.numberElement.clear().then(function () {
      return werberplanung.numberElement.sendKeys(data.enteredNummer);
    }).then(function () {
      return utils.getValue(werberplanung.numberElement);
    }).then(function (number) {
      expect(number).toBe(data.enteredNummer);
    }).then(function () {
      return werberplanung.typeElement;
    }).then(function (res) {
      return res.all(by.tagName('option')).get(0).click();  // почему-то функция getOption(right-sidebar.po) не работает для первого элемента списка
    }).then(function () {
      return utils.getOptionValue(werberplanung.typeElement);
    }).then(function (type) {
      expect(type).toBe(data.typ.option1);
    }).then(function () {
      return werberplanung.priceElement;
    }).then(function () {
      return werberplanung.getOption(data.preise.option2);
    }).then(function () {
      return utils.getOptionValue(werberplanung.priceElement);
    }).then(function (type) {
      expect(type).toBe(data.preise.option2);
    }).then(function () {
      werberplanung.dateElement.clear();
    }).then(function () {
      return werberplanung.dateElement.sendKeys(data.enteredET);
    }).then(function () {
      return utils.getValue(werberplanung.dateElement);
    }).then(function (number) {
      expect(number).toBe(data.enteredET);
    }).then(function () {
      return werberplanung.countryElement;
    }).then(function (res) {
      return werberplanung.getOption(data.land.option4);
    }).then(function () {
      return utils.getOptionValue(werberplanung.countryElement);
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
    browser.wait(EC.visibilityOf(sidebar.westLayoutElement), 3000);
    sidebar.getMenuItems(data.menuItem, data.submenuItem);
    elementTree.getTreeItems(data.season, data.type, data.publication);
    werberplanung.numberElement.clear().then(function () {
      return werberplanung.numberElement.sendKeys(data.enteredNummer);
    }).then(function () {
      return werberplanung.typeElement;
    }).then(function (res) {
      return res.all(by.tagName('option')).get(0).click();
    }).then(function () {
      return werberplanung.priceElement;
    }).then(function () {
      return werberplanung.getOption(data.preise.option2);
    }).then(function () {
      werberplanung.dateElement.clear();
    }).then(function () {
      return werberplanung.dateElement.sendKeys(data.enteredET);
    }).then(function () {
      return utils.getValue(werberplanung.dateElement);
    }).then(function (number) {
      expect(number).toBe(data.enteredET);
    }).then(function () {
      return werberplanung.countryElement;
    }).then(function () {
      return werberplanung.getOption(data.land.option4);
    }).then(function () {
      return werberplanung.commentElement.sendKeys(data.kommentar);
    }).then(function () {
      werberplanung.buttonElement.click();
    }).then(function () {
      return werberplanung.textElement.getText();
    }).then(function (text) {
      expect(text).toBe(data.cancelWord);
    }).then(function () {
      return utils.getValue(werberplanung.numberElement);
    }).then(function (number) {
      expect(number).toBe(data.nummer);
    }).then(function () {
      return utils.getOptionValue(werberplanung.typeElement);
    }).then(function (type) {
      expect(type).toBe(data.typ.option2);
    }).then(function () {
      return utils.getOptionValue(werberplanung.priceElement);
    }).then(function (price) {
      expect(price).toBe(data.preise.option1);
    }).then(function () {
      return utils.getOptionValue(werberplanung.countryElement);
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
