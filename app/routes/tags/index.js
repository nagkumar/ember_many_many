import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll("tag");
  },

  setupController(controller, model)
  {
    model.forEach(function (x) {
      Ember.Logger.info(model);
      console.log(x.toJSON());
    });
  }
});
