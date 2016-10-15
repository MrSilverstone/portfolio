var parse = require('co-body');
var render = require('../lib/views');
var project = require('../models/project');

exports.index = function *() {
    var results = yield project.find({});
    console.log(results);
    this.body = yield render('index', {projects : results});
};

exports.show = function *(id) {
    var result = yield project.findOne(id);
    if (!result) {
	this.throw(404, 'Project not found!');
    } else {
	this.body = result;
    }
};
