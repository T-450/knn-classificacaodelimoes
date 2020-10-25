"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var FileHandler_data_1 = __importDefault(require("./FileHandler.data"));
var SampleService = /** @class */ (function () {
    function SampleService(datasetPath, dataSetOutPath) {
        this.datasetPath = datasetPath;
        this.dataSetOutPath = dataSetOutPath;
        this._fileHandler = new FileHandler_data_1.default(this.datasetPath);
    }
    SampleService.prototype.getTrainingSample = function () {
        var data = this._fileHandler.fromTextToJson(this.dataSetOutPath);
        if (data) {
            return data;
        }
        ;
    };
    return SampleService;
}());
exports.default = SampleService;
