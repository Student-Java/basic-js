const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options, additionalSeparator) {
    let additional;
    let separator = typeof options.separator !== 'undefined' ? options.separator : '+';
    additionalSeparator = typeof options.additionSeparator !== 'undefined' ? options.additionSeparator : '|';
    if (typeof options.addition !== 'undefined') {
        additional = repeater(options.addition, {repeatTimes: options.additionRepeatTimes, separator: additionalSeparator});
    }

    return Array(options.repeatTimes).fill(str + (additional ? additional : '')).join(separator);
};
