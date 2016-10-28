var BookModel = Backbone.Model.extend({
   url: "",
   parse: function(parseResp){

      // console.log(parseResp)
      return parseResp.volumeInfo
   }

})

var BooksCollection = Backbone.Collection.extend({
   model: BookModel,
   url: "",
   parse: function(parseResp){
      // console.log(parseResp)
      return parseResp.items
   },

   initialize: function(queryStr){
      this.url = 'https://www.googleapis.com/books/v1/volumes?q=subject:'+ queryStr
   }

})
