var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var ArticleSchema = new Schema({
 
  title: {
    type: 'String',
    unique: true,
    //dropDups: true
  },

  link : {
      type : 'String',
      unique : true,
     //dropDups: true
  },

  snippet : {
    type: 'String',
    unique : true
  },

saveDate: {
    type: 'Date',
    default: Date.now
  },

  });
// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

Article.on('index', function(error) {
    if (error) {
        console.log(error);
    }
  });


module.exports = {ArticleSchema : ArticleSchema , Article : Article}
