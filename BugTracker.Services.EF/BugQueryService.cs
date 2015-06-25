using BugTracker.Domain;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace BugTracker.Services.EF
{
    public class BugQueryService : IBugQueryService
    {
        public async Task<IList<Bug>> GetBugsList()
        {
            using (var ctx = new AppContext())
            {
                ctx.Configuration.ProxyCreationEnabled = false;
                return await ctx
                    .Bugs
                    .OrderByDescending(x => x.LastActivityDate)
                    .ThenByDescending(x => x.CreatedDate)
                    .ToListAsync();;
            }
        }
    }
}
