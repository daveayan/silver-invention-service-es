import 'babel-polyfill';
import { Router, Request, Response } from 'express';
import TeacherService from '../service/TeacherService';
import Logger from '../common/Logger';

export default class TeacherController {
	constructor() {
		this.logger = new Logger();
		this.logger.info('TeacherController:: Start Constructor');

		this.teacherService = new TeacherService();
		this.api = Router();
		this.api.get('/:uuid', this.get.bind(this));

		this.logger.info('TeacherController:: End Constructor');
		return this.api;
	}

	async get(req, res) {
        this.logger.info('TeacherController:: Start get');
		let uuidToGet = req.params.uuid;
        let testData = await this.teacherService.get(uuidToGet);
		res.send(testData);
		this.logger.info('TeacherController:: End get');
    }
}