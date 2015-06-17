using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace UnfDatabaseAndEFDemoApp
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/flux").Include(
                "~/scripts/flux/base-store.js",
                "~/scripts/flux/dispatcher.js",
                "~/scripts/flux/event.js",
                "~/scripts/flux/reactor.js"));

            bundles.Add(new ScriptBundle("~/bundles/bugs").Include(
                "~/scripts/app/bugs/models.js",
                "~/scripts/app/bugs/actions.js",
                "~/scripts/app/bugs/store.js"));

        }
    }
}