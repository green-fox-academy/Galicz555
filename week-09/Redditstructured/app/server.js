'use strict'

const routes = require('./routes'); //js file for every stuff needed to put here
const config = require('./config');

routes.listen(config.app.port, () => {
    console.log(`Listening on port ${config.app.port}`);
});
