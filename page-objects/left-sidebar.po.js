class Sidebar {
  static get leftPanelSelector()   { return '#westLayout'; }
  static get menuItemElement()     { return '.text-justify'; }
  static get submenuItemElement()  { return '.list-group-item'; }
  static get submenuPanelElement() { return '.panel-collapse.collapse.in'; }

  get westLayoutElement()  { return $(this.constructor.leftPanelSelector); }

  /**
   * Ожидание видимости бокового меню
   */
  waitForSidebarDisplayed() {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(this.westLayoutElement), 3000);
  }

  /**
   * Кликает по пункту меню. Если пункт меню открыт, кликает по подпункту меню
   * @param menuItemName
   * @param submenuItemName
   */
  chooseMenuItem(menuItemName, submenuItemName) {
    const menuItem     = this.constructor.menuItemElement,
          submenuItem  = this.constructor.submenuItemElement;
    $(this.constructor.submenuPanelElement).isPresent().then(function (result) {
      if (!result) {
        return element(by.cssContainingText(menuItem, menuItemName)).click();
      }
      return element(by.cssContainingText(submenuItem, submenuItemName)).click();
    });
  }
}

module.exports = new Sidebar();