/**
 * @param {number} hours 
 * @returns {Date}
 */
const calculateExpiry = (hours) => {
  const now = new Date();
  now.setHours(now.getHours() + hours);
  return now;
};

module.exports = { calculateExpiry };
