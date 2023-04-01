const nameList = require("../country/state/city/index");

const getFirstName = require("../utilities/utils/index");

const getPeopleInCity = (item) => {
  return getFirstName(item);
};

module.exports = getPeopleInCity;
