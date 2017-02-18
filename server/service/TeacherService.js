import 'babel-polyfill';
import { Router, Request, Response } from 'express';
import { UUID } from 'uuid';
import Logger from '../common/Logger';

export default class TeacherService {

	constructor() {
        this.logger = new Logger();
		this.logger.info('TeacherService:: Start Constructor');
        this.logger.info('TeacherService:: End Constructor');
        return this;
	}

	async get(uuid) {
        this.logger.info('TeacherService:: Start get');
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

        this.logger.info('TeacherService:: End get');        
        return testData;
    }
}