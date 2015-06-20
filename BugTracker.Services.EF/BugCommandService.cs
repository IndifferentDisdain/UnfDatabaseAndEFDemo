using System.Threading.Tasks;

namespace BugTracker.Services.EF
{
    public class BugCommandService : IBugCommandService
    {
        public async Task UpdateStatusAsync(int bugID, Domain.BugStatus newStatus)
        {
            using (var ctx = new AppContext())
            {
                var bug = await ctx.Bugs.FindAsync(bugID);
                bug.Status = newStatus;
                await ctx.SaveChangesAsync();
            }
        }
    }
}
