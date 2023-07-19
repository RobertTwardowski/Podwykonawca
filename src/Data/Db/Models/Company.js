const mongoose = require('mongoose')

const Company = mongoose.model('Company',{
    companyName: String,
    city: String, 
    province: String,
    profession: String,
    number: Number,
    aboutShort: String,
    aboutLong: String,
    logo: [],
    rating: Number, 
})


module.exports = Company