class ElementTree {
  static get seasonElementSelector()      { return 'li.aciTreeLevel0 .aciTreeText'; }
  static get typeElementSelector()        { return 'li.aciTreeLevel1 .aciTreeText'; }
  static get publicationElementSelector() { return 'li.aciTreeLevel2 .aciTreeText'; }
  static get treeElementsSelector()       { return '.aciTreeOpen'; }

  /**
   * Выбирает сезон, тип и публикацию
   * @param seasonName
   * @param typeName
   * @param publicationName
   */
  chooseTreeItem(seasonName, typeName, publicationName) {
    const EC                 = protractor.ExpectedConditions,
          seasonElement      = this.constructor.seasonElementSelector,
          typeElement        = this.constructor.typeElementSelector,
          publicationElement = this.constructor.publicationElementSelector,
          treeElement        = this.constructor.treeElementsSelector,
          publicationItem    = element(by.cssContainingText(publicationElement, publicationName));
    $(this.constructor.treeElementsSelector).isPresent().then(function (result) {
      if (!result) {
        return browser.actions().doubleClick(element(by.cssContainingText(seasonElement, seasonName))).perform().then(function () {
          return browser.actions().doubleClick(element(by.cssContainingText(typeElement, typeName))).perform().then(function () {
            return browser.wait(EC.visibilityOf(publicationItem),5000).then(function () {
              return publicationItem.click();
            });
          });
        });
      }
      else{
        $(treeElement).isPresent().then(function (result) {
          if(!result) {
            return browser.actions().doubleClick(element(by.cssContainingText(typeElement, typeName))).perform().then(function () {
              return browser.wait(EC.visibilityOf(publicationItem),5000).then(function () {
                return publicationItem.click();
              });
            });
          }
          return browser.wait(EC.visibilityOf(publicationItem),5000).then(function () {
            return publicationItem.click();
          });
        });
      }
    });
  }
}

module.exports = new ElementTree();