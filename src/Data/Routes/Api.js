const express =require('express')
const router= express.Router()

const testActions = require('../Actions/Api/Company')

router.get('/Podwykonawca', testActions.saveCompany)


  module.exports = router