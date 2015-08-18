var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require("../../libs/AppDispatcher");
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var expiredItems = [];

var ExpiredItemsStore = assign({}, EventEmitter.prototype, {
    emitChange: function(data) {
      this.emit(CHANGE_EVENT, data);
    },
    addChangeListener: function(callback, ctx) {
      return this.on(CHANGE_EVENT, callback.bind(ctx));
    },
    removeChangeListener: function(callback, ctx) {
      this.removeListener(CHANGE_EVENT, callback.bind(ctx));
    },
    getCurrentExpiredItem: function(next) {
      var expiredItem = {
        item: null,
        isLast: false
      };
      if(expiredItems) {
        for(var i=0;i<expiredItems.length;i++) {
          var item = expiredItems[i];
          if(item.current) {
            if(next) {
              expiredItem.item = expiredItems[i + 1];
              expiredItems[i].current = false;
              expiredItems[i + 1].current = true;
            } else {
              expiredItem.item = item;
            }

            if(i === (expiredItems.length - 1)) {
              expiredItem.isLast = true;
            }
            break;
          }
        }
        if(!expiredItem.item) {
          expiredItem.item = expiredItems[0];
          if(expiredItems[0]) {
            expiredItems[0].current = true;
          }
        }
      }
      return expiredItem;
    }
});

AppDispatcher.register(function(action) {
    switch(action.action) {
        case 'getExpiredItems':
            var data = action.data;
            expiredItems = data;
            if(data) {
                ExpiredItemsStore.emitChange(data);
            }
        break;
        case 'fetchNextItem':
            var nextExpiredItem = ExpiredItemsStore.getCurrentExpiredItem(true);
            ExpiredItemsStore.emitChange(nextExpiredItem);
        break;
    }
});

module.exports = ExpiredItemsStore;
