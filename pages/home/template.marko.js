function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ______node_modules_lasso_taglib_page_tag_js = __renderer(require("lasso/taglib/page-tag")),
      __tag = __helpers.t,
      ______node_modules_lasso_taglib_head_tag_js = __renderer(require("lasso/taglib/head-tag")),
      ______components_appheader_renderer_js = __renderer(require("../../components/appheader/renderer")),
      ______node_modules_lasso_taglib_body_tag_js = __renderer(require("lasso/taglib/body-tag")),
      ______node_modules_marko_widgets_taglib_init_widgets_tag_js = __renderer(require("marko-widgets/taglib/init-widgets-tag"));

  return function render(data, out) {
    __tag(out,
      ______node_modules_lasso_taglib_page_tag_js,
      {
        "packagePath": "./browser.json",
        "dirname": __dirname,
        "filename": __filename
      });

    out.w(' <!DOCTYPE html> <html><head><meta charset="utf-8"><title>Homepage</title>');
    __tag(out,
      ______node_modules_lasso_taglib_head_tag_js,
      {});

    out.w('</head><body>My home ');
    __tag(out,
      ______components_appheader_renderer_js,
      {});
    __tag(out,
      ______node_modules_lasso_taglib_body_tag_js,
      {});
    __tag(out,
      ______node_modules_marko_widgets_taglib_init_widgets_tag_js,
      {});

    out.w('</body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);