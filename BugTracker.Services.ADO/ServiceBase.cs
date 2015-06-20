using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Services.ADO
{
    public class ServiceBase
    {
        private static readonly string _connectionString;

        static ServiceBase()
        {
            _connectionString = System.Configuration.ConfigurationManager.ConnectionStrings["appContext"].ConnectionString;
        }

        public string ConnectionString
        {
            get { return _connectionString; }
        }
    }
}
