using BugTracker.Domain;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace BugTracker.Services.EF
{
    public class BugQueryService : IBugQueryService
    {
        public async Task<IList<BugListItem>> GetBugsList()
        {
            using (var ctx = new AppContext())
            {
                return await ctx.BugListItems.OrderBy(x => x.Id).ToListAsync();;
            }
        }
    }
}
