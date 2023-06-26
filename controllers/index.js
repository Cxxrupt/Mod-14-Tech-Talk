// index.js is the central hub for all routing files
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const dashboardRoutes = require('./dashboardRoutes');

// set up router middleware
router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

// export the router
module.exports = router;
