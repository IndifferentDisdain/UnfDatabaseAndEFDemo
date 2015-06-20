using BugTracker.Services;
using Microsoft.Practices.Unity;
using System.Configuration;
using ADO = BugTracker.Services.ADO;
using EF = BugTracker.Services.EF;

namespace BugTracker.Dependencies
{
    public static class UnityBootstrapper
    {
        private static readonly IUnityContainer _container;

        static UnityBootstrapper()
        {
            _container = new UnityContainer();

            var settings = ConfigurationManager.AppSettings;
            if (bool.Parse(settings["UseEntityFramework"]))
            {
                _container.RegisterServicesForEF();
            }
            else
            {
                _container.RegisterServicesForADO();
            }
        }

        public static IUnityContainer Container
        {
            get { return _container; }
        }

        private static void RegisterServicesForADO(this IUnityContainer container)
        {
            container.RegisterType<IBugQueryService, ADO.BugQueryService>();
        }

        private static void RegisterServicesForEF(this IUnityContainer container)
        {
            container.RegisterType<IBugQueryService, EF.BugQueryService>();
        }
    }
}
