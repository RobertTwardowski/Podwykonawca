const Company = require('../../Db/Models/Company')

module.exports = {
  saveComapny (req, res) {
    const newCompany = new Company({
      companyName: 'efewfweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeer'
    })

    newCompany.save().then(() => {
      console.log('dewdfewwe')
    })
  }
}
