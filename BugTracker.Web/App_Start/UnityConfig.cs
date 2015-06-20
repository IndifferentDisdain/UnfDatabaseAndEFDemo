using BugTracker.Dependencies;
using Microsoft.Practices.Unity;
using System;

namespace BugTracker.AppStart
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
