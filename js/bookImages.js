var categoryListings = [
   {catName: "Fiction" , subcatList: ['Drama','Literature','Mystery', 'Poetry','Romance'] },
   {catName: "Nonfiction" ,   subcatList: ['Biography', 'Business', 'Education', 'Health', 'Philosophy', 'Self-Help'] },
   {catName: "Miscellaneous" ,   subcatList: ['Cooking','Crafts','Espanol', 'Medicine'] },
]

var BookImages = Backbone.View.extend({

     el: '.content-area',

   _buildBigHTMLStr: function(infoObj){
      var bigStr = '';
          bigStr = '<h1>' + infoObj.pageTitle.capitalizeFirstLetter() + '</h1>'
      infoObj.bookColl.models.forEach(function(bbModl){
         console.log(bbModl)

         var bookLinkObj = bbModl.get('imageLinks')

         if(typeof bookLinkObj === 'undefined'){
            var bookImage = 'images/file-not-found.png';
         } else {

            var bookImage = bookLinkObj.thumbnail
         }
             bigStr +=   '<div class = "col-xs-12 col-lg-3 text-center book-container">'
             bigStr +=      '<div class="thumbnail book-image">'
             bigStr +=       '<img src="' + bookImage + '">'
             bigStr +=       '<p>' + bbModl.get('title') + '</p>'
             bigStr +=       '</a>'
             bigStr +=      '</div>'
             bigStr +=  '</div>'

      })


      return bigStr
   },


   render: function(bookInfoObj){

      var compiledHTMLStr = this._buildBigHTMLStr(bookInfoObj)
      this.el.innerHTML = compiledHTMLStr
      console.log(this.el.innerHTML)
      }

})
