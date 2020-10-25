import { timeStamp } from "console";
import FileHandler from "./FileHandler.data";

export default class SampleService {
    private _fileHandler: FileHandler;
    constructor(private datasetPath: string, private dataSetOutPath: string) {
        this._fileHandler = new FileHandler(this.datasetPath);
    }

    public getTrainingSample(): any {
        const data = this._fileHandler.fromTextToJson(this.dataSetOutPath);
        if (data) { return data; };
    }
}