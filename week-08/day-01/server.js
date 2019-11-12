'use strict'

const routes = require('./routes'); //js file for every stuff needed to put here
const PORT = 3000;

routes.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
