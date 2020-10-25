export default class Limao {

    constructor(
        private _altura: Number,
        private _largura: Number,
        private _peso: Number,
        private _nome: string
    ) { }

    get altura() {
        return this._altura;
    }

    get largura() {
        return this._largura;
    }

    get peso() {
        return this._peso;
    }

    get nome() {
        return this._nome;
    }

    public toString(): string {
        return `${this._altura} ${this._largura} ${this._peso} ${this._nome}`
    }
}