var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require("../../libs/AppDispatcher");
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var replaceableItems = [];

var ReplacableItemsStore = assign({}, EventEmitter.prototype, {
    emitChange: function(data) {
      this.emit(CHANGE_EVENT, data);
    },
    addChangeListener: function(callback, ctx) {
      return this.on(CHANGE_EVENT, callback.bind(ctx));
    },
    removeChangeListener: function(callback, ctx) {
      this.removeListener(CHANGE_EVENT, callback.bind(ctx));
    }
});

AppDispatcher.register(function(action) {
    switch(action.action) {
        case 'fetchReplacableItems':
            var data = action.data;
            replaceableItems = data;
            if(data) {
                ReplacableItemsStore.emitChange(data);
            }
        break;
    }
});

module.exports = ReplacableItemsStore;
