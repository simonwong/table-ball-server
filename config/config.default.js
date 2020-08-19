/* eslint-disable no-unused-vars */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = 'key';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    xframe: {
      enable: false,
    },
  };
  // add your user config here
  const userConfig = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'database',
    username: 'root',
    password: 'root',
  };

  config.sequelize = userConfig;

  return {
    ...config,
    ...userConfig,
  };
};
