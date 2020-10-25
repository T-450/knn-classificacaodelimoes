export default class FileHandler {
    private filename;
    constructor(filename: string);
    fromTextToJson(outfileName: string): Promise<any>;
}
