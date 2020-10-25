"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Limao = /** @class */ (function () {
    function Limao(_altura, _largura, _peso, _nome) {
        this._altura = _altura;
        this._largura = _largura;
        this._peso = _peso;
        this._nome = _nome;
    }
    Object.defineProperty(Limao.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Limao.prototype, "largura", {
        get: function () {
            return this._largura;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Limao.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Limao.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Limao.prototype.toString = function () {
        return this._altura + " " + this._largura + " " + this._peso + " " + this._nome;
    };
    return Limao;
}());
exports.default = Limao;
