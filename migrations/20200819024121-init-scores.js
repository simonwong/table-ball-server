'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 score 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, BIGINT } = Sequelize;
    await queryInterface.createTable('scores', {
      id: { type: BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
      value: { type: INTEGER, comment: '分数' },
      season: { type: INTEGER, comment: '赛季' },
      userId: {
        type: BIGINT(11),
        field: 'user_id',
        unique: true,
        references: {
          model: 'users',
          key: 'id',
        },
        comment: '用户Id',
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },
  // 在执行数据库降级时调用的函数，删除 score 表
  down: async queryInterface => {
    await queryInterface.dropTable('scores');
  },
};
