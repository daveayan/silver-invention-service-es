import 'babel-polyfill';
import { Router, Request, Response } from 'express';
import TeacherService from '../service/TeacherService';

export default class TeacherController {
	constructor() {
		console.log("in constructor");
		console.log(this);
		this.teacherService = new TeacherService();

		this.api = Router();
		this.api.get('/:uuid', this.get.bind(this));

		return this.api;
	}

	async get(req, res) {
		let uuidToGet = req.params.uuid;
        let testData = await this.teacherService.get(uuidToGet);
		res.send(testData);
    }
}