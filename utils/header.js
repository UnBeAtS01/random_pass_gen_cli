const welcome = require('cli-welcome');
const pkgJson = require('../package.json');
module.exports = () => {
    welcome({
        title: `${pkgJson.name}`,
        tagLine: `by ${pkgJson.author.name}`,
        description: `${pkgJson.description}`,
        bgColor: `#FADC00`,
        color: `#000000`,
        bold: true,
        clear: true,
        version: `${pkgJson.version}`
    });
}
