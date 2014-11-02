define([
  'exports',
  'module',
  'jquery',
  'underscore',
  'backbone',
  'modules/views/header',
  'modules/views/content'
], function(exports, module, $, _, Backbone, HeaderView, ContentView) {
  "use strict";

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      var headerView = new HeaderView();
      var contentView = new ContentView();
      headerView.render();
      contentView.render();
    }
  });

  module.exports = Router;
});
