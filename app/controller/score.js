'use strict';
const Controller = require('../core/base_controller');

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

// const createRule = {
//   userId: { type: 'string' },
//   score: { type: 'number' },
// };
class ScoreController extends Controller {
  async updateScore() {
    const { ctx } = this;
    const { body } = ctx.request;

    if (Array.isArray(body)) {
      // TODO: asd
    } else {
      const user = await ctx.model.User.findByPk(toInt(body.userId));
      if (!user) {
        this.notFound();
        return;
      }
      await user.update({
        score: body.score,
      });
      this.success();
    }

  }
}
module.exports = ScoreController;
