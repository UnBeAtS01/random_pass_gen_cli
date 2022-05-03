#!/usr/bin/env node

const head = require('./utils/header');
const body = require('./utils/body');
const footer = require('./utils/footer');
(async () => {
    //header
    head();

    //main
    body();


    //footer
    footer();

})();