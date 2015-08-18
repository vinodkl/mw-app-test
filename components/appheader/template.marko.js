function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __markoWidgets = require("marko-widgets"),
      _widgetAttrs = __markoWidgets.attrs,
      __widget = "/components/appheader/widget",
      __renderer = __helpers.r,
      ______node_modules_marko_widgets_taglib_widget_tag_js = __renderer(require("marko-widgets/taglib/widget-tag")),
      __tag = __helpers.t,
      attr = __helpers.a,
      attrs = __helpers.as;

  function __registerWidget() {
    if (typeof window != "undefined") {
      __markoWidgets.registerWidget(__widget, require("./widget"));
    }
  }

  return function render(data, out) {
    if (__registerWidget) {
      __registerWidget();
      __registerWidget = null;
    }
    
    __tag(out,
      ______node_modules_marko_widgets_taglib_widget_tag_js,
      {
        "module": __widget,
        "_cfg": data.widgetConfig,
        "_state": data.widgetState,
        "_props": data.widgetProps
      },
      function(out, widget) {
        out.w('<div class="app-header"' +
          attr("id", widget.elId()) +
          attrs(_widgetAttrs(widget)) +
          '><h1>From component</h1><div><button type="button" name="button" id="open">Open</button></div></div>');
      });
  };
}
(module.exports = require("marko").c(__filename)).c(create);