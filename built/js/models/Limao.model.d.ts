export default class Limao {
    private _altura;
    private _largura;
    private _peso;
    private _nome;
    constructor(_altura: Number, _largura: Number, _peso: Number, _nome: string);
    get altura(): Number;
    get largura(): Number;
    get peso(): Number;
    get nome(): string;
    toString(): string;
}
