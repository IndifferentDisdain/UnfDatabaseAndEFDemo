using System.Web.Optimization;

namespace BugTracker.AppStart
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/bundles/css-global").Include(
                "~/Content/bootstrap.min.css",
                "~/Content/toastr.min.css",
                "~/Content/Site.css"));

            bundles.Add(new ScriptBundle("~/bundles/global").Include(
                "~/Scripts/jquery-2.1.4.min.js",
                "~/Scripts/bootstrap.min.js",
                "~/Scripts/toastr.min.js",
                "~/scripts/app/extension-methods.js"));

            bundles.Add(new ScriptBundle("~/bundles/flux").Include(
                "~/scripts/flux/base-store.js",
                "~/scripts/flux/dispatcher.js",
                "~/scripts/flux/event.js",
                "~/scripts/flux/reactor.js"));

            bundles.Add(new ScriptBundle("~/bundles/bugs").Include(
                "~/scripts/app/bugs/models.js",
                "~/scripts/app/bugs/actions.js",
                "~/scripts/app/bugs/store.js",
                "~/Scripts/app/bugs/index.jsx"));

            bundles.Add(new ScriptBundle("~/bundles/bug-notes").Include(
                "~/scripts/app/bugs/models.js",
                "~/scripts/app/bugs/actions.js",
                "~/scripts/app/bugs/store-notes.js",
                "~/Scripts/app/bugs/notes.jsx"));

        }
    }
}