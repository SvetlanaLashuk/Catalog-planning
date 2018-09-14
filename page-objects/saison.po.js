class Saison {
  get name() {
    return element(by.model('item.identity'));
  }

  get saisontyp() {
    return element(by.model('item.name'));
  }

  get startdatum() {
    let date = element.all(by.model('dateItem'));
    return date.get(0);
  }

  get enddatum() {
    let date = element.all(by.model('dateItem'));
    return date.get(1);
  }
}

module.exports = new Saison();