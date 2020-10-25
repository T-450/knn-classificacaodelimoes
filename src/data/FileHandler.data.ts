import fs from 'fs';
import Limao from '../models/Limao.model';
const readline = require('readline');
var toJSON = require('plain-text-data-to-json')

export default class FileHandler {

    constructor(
        private filename: string
    ) { }

    public async fromTextToJson(outfileName: string): Promise<any> {
        const fileStream = fs.createReadStream(`./assets/${this.filename}`);

        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });
        let arr: Limao[] = [];
        for await (const line of rl) {
            const splitted = line.split('\t');
            arr.push(new Limao(splitted[0], splitted[1], splitted[2], splitted[3]));
        }
        if (arr.length > 0) {
            const writerStream = fs.createWriteStream(`./assets/${outfileName}`, { flags: 'a+' });
            writerStream.write('[');
            writerStream.write('\n');
            arr.forEach((it, index) => {
                writerStream.write(JSON.stringify(it));
                if (index !== arr.length - 1) {
                    writerStream.write(',');
                };
                writerStream.write('\n');
            });
            writerStream.write('\n');
            writerStream.write(']');
            return arr;
        }
        return [];
    }
}