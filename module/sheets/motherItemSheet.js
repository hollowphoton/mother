export default class motherItemSheet extends ItemSheet {

    get template() {
        return 'systems/mother/templates/sheets/${this.item.data.type}-sheet.html';
    }
    
}