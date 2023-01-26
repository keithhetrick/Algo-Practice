// 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/description/

var defangIPaddr = function (address) {
  console.log("\nDEFANGING IP ADDRESS: ", address.replaceAll(".", "[.]"));
  return address.replaceAll(".", "[.]");
};
defangIPaddr("1.1.1.1"); // expects "1[.]1[.]1[.]1"
defangIPaddr("255.100.50.0"); // expects "255[.]100[.]50[.]0"
