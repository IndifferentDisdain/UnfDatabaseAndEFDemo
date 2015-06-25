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

        public DbSet<Bug> Bugs { get; set; }
        public DbSet<Note> Notes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bug>().ToTable("Bug");
            modelBuilder.Entity<Note>().ToTable("Note");
            
            base.OnModelCreating(modelBuilder);
        }
    }
}
