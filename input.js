import { LightningElement } from 'lwc';

export default class Input extends LightningElement {


    nome;
    altura;
    peso;
    imc;


    handleOnChangeNome(event) {

        this.nome = event.detail.value;
    }
    handleOnChangeAltura(event) {
        this.altura = event.detail.value;

    }
    handleOnChangePeso(event) {
        this.peso = event.detail.value;
    }

    handleOnClick() {

        this.imc = this.peso / (this.altura * this.altura);

    }

}