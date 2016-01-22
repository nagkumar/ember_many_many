import Ember from 'ember';
import CircularJSON from 'npm:circular-json';

export default Ember.Route.extend({
  model: function () {
    return this.store.find("post");
  },

  setupController(controller, model){
    this._super(controller, model);
    console.log(Ember.getMeta(model, 'values'));
    console.log(Ember.getMeta(model, 'cache'));
    console.log(CircularJSON.stringify(model));
    console.log(CircularJSON.stringify(model.get('isDirty')));
  }
});
