export default class motherItemSheet extends ItemSheet {

    get template() {
        return `systems/mother/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.mother;

        return data;
    }
}