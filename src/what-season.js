const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) 
    return 'Unable to determine the time of year!'
  if (Object.prototype.toString.call(date) !== '[object Date]') 
    throw Error('Invalid date!')
  if (Object.keys(date).length)
    throw Error('Invalid date!')

  return ['winter', 'spring', 'summer', 'autumn'][~~((date.getMonth() + 1) / 3 % 4)];
}

module.exports = {
  getSeason
};
