'use strict';

const { Controller } = require('egg');
class BaseController extends Controller {

  success(data = null) {
    this.ctx.body = {
      success: true,
      data,
    };
  }

  fail(msg) {
    this.ctx.body = {
      success: false,
      data: null,
      msg: msg || '好像有点问题',
    };
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;
