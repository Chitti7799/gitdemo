import { LightningElement } from 'lwc';
export default class AccountSearch extends LightningElement {
    NumberOfEmployees = null;
    handleChange(event) {
        this.NumberOfEmployees = event.detail.value;
    }
    reset() {
        this.NumberOfEmployees = null;
    }
}