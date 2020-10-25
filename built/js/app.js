"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var KNN = require('ml-knn');
var sample_service_1 = __importDefault(require("./data/sample.service"));
var sampleService = new sample_service_1.default('base.txt', 'base.json');
sampleService
    .getTrainingSample()
    .then(function (it) {
    var trainingDataSet = it.map(function (it) {
        return [it.altura, it.largura, it.peso];
    });
    var labels = it.map(function (it) {
        return it.nome;
    });
    var testDataSet = [
        [51.1, 44.2, 102.4],
        [26.1, 31.8, 35.0]
    ];
    var knn = new KNN(trainingDataSet, labels, { k: 2 });
    var result = knn.predict(testDataSet);
    console.log(result);
}).finally(function () {
    console.log(' Limão classificado com sucesso!!');
});
