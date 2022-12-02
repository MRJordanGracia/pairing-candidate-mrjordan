import CONSTANTS from './constants.mjs';

/**
 * Returns the first letter in a sentence, decapitalized
 * @param {string} text the text
 * @returns {string} - same text with first letter in lower case
 */
export const valueToCase = (text) => {
  if (!(text && typeof text === 'string')) return text;
  const reg = /[$-/,.:%=(-?{-~!"^_`[\]]/;
  const firstLetter = text.charAt(0);
  return firstLetter.match(reg)
    ? firstLetter + text.charAt(1).toLowerCase() + text.substring(2)
    : firstLetter.toLowerCase() + text.substring(1);
};

/**
 * Returns the results from api with the first letter of names in lower case
 * @param {array} data with the results
 * @returns {array} - same array with the value to decapitalize with the first letter in lower case
 */
export const modifyResults = (data, valueToDecapilize) => {
  const { ENPOINT_URL, LOCALHOST_URL } = CONSTANTS;

  return data.reduce((prev, current) => {
    return [
      ...prev,
      {
        ...current,
        [`${valueToDecapilize}`]: valueToCase(current[`${valueToDecapilize}`]),
        url: current.url.replace(/\/$/, '').replace(ENPOINT_URL, LOCALHOST_URL),
      },
    ];
  }, []);
};

/**
 * Returns a new option oject
 * @param {string} opitonName the name of the option to add
 * @param {string|number} value value of the optionName
 * @returns {object} - new option object with the option and the value
 */
export const createOptions = (optionName, value) => {
  return {
    [`${optionName}`]: value,
  };
};

/**
 * Returns true if the value (string, array or object) is empty, undefined or null
 * @param {undefined|null|object|array|string } value
 * @returns {boolean}
 */
export const isEmpty = (value) => {
  if (value === undefined || value === null) return true;
  if (value instanceof Date) return false;
  if (
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0) ||
    (Array.isArray(value) && value.length === 0)
  )
    return true;
  return false;
};
