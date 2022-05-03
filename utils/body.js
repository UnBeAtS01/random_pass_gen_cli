const clipboards = require('clipboardy');

module.exports = async () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTWXYZ!@#$%^&*12345678011223344556677889910abcdefghijklmnopqrstuvwxyz";
    let charlen = characters.length;
    let str = "";
    for (let i = 0; i < 15; i++) {
        str += characters[Math.floor(Math.random() * charlen)];
    }
    console.log(str, "copied to clipboard");
    try { await clipboards.write(str); } catch (error) {
        console.log("error occured");
    }
}
