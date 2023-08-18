const exp = require('express')
const router = exp.Router()
const savedata = require('../controller/index')
const multer = require('../middleware/middleware')
const routes = (index)=>
{
   // router.post('/uploadfile',multer.single("upload"),savedata.importuser);
   // router.post('/uploadfile',multer.single("upload"),savedate.importuser);
    router.post('/uploadfile',multer.single("upload"),savedata.exceluser);
    index.use('/api',router)
}
module.exports = routes 