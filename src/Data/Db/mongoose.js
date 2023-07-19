const mongoose = require('mongoose')
const {database} = require('../Config')

mongoose.connect(database,{useNewUrlParser: true, useUnifiedTopology: true})

