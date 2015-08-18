var mw = require('marko-widgets');
var ReplaceActions = require('./replace-actions');
var ExpiredItemsStore = require('./expired-items-store');
var ReplacableItemsStore = require('../replaceableitemslist/replaceable-items-store');
var listener;

var ReplaceScreen = mw.defineComponent({
  template: require('./template.marko'),
  init: function() {
    listener = null;
    listener = ExpiredItemsStore.addChangeListener(this._onChange, this);
    ReplacableItemsStore.addChangeListener(this._onReplaceableChange, this);
  },
  _onReplaceableChange: function(data) {

  },
  _onChange: function(data) {
    this.setState({
      'currentExpiredItem': ExpiredItemsStore.getCurrentExpiredItem()
    });
  },
  getInitialState: function(state) {
    ReplaceActions.getExpiredItems();
    var initState = {
      currentExpiredItem: ExpiredItemsStore.getCurrentExpiredItem()
    }
    return initState;
  },
  getTemplateData: function(state, input) {
    var currentExpiredItem = state.currentExpiredItem;
    var parentItem = null;
    if(currentExpiredItem.item) {
      parentItem = currentExpiredItem.item["itemId"];
    }
    return {
      currentExpiredItem: currentExpiredItem,
      parentItem: parentItem
    }
  }
});

module.exports = ReplaceScreen;
