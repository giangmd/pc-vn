const provinces = require("./data/provinces")
const districts = require("./data/districts")
const wards     = require("./data/wards")
module.exports = {
  getProvinces: () => provinces,
  getDistricts: () => districts,
  getWards: () => wards,
  getDistrictsByProvinceCode: (provinceCode) => districts.filter(x => x.province_code == provinceCode),
  getWardsByDistrictCode: (districtCode) => wards.filter(x => x.district_code == districtCode),
  getWardsByProvinceCode: (provinceCode) => wards.filter(x => x.province_code == provinceCode)
};
