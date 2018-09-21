/**
 * Page Object древовидной структуры элементов на форме PuC.Marketing Publikationspflege
 */
class ElementTree {
  static get seasonElementSelector()      { return 'li.aciTreeLevel0 .aciTreeText'; }
  static get typeElementSelector()        { return 'li.aciTreeLevel1 .aciTreeText'; }
  static get publicationElementSelector() { return 'li.aciTreeLevel2 .aciTreeText'; }
  static get treeElementsSelector()       { return '.aciTreeOpen'; }

  static get publikationspflegeFormSelector()   { return '#content'; }
  get publikationspflegeFormElement() {return $(this.constructor.publikationspflegeFormSelector); }

  /**
   * Выбирает сезон, тип и публикацию
   * @param seasonName название сезона
   * @param typeName название типа
   * @param publicationName название публикации
   */
  chooseTreeItem(seasonName, typeName, publicationName) {
    const EC                 = protractor.ExpectedConditions,
          seasonElement      = this.constructor.seasonElementSelector,
          typeElement        = this.constructor.typeElementSelector,
          publicationElement = this.constructor.publicationElementSelector,
          treeElement        = this.constructor.treeElementsSelector,
          publicationItem    = element(by.cssContainingText(publicationElement, publicationName));
    return $(this.constructor.treeElementsSelector).isPresent().then(function (result) {
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
        return $(treeElement).isPresent().then(function (result) {
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