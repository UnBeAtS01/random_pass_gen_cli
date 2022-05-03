#!/usr/bin/env node

const head = require('./utils/header');
const body = require('./utils/body');
const footer = require('./utils/footer');
(async () => {
    let flags = [];
    flags = [...process.argv.slice(2)];
    const alphaonly = flags.indexOf('--alpha') !== -1 ? 1 : 0;
    //header
    head();

    //main
    body(alphaonly);


    //footer
    footer();

})();