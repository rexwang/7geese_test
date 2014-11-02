// Filename: models/repository
define([
  'underscore',
  'backbone'
], function(_, Backbone){

  var RepositoryModel = Backbone.Model.extend({
    defaults: {
      name: "Harry Potter"
    }
  });
  // Return the model for the module
  return RepositoryModel;
});