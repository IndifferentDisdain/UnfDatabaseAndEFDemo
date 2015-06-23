using BugTracker.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Services
{
    public interface IBugCommandService
    {
        Task<int> AddNewBugAsync(Bug bug);

        Task UpdateStatusAsync(int bugID, BugStatus newStatus);
    }
}
