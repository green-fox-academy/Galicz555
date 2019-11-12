'use strict';

const routes = require('./app');
const PORT = 8080;

routes.set('port', (process.env.PORT || PORT));

routes.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});