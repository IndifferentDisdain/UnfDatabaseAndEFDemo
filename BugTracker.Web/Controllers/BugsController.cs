using BugTracker.Domain;
using BugTracker.Services;
using System;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace BugTracker.Controllers
{
    public class BugsController : Controller
    {
        private readonly IBugQueryService _bugQueryService;
        private readonly IBugCommandService _bugCommandService;

        public BugsController(IBugQueryService bugQueryService,
            IBugCommandService bugCommandService)
        {
            _bugQueryService = bugQueryService;
            _bugCommandService = bugCommandService;
        }

        // GET: Bugs
        public async Task<ActionResult> Index()
        {
            return View(await _bugQueryService.GetBugsList());
        }

        public async Task<ActionResult> UpdateBugStatus(int bugID, BugStatus newStatus)
        {
            try
            {
                await _bugCommandService.UpdateStatusAsync(bugID, newStatus);
                return Json(new { success = true });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }

        [HttpPost]
        public async Task<ActionResult> AddNewBug(Bug newBug)
        {
            try
            {
                var retVal = await _bugCommandService.AddNewBugAsync(newBug);
                return Json(new { success = true, id = retVal });
            }
            catch (Exception ex)
            {
                return Json(new { success = false, message = ex.Message });
            }
        }
    }
}