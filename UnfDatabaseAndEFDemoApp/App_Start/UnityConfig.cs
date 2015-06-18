using Microsoft.Practices.Unity;
using System;
using UnfDatabaseAndEFDemoApp.DependencyManager;

namespace UnfDatabaseAndEFDemoApp.App_Start
{
    public class UnityConfig
    {
        private static Lazy<IUnityContainer> _container = new Lazy<IUnityContainer>(() =>
        {
            return UnityBootstrapper.Container;
        });

        public static IUnityContainer GetConfiguredContainer()
        {
            return _container.Value;
        }
    }
}
