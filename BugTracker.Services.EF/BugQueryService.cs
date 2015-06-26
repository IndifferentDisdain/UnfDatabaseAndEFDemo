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

        public async Task<Bug> GetBug(int id)
        {
            using (var ctx = new AppContext())
            {
                ctx.Configuration.ProxyCreationEnabled = false;

                var bug = await ctx.Bugs.Include(x => x.Notes).FirstOrDefaultAsync(x => x.Id == id);

                // HACK.JS: This is annoying... very easy to do in ADO.NET...
                bug.Notes = bug.Notes.OrderByDescending(x => x.CreatedDate).ToList();
                return bug;
            }
        }
    }
}
