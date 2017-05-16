//server/models/subcategory.js

var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var SubCategorySchema  = new Schema({
    name : {
        type: String            //TODO put validation for max length, mandatory, duplicates
    },
    parentCategory:{
        _id:{
            type: Schema.Types.ObjectId,
            turnOn: false
        },
        name: {
            type: String        
        },
    },
    active:{
        type: Boolean,          //active status -true/false
        default: true
    }
});

module.exports = mongoose.model('SubCategory', SubCategorySchema);
