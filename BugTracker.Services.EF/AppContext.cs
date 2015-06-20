using BugTracker.Domain;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Services.EF
{
    public class AppContext : DbContext
    {
        public AppContext()
            : base(ConfigurationManager.ConnectionStrings["appContext"].ConnectionString)
        {
            
        }

        public DbSet<BugListItem> BugListItems { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BugListItem>().ToTable("Bug");
            
            base.OnModelCreating(modelBuilder);
        }
    }
}
