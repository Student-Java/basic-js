const seasons = ['winter', 'spring', 'summer', 'autumn']

module.exports = function getSeason( date ) {
    return seasons[computeSeasonIdx(date)];
};

let computeSeasonIdx = date => Math.floor(((date.getMonth() + 1) / 12 * 4)) % 4;
