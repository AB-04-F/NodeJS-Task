var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
var moment = require('moment');
var models = require('../models');
var Product = models.tbl_product;


Product.belongsTo(models.tbl_category, {
    foreignKey: 'categoryId',
});
//readall method call
router.get('/readAll', function(req, res) {


    Product.findAll({
        include: [{
            model: models.tbl_category
        }]

    }).then(function(results) {
        if (results) {
            res.json(results);
        } else {
            res.json([]);
        }
    }).catch(function(err) {
        console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ' + err.stack || err.message);
        res.json({
            success: false,
            message: 'Record(s) not found.'
        });
    });
});
//read method call
router.get('/read/:id', function(req, res) {
    Product.findOne({
        where: {
            productId: req.params.id
        }
    }).then(function(results) {
        if (results) {
            res.json(results);
        } else {
            res.json(null);
        }
    }).catch(function(err) {
        console.error('[' + moment().format('DD/MM/YYYY hh:mm:ss a') + '] ' + err.stack || err.message);
        res.json({
            success: false,
            message: 'Record(s) not found.'
        });
    });
});
//insert method call
router.post('/create', jsonParser, function(req, res) {
    Product.create(req.body).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product Inserted" });
        } else {
            res.json({ success: false, message: "product not Inserted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product not Inserted" });
    });
})
//update method call
router.put('/update/:productId', jsonParser, function(req, res) {
    console.log(req.params)
    Product.update(req.body, {
        where: {
            productId: req.params.productId
        }
    }).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product Updated" });
        } else {
            res.json({ success: false, message: "product not Updated" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product not Updated" });
    });
})
//detete method call
router.delete('/delete/:productId', jsonParser, function(req, res) {
    Product.destroy(({
        where: {
            productId: req.params.productId
        }

    })).then(function(results) {
        if (results) {
            res.json({ success: true, message: "product Deleted" });
        } else {
            res.json({ success: false, message: "product not Deleted" });
        }
    }).catch(function(err) {
        console.log(err)
        res.json({ success: false, message: "product not Deleted" });
    });
})
module.exports = router;