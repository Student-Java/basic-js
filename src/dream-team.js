module.exports = function createDreamTeam( members ) {
  return Array.isArray(members) &&
      members
          .filter(el => typeof el === 'string')
          .map(el => el.match(/[a-z]/i)[0])
          .map(letter => letter.toUpperCase())
          .sort()
          .join('');
};
