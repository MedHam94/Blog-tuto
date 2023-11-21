const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mainRoutes = require('./server/routes/main')
const app = express()
const connectDB = require('./server/config/db');
const PORT = process.env.PORT || 5000

connectDB()
app.use(express.static('public'))

// Templating engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout', 'layouts/main');



app.use('/', mainRoutes)


app.listen(PORT, ()=>{
    console.log(`Server connected Successfully `);
})