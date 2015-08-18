var mw = require('marko-widgets');
var ReplaceActions = require('../replace-screen/replace-actions');

require('./style.less');

var ExpiredItems = mw.defineComponent({
  template: require('./template.marko'),
  init: function() {

  },
  _onChange: function(data) {

  },
  getInitialState: function(state) {
    var initState = {
      currentExpiredItem: null
    }
    return initState;
  },
  getTemplateData: function(state, input) {
    return {
      currentExpiredItem: input.currentExpiredItem,
      isLast: input.isLast
    }
  },
  openReplacableItems: function(e) {
    var expiredItem = $(e.target).parents(".expired-item-container").data('itemid');
    ReplaceActions.fetchReplacebleItems(expiredItem);
  },
  fetchNextItem: function(e) {
    ReplaceActions.fetchNextItem();
  }
});

module.exports = ExpiredItems;
