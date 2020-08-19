'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 user 表
  up: async (queryInterface, Sequelize) => {
    const { DATE, STRING, BIGINT, INTEGER } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
      name: { type: STRING(30), comment: '花名' },
      avatar: { type: STRING(), comment: '头像地址' },
      score: { type: INTEGER, comment: '当前赛季分数' },
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 user 表
  down: async queryInterface => {
    await queryInterface.dropTable('users');
  },
};
