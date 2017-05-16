//server/routes/categories

var express     = require('express');
var router      = express.Router();

//models
var Category      = require('../models/category');

// on routes that end in /categories
// -----------------------------------------------
router.route('/categories')

    //create a category (accessede at POST https://localhost:8080/api/categories)
    .post(function(req, res){

        var category      = new Category();          //create a new instance of the Category model
        category.name     = req.body.name;         //set the category name
        category.active   = req.body.active;
       
        //save the category and check for errors
        category.save(function(err){
            if(err)
                res.send(err);  //TODO proper error handling/message

            res.json({message: 'Category created!'});
        });


    })  //.post

    //get all the categories (accessed at GET http://localhost:8080/api/categories)
    .get(function(req, res){
        
        Category.find(function(err, categories){
            if(err)                             //TODO error handling
                res.send(err);

            res.json(categories);
        });
    }); //.get


// on routes that end in /categories/:category_id
// ------------------------------------------------
router.route('/categories/:category_id')

    //get the category with that id (accessd at GET http://localhost:8080/categories/:category_id)
    .get(function(req, res){
       Category.findById(req.params.category_id, function(err, category){
            if(err)
                res.send(err);                      //TODO error handling
            
            res.json(category);
       });
    })

    //update the category with this id (accessed at PUT http://localhost:8080/categories/:category_id)
    .put(function(req, res){
        Category.findById(req.params.category_id, function(err, category){
            if(err)
                res.send(err);                       //TODO error handling
                                   
            //update the category info
            category.name         = req.body.name;           
            category.active       = req.body.active;

            //save the category
            category.save(function(err){
                if(err)
                    res.send(err);                  //TODO error handling
                
                res.json({ message: 'Category updated!'});        //TODO proper response
            }); //.category.save

        }); //.Category.findById
    }) //.put

    //delete the category with this id (accessed at DELETE http://localhost:8080/api/categories/:category_id)
    .delete(function(req, res){
        Category.remove( { 
                _id: req.params.category_id
            }, function(err, category){
                    if(err)
                        res.send(err);                      //TODO error handling
                    
                    res.json({ message: 'Category successfully deleted!'});

        }); //.Category.remove

    }); //.delete



module.exports = router;