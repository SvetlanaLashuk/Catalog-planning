/**
 * @overview
 * @copyright     Copyright (c) PETER-SERVICE RnD, 2018.
 */

class Sidebar {
  static get leftPanelSelector()        { return '#westLayout'; }
  static get menuItemElement()          { return '.text-justify'; }
  static get submenuItemElement()       { return '.list-group-item'; }
  static get formSelector()             { return '#seitenPlanungTable'; }
  static get submenuPanelElement()      { return '.panel-collapse.collapse.in'; }

  get westLayoutElement()  { return $(this.constructor.leftPanelSelector); }
  get formElement()        { return $(this.constructor.formSelector); }

  getMenuItems(menuItemName, submenuItemName) {
    let menuItem     = this.constructor.menuItemElement,
        submenuItem  = this.constructor.submenuItemElement;
    $(this.constructor.submenuPanelElement).isPresent().then(function (result) {
      if (!result) {
        element(by.cssContainingText(menuItem, menuItemName)).click();
      }
      element(by.cssContainingText(submenuItem, submenuItemName)).click();
    });
  }
}

module.exports = new Sidebar();