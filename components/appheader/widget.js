var $ = require('jquery');
var ReplaceScreen = require('../replace-screen');

function Widget(state) {
    this.init();
    var btn = $(this.el).find("#open");
    var self = this;
    $(btn).on('click', self.handleClick)
}

Widget.prototype = {
    init: function() {

    },
    handleClick: function(e) {
      ReplaceScreen.render({

      })
      .appendTo(document.body)
      .getWidget();
    }
}

module.exports = Widget;
