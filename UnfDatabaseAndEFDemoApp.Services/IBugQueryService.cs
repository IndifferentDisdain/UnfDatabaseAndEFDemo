using System.Collections.Generic;
using System.Threading.Tasks;
using UnfDatabaseAndEFDemoApp.Domain;

namespace UnfDatabaseAndEFDemoApp.Services
{
    public interface IBugQueryService
    {
        Task<IList<BugListItem>> GetBugsList();
    }
}
