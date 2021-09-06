import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const kN = Math.LN2 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

export default function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string')
    return false;
  sampleActivity = Number(sampleActivity);
  return !isNaN(sampleActivity) && 0 < sampleActivity && sampleActivity < MODERN_ACTIVITY &&
    Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / kN);
}