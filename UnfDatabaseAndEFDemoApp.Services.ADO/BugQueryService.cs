using BugTracker.Domain;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BugTracker.Services.ADO
{
    public class BugQueryService : IBugQueryService
    {
        public async Task<IList<BugListItem>> GetBugsList()
        {
            return new List<BugListItem>
            {
                new BugListItem
                {
                    Id = 1,
                    Title = "Sample Bug 1",
                    Status = BugStatus.New
                },
                new BugListItem
                {
                    Id = 2,
                    Title = "Sample Bug 2",
                    Status = BugStatus.New
                },
                new BugListItem
                {
                    Id = 3,
                    Title = "Sample Bug 3",
                    Status = BugStatus.New
                },
                new BugListItem
                {
                    Id = 4,
                    Title = "Sample Bug 4",
                    Status = BugStatus.InProgress
                },
                new BugListItem
                {
                    Id = 5,
                    Title = "Sample Bug 5",
                    Status = BugStatus.InProgress
                },
                new BugListItem
                {
                    Id = 6,
                    Title = "Sample Bug 6",
                    Status = BugStatus.InProgress
                },
                new BugListItem
                {
                    Id = 7,
                    Title = "Sample Bug 7",
                    Status = BugStatus.Completed
                },
                new BugListItem
                {
                    Id = 8,
                    Title = "Sample Bug 8",
                    Status = BugStatus.Completed
                },
                new BugListItem
                {
                    Id = 9,
                    Title = "Sample Bug 9",
                    Status = BugStatus.Completed
                }
            };
        }
    }
}
