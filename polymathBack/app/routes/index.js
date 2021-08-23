const express = require('express') // instances of express
const router = express.Router() // use system router of express
const fs = require('fs') // instances file-system of node

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithOutExt)
    if (!skip) {
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`)) //TODO: localhost/users
        console.log('ROUTE LOAD ---->', fileWithOutExt)
    }
})

router.get('*', (req, res) => {
    res.status(404).json({ error: 'pagina no encontrada'})
})
module.exports = router