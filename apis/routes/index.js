const express = require('express');
const router = express.Router();
const user = require('./users');
const pages = require('./pages');
const app_routes = require('./app');

router.use(user);
router.use(pages);
router.use(app_routes);

module.exports = router;