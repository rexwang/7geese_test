// Filename: views/header
define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'text!templates/header.html'
], function($, _, Backbone, headerTemplate) {

  var HeaderView = Backbone.View.extend({
    el: $('#header'),
    render: function(){
      // Using Underscore we can compile our template with data
      var data = {
        test: 'testing'
      };
      var compiledTemplate = _.template( headerTemplate, data );
      // Append our compiled template to this Views "el"
      this.$el.append( compiledTemplate );
    }
  });
  
  // Our module now returns our view
  return HeaderView;
});