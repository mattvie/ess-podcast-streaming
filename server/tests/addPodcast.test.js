const assert = require('assert');
const request = require('supertest');
const express = require('express');
const fs = require('fs')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const podcastsFilePath = '../samples/podcasts.json'

describe('POST /podcasts/', function () {

    before(() => {

        sampleData = {
            "subject": "Economy",
            "name": "John Wick goes shopping",
            "link": "https://www.youtube.com/watch?v=km7DDDE-i0c",
            "author": "mattvie"
        }

        //fs.writeFileSync(podcastsFilePath, JSON.stringify(sampleData));
    })

    it('Deve adicionar o novo podcast na conta do autor mattvie', function (done) {
        request(app)
            .post('/podcasts')
            .type('form')
            .send(sampleData)
            .set("Content-Type", "application/json")
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                done();
            });

    });
});