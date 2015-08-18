'use strict';

var template = require('marko').load(require.resolve('./template.marko'));
require('./style.less');
require('marko-widgets');
module.exports = {
    render: function (input, context) {
        template.render({}, context);
    }
};
