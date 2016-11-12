'use strict';

import Lysis from '.';

export const validate = (req, res, next) => {
	req.checkQuery = function (paths, mapErrorFn) {
		return new Lysis(req.query, paths, mapErrorFn, req);
	};
	req.checkParam = function (paths, mapErrorFn) {
		return new Lysis(req.params, paths, mapErrorFn, req);
	};
	req.checkHeader = function (paths, mapErrorFn) {
		return new Lysis(req.headers, paths, mapErrorFn, req);
	};
	req.checkBody = function (paths, mapErrorFn) {
		return new Lysis(req.body, paths, mapErrorFn, req);
	};
	next();
};
