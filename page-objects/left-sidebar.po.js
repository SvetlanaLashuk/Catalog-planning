/**
 * Page Object левого бокового меню
 */
class Sidebar {
  static get leftPanelSelector()   { return '#westLayout'; }
  static get menuItemElement()     { return '.text-justify'; }
  static get submenuItemElement()  { return '.list-group-item'; }
  static get submenuPanelElement() { return '.list-group'; }

  get westLayoutElement()  { return $(this.constructor.leftPanelSelector); }

  /**
   * Ожидание видимости бокового меню
   */
  waitForSidebarDisplayed() {
    const EC = protractor.ExpectedConditions;
    return browser.wait(EC.visibilityOf(this.westLayoutElement), 5000);
  }

  /**
   * Кликает по пункту меню. Если пункт меню открыт, кликает по подпункту меню
   * @param menuItemName название пункта меню
   * @param submenuItemName название подпункта меню
   */
  chooseMenuItem(menuItemName, submenuItemName) {
    const menuItem     = this.constructor.menuItemElement,
          submenuItem  = this.constructor.submenuItemElement,
          EC           = protractor.ExpectedConditions;
    return $(this.constructor.submenuPanelElement).isPresent().then(function (result) {
      if (!result) {
        return element(by.cssContainingText(menuItem, menuItemName)).click().then(function () {
          return element(by.cssContainingText(submenuItem, submenuItemName));
        }).then(function (element) {
          return browser.wait(EC.visibilityOf(element), 5000);
        }).then(function () {
           return element(by.cssContainingText(submenuItem, submenuItemName)).click();
        });
      }
      else {
           return element(by.cssContainingText(submenuItem, submenuItemName)).click();
      }
    });
  }
}

module.exports = new Sidebar();