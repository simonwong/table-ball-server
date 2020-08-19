'use strict';

module.exports = app => {
  const { STRING, BIGINT, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    name: { type: STRING(30), comment: '花名' },
    avatar: { type: STRING(), comment: '头像地址' },
    score: { type: INTEGER, comment: '当前赛季分数' },
  });

  return User;
};
