const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog');