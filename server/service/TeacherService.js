import 'babel-polyfill';
import { Router, Request, Response } from 'express';
import { UUID } from 'uuid';

export default class TeacherService {

	constructor() {
        return this;
	}

	async get(uuid) {
        console.log("service::get");
        let testData;

        if(uuid === '12345') {
            testData = {
                uuid: uuid,
                message: "Foo"
            }
        } else {
            testData = {
                uuid: uuid,
                message: "Bar"
            }
        }

        console.log("returning " + testData);
        return testData;
    }
}