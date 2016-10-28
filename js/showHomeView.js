var categoryListings = [
   {catName: "Fiction" , subcatList: ['Drama','Literature','Mystery', 'Poetry','Romance'] },
   {catName: "Nonfiction" ,   subcatList: ['Biography', 'Business', 'Education', 'Health', 'Philosophy', 'Self-Help'] },
   {catName: "Miscellaneous" ,   subcatList: ['Cooking','Crafts','Espanol', 'Medicine'] },
]

var ShowHomeView = Backbone.View.extend({

     el: '.content-area',

    events: {
       'click .get-home-search' : 'putBooksInAddress'
    },

     putBooksInAddress : function(evt){
     var inputEl = document.querySelector('#home-search')
           window.location.hash = 'books/' + inputEl.value
           inputEL.value ='';
    },

    _buildHomeHTML: function(){

      var homeStr = '';
          homeStr += '<div class="search">'
          homeStr +=    '<input type="text" class="form-control" id="home-search" placeholder="Search...">'
          homeStr +=    '<input type="submit" class="get-home-search" value="Submit">'
          homeStr += '</div>'
   categoryListings.forEach(function(genCat){
          homeStr +=   '<div class = "col-xs-12 col-sm-4 ">'
          homeStr +=       '<h3>'+'<a href ="#books/' + genCat.catName.toLowerCase() + '">'
          homeStr +=        genCat.catName
          homeStr +=        '</a>'+'</h3>'
          homeStr +=      '<ul class = "subCatRow">'
   genCat.subcatList.forEach(function(subCat){
          homeStr +=       '<li class="sub-class">' + '<a href="#books/'+ genCat.catName.toLowerCase() + "/" + subCat.toLowerCase() + '">'
          homeStr +=        '<h6>'+ subCat + '</h6>'
          homeStr +=        '</a>'+ '</li>'
       })

    homeStr +=      '</ul>'
    homeStr +=   '</div>'
    })


    return homeStr

 },

    render: function(coll){
     this.el.innerHTML = this._buildHomeHTML(coll)

     return this;

  },
})
