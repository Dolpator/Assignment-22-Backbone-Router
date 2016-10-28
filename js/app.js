
var appContainer = document.querySelector('#app-container')
var contentArea = document.querySelector('.content-area')


var AppRouter = Backbone.Router.extend({

   routes: {
      "books/:categories/:subcategory" : "showSubCat",
      "books/:categories": "showGenCat",
      "" : "showHomePage",
   },

   showHomePage: function(){
      var homeViewInstance = new ShowHomeView()
      homeViewInstance.render()

   },

   showGenCat: function(category){
      var bookCollInstance = new BooksCollection(category)
      bookCollInstance.fetch().then(function(){
         var bookImageView = new BookImages()
         var infoObj = {
            bookColl: bookCollInstance,
            pageTitle: category
         }
         bookImageView.render(infoObj)
         //console.log(bookCollInstance )
      })
   },

   showSubCat: function(category, subCat){
      var subBookCollInstance = new BooksCollection(subCat)
      subBookCollInstance.fetch().then(function(){
         var bookImageView = new BookImages()
         bookImageView.render({bookColl: subBookCollInstance, pageTitle: subCat})
         //console.log(subBookCollInstance)
      })
   },

   initialize: function(){
      console.log('backbone ROUTING')
      Backbone.history.start()
   }

})
var myApp = new AppRouter();
