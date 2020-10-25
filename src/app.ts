const KNN = require('ml-knn');
import Limao from './models/Limao.model';
import SampleService from './data/sample.service';

const sampleService = new SampleService('base.txt', 'base.json');

sampleService
    .getTrainingSample()
    .then((it: any) => {

        const trainingDataSet = it.map((it: Limao) => {
            return [it.altura, it.largura, it.peso]
        });
        const labels = it.map((it: Limao) => {
            return it.nome;
        });
        const testDataSet = [
            [51.1, 44.2, 102.4],
            [26.1, 31.8, 35.0]
        ];
        const knn = new KNN(trainingDataSet, labels, { k: 2 });
        const result = knn.predict(testDataSet);
        console.log(result);

    }).finally(() => {
        console.log(' Limão classificado com sucesso!!');
    })
