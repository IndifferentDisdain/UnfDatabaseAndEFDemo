using BugTracker.Domain;
using System;
using System.Threading.Tasks;

namespace BugTracker.Services.EF
{
    public class BugCommandService : IBugCommandService
    {
        public async Task<int> AddNewBugAsync(Bug bug)
        {
            using (var ctx = new AppContext())
            {
                ctx.Bugs.Add(bug);

                bug.LastActivityDate = DateTime.UtcNow;

                await ctx.SaveChangesAsync();

                return bug.Id;
            }
        }

        public async Task UpdateStatusAsync(int bugID, Domain.BugStatus newStatus)
        {
            using (var ctx = new AppContext())
            {
                var bug = await ctx.Bugs.FindAsync(bugID);

                bug.Status = newStatus;
                bug.LastActivityDate = DateTime.UtcNow;

                await ctx.SaveChangesAsync();
            }
        }
    }
}
