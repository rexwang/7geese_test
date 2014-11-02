// Filename: collections/repositories
define([
  'underscore',
  'backbone',
  // Pull in the Model module from above
  'modules/models/repository'
], function(_, Backbone, RepositoryModel) {

  $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.url = 'https://api.github.com/orgs/7geese' + options.url;
  });

  var capitalize = function(s) {
    return s.toLowerCase().replace(/(?!as|on)(\b.)/g, function(a) { return a.toUpperCase(); });
  };

  var RepositoryCollection = Backbone.Collection.extend({
    sort_key: 'id', // default sort key
    comparator: function(item) {
      return -item.get(this.sort_key);
    },
    sortByField: function(fieldName) {
      this.sort_key = fieldName;
      this.sort();
    },
    parse: function(response) {
      _.each(response, function(repo) {
        repo.name = repo.name.replace(/-/g, ' ');
        repo.name = capitalize(repo.name);
      });
      return response;
    },
    url: '/repos'
  });
  // You don't usually return a collection instantiated
  return RepositoryCollection;
});