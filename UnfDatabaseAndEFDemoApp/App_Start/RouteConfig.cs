using System.Web.Mvc;
using System.Web.Routing;

namespace UnfDatabaseAndEFDemoApp
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapRoute(
                name: "Home",
                url: "",
                defaults: new { controller = "Bugs", action = "Index" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Bugs", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}