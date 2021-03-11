const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {

    const puzzle = {};
    puzzle.turns = (2 ** disksNumber) - 1;
    puzzle.seconds = Math.floor((2 ** disksNumber - 1) * 3600 / turnsSpeed);
    return puzzle;

};
