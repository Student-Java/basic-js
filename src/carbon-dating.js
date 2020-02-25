const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const LN_2 = 0.693;

module.exports = function dateSample( sampleActivity ) {
  let activity = parseFloat(sampleActivity);

  return checkIfValid(activity, sampleActivity) && computeAge(activity);
};

let checkIfValid = (activity, initialValue) => !(isNaN(activity) || typeof initialValue !== 'string' || activity <= 0 || activity > MODERN_ACTIVITY);

let computeAge = activity => Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (LN_2 / HALF_LIFE_PERIOD));
