import Ember from 'ember';

export default Ember.Service.extend({
  cartTotal: Ember.computed('items.[]', function() {
    var total = 0;
    for (var i = 0; i < this.get("items.length"); i++) {
      total+= this.get("items")[i].get("price");
    }
    return total;
  }),
  items: [],
  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    console.log(index)
    this.get('items').removeAt(index,1);
  }
});
