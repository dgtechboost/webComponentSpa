using System.Web.Optimization;

namespace webComponentsSpa
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/Site.css"));

            bundles.Add(new StyleBundle("~/bundles/SharedStyles").Include("~/Content/dashboard.css"));


            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));


            bundles.Add(new ScriptBundle("~/bundles/LayoutHeaderScripts").Include(
                    "~/Scripts/jquery-1.9.1.js",
                    "~/Scripts/jquery-ui-1.8.24.min.js",
                    "~/Scripts/bootstrap.min.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/LayoutFooterScripts").Include(
                    "~/Scripts/jquery-migrate-1.2.1.min.js",
                    "~/Scripts/jquery.unobtrusive*",
                    "~/Scripts/jquery.validate*"
                ));

            // SPA resources
            bundles.IgnoreList.Ignore("*.spec.js");

            bundles.Add(new ScriptBundle("~/bundles/webComponentAppScripts").Include(
                   "~/Scripts/app/models/flickr.js",
                   "~/Scripts/app/models/item.js",

                   "~/Scripts/app/dashboard/dashboard.service.js",
                   "~/Scripts/app/photo-stream/photo-stream.service.js",

                   "~/Scripts/app/item-editor/index.js",
                   "~/Scripts/app/item-editor/item-editor.controller.js",
                   "~/Scripts/app/item-editor/item-editor.component.js",

                   "~/Scripts/app/dashboard/index.js",
                   "~/Scripts/app/dashboard/dashboard.controller.js",
                   "~/Scripts/app/dashboard/dashboard.component.js",
                 
                   "~/Scripts/app/photo-stream/index.js",
                   "~/Scripts/app/photo-stream/photo-stream.controller.js",
                   "~/Scripts/app/photo-stream/photo-stream.component.js",

                   "~/Scripts/app/container/index.js",
                   "~/Scripts/app/container/container.route.js"
               ));


            bundles.Add(new StyleBundle("~/bundles/SpaSharedVendorStyles").Include(
                    "~/Content/toaster.min.css",
                    "~/Content/toaster.css",
                    "~/Content/ui-bootstrap-csp.css",
                    "~/Content/bootstrap.css",
                    "~/Content/bootstrap.min.css"
                ));

            bundles.Add(new ScriptBundle("~/bundles/SpaSharedVendorScripts").Include(
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-ui/ui-bootstrap.js",
                    "~/Scripts/angular-ui/ui-bootstrap-tpl.js",
                    "~/Scripts/angular-ui-router.min.js",
                     "~/Scripts/angular-ui-router.js",
                    "~/Scripts/angular-resource.js",
                    "~/Scripts/angular-mocks.js",
                    "~/Scripts/angular-animate.js",
                    "~/Scripts/angular-sanitize.js",
                    "~/Scripts/angular-messages.js",
                    "~/Scripts/toaster.js",
                    "~/Scripts/bootstrap.js",
                    "~/Scripts/jasmine/jasmine.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/SpaSharedAppCoreScripts").Include(
                //shared scripts go here
                    "~/Scripts/app/core/index.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/SpaSharedAppScripts").Include(
                    "~/Scripts/app/index.js",
                    "~/Scripts/app/app.component.js"
                ));

        }
    }
}