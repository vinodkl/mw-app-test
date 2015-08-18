var mw = require('marko-widgets');
var ReplaceActions = require('../replace-screen/replace-actions');


var ReplaceableItemsList = mw.defineComponent({
  template: require('./template.marko'),
  init: function() {
    ReplaceActions.fetchReplacableItems(1);
  },
  getInitialState: function(state) {

    var initState = {
      parentItem: state.parentItem
    }
    return initState;
  },
  getTemplateData: function(state, input) {
    return {
      parentItem: state.parentItem
    }
  }
});

module.exports = ReplaceableItemsList;
