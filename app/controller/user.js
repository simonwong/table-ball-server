'use strict';
const Controller = require('../core/base_controller');

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

const createRule = {
  name: { type: 'string' },
  avatar: { type: 'string', required: false },
  score: { type: 'number', required: false },
};
class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const userList = await ctx.model.User.findAll();
    this.success(userList);
  }
  async create() {
    const { ctx } = this;
    const { body } = ctx.request;
    const user = await ctx.model.User.create({
      score: 0,
      ...body,
    });
    this.success({ id: user.id });
  }
  async update() {
    const { ctx } = this;
    const { body } = ctx.request;
    const id = toInt(ctx.params.id);
    ctx.validate(createRule, body);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      this.fail('用户不存在');
      return;
    }
    await user.update(body);
    this.success();
  }
  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      this.fail('用户不存在');
      return;
    }
    await user.destroy();
    this.success();
  }
}
module.exports = UserController;
