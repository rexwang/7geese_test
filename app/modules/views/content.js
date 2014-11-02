// Filename: views/content
define([
  'jquery',
  'underscore',
  'backbone',
  'modules/collections/repositories',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/content.html'
], function($, _, Backbone, RepositoryCollection, contentTemplate) {

  var ContentView = Backbone.View.extend({
    el: $('#content'),
    render: function(){
      var that = this;
      // Using Underscore we can compile our template with data
      var reposCollection = new RepositoryCollection();
      reposCollection.fetch({
        success: function(repos) {
          repos.sortByField('forks_count');
          var compiledTemplate = _.template( contentTemplate, { repos: repos.models } );
          // Append our compiled template to this Views "el"
          that.$el.append( compiledTemplate );
        }
      });
    }
  });

  // Our module now returns our view
  return ContentView;
});