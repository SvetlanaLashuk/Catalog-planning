/**
 * @overview
 * @copyright     Copyright (c) PETER-SERVICE RnD, 2018.
 */

class ElementTree {
  static get seasonElementSelector()      { return 'li.aciTreeLevel0 .aciTreeText'; }
  static get typeElementSelector()        { return 'li.aciTreeLevel1 .aciTreeText'; }
  static get publicationElementSelector() { return 'li.aciTreeLevel2 .aciTreeText'; }
  static get treeElementsSelector()       { return '.aciTreeOpen'; }

  getTreeItems(seasonName, typeName, publicationName) {
    let seasonElement      = this.constructor.seasonElementSelector,
        typeElement        = this.constructor.typeElementSelector,
        publicationElement = this.constructor.publicationElementSelector,
        treeElement        = this.constructor.treeElementsSelector;
    $(this.constructor.treeElementsSelector).isPresent().then(function (result) {
      if (!result) {
        browser.actions().doubleClick(element(by.cssContainingText(seasonElement, seasonName))).perform();
        browser.actions().doubleClick(element(by.cssContainingText(typeElement, typeName))).perform();
        browser.sleep(5000);
        element(by.cssContainingText(publicationElement, publicationName)).click();
      }
      else{
        $(treeElement).isPresent().then(function (result) {
          if(!result) {
            browser.actions().doubleClick(element(by.cssContainingText(typeElement, typeName))).perform();
            browser.sleep(5000);
            element(by.cssContainingText(publicationElement, publicationName)).click();
          }
          browser.sleep(5000);
          element(by.cssContainingText(publicationElement, publicationName)).click();
        });
      }
    });
  }
}

module.exports = new ElementTree();