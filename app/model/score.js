'use strict';

module.exports = app => {
  const { INTEGER, BIGINT, DATE } = app.Sequelize;

  const Score = app.model.define('score', {
    id: { type: BIGINT(11), primaryKey: true, autoIncrement: true, unique: true },
    value: { type: INTEGER, comment: '分数' },
    season: { type: INTEGER, comment: '赛季' },
    userId: {
      type: BIGINT(11),
      field: 'user_id',
      unique: true,
      references: {
        model: 'user',
        key: 'id',
      },
      comment: '用户Id',
    },
    created_at: DATE,
    updated_at: DATE,
  });

  return Score;
};
