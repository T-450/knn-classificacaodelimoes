export default class SampleService {
    private datasetPath;
    private dataSetOutPath;
    private _fileHandler;
    constructor(datasetPath: string, dataSetOutPath: string);
    getTrainingSample(): any;
}
