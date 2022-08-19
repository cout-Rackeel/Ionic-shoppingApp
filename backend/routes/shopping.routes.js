const express = require('express');
const router = express.Router()
const IndexController = require('../controllers/index.controller')
const {
    createItem,
    deleteItemsById,
    getAllItems,
} = require('../controllers/items.controller')

router.route('/').get(IndexController.index)

router.route('/shopping-list').post(createItem).get(getAllItems)

router.route('/shopping-list/:id').delete(deleteItemsById)

module.exports = router
