using BugTracker.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BugTracker.Services
{
    public interface IBugQueryService
    {
        Task<IList<Bug>> GetBugsList();
    }
}
