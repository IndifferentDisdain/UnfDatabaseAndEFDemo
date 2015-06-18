using System.Threading.Tasks;
using System.Web.Mvc;
using UnfDatabaseAndEFDemoApp.Services;

namespace UnfDatabaseAndEFDemoApp.Controllers
{
    public class BugsController : Controller
    {
        private readonly IBugQueryService _bugQueryService;

        public BugsController(IBugQueryService bugQueryService)
        {
            _bugQueryService = bugQueryService;
        }

        // GET: Bugs
        public async Task<ActionResult> Index()
        {
            return View(await _bugQueryService.GetBugsList());
        }
    }
}