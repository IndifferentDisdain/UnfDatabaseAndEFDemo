﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace UnfDatabaseAndEFDemoApp.Controllers
{
    public class BugsController : Controller
    {
        // GET: Bugs
        public ActionResult Index()
        {
            return View();
        }
    }
}