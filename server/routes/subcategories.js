//server/routes/subcategories

var express     = require('express');
var router      = express.Router();

//models
var SubCategory      = require('../models/subcategory');

// on routes that end in /subcategories
// -----------------------------------------------
router.route('/subcategories')

    //create a subcategory (accessede at POST https://localhost:8080/api/subcategories)
    .post(function(req, res){

        var subcategory      = new SubCategory();          //create a new instance of the SubCategory model
        subcategory.name     = req.body.name;         //set the subcategory name
        subcategory.active   = req.body.active;
        subcategory.parentCategory  = req.body.parentCategory;
       
        //save the subcategory and check for errors
        subcategory.save(function(err){
            if(err)
                res.send(err);  //TODO proper error handling/message

            res.json({message: 'SubCategory created!'});
        });


    })  //.post

    //get all the subcategories (accessed at GET http://localhost:8080/api/subcategories)
    .get(function(req, res){
        
        SubCategory.find(function(err, subcategories){
            if(err)                             //TODO error handling
                res.send(err);

            res.json(subcategories);
        });
    }); //.get


// on routes that end in /subcategories/:subcatgory_id
// ------------------------------------------------
router.route('/subcategories/:subcatgory_id')

    //get the subcategory with that id (accessd at GET http://localhost:8080/subcategories/:subcatgory_id)
    .get(function(req, res){
       SubCategory.findById(req.params.subcatgory_id, function(err, subcategory){
            if(err)
                res.send(err);                      //TODO error handling
            
            res.json(subcategory);
       });
    })

    //update the subcategory with this id (accessed at PUT http://localhost:8080/subcategories/:subcatgory_id)
    .put(function(req, res){
        SubCategory.findById(req.params.subcatgory_id, function(err, subcategory){
            if(err)
                res.send(err);                       //TODO error handling
                                   
            //update the subcategory info
            subcategory.name         = req.body.name;           
            subcategory.active       = req.body.active;
            subcategory.parentCategory = req.body.parentCategory;

            //save the subcategory
            subcategory.save(function(err){
                if(err)
                    res.send(err);                  //TODO error handling
                
                res.json({ message: 'SubCategory updated!'});        //TODO proper response
            }); //.subcategory.save

        }); //.SubCategory.findById
    }) //.put

    //delete the subcategory with this id (accessed at DELETE http://localhost:8080/api/subcategories/:subcatgory_id)
    .delete(function(req, res){
        SubCategory.remove( { 
                _id: req.params.subcatgory_id
            }, function(err, subcategory){
                    if(err)
                        res.send(err);                      //TODO error handling
                    
                    res.json({ message: 'SubCategory successfully deleted!'});

        }); //.SubCategory.remove

    }); //.delete



module.exports = router;