const Table = require('cli-table');
module.exports = () => {
    const table = new Table();

    // table is an Array, so you can `push`, `unshift`, `splice` and friends
    table.push(
        ['star', 'https://github.com/UnBeAtS01']
        , ['follow', 'https://github.com/UnBeAtS01']
    );

    console.log(table.toString());
}