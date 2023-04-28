import { LightningElement } from 'lwc';

export default class Input2 extends LightningElement {

    mostra = false;

    inputs = {
        primeironome: "",
        sobrenome: "",
        email: "",
        website: "",
        empresa: "",
        receitaanual: ""
    }



    primeironome1 = "";
    sobrenome1 = "";
    email1 = "";
    website1 = "";
    empresa1 = "";
    receitaanual1 = "";



    handleInputChange(event) {

        let nInput = event.target.name;
        let value = event.detail.value;

        this.inputs = {
            ...this.inputs,
            [nInput]: value
        }



        this.primeironome1 = this.inputs.primeironome;
        this.sobrenome1 = this.inputs.sobrenome;
        this.email1 = this.inputs.email;
        this.website1 = this.inputs.website;
        this.empresa1 = this.inputs.empresa;
        this.receitaanual1 = this.inputs.receitaanual;

    }
    handleOnClick() {

        this.mostra = !this.mostra;


    }
}