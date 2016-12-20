module.exports = function () {
  var faker = require('faker');
  var _ = require('lodash');
  return {
    users: _.times(100,function(n){
      return {
        id:n,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber()
      }
    })
  }
}
