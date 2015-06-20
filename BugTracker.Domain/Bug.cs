
namespace BugTracker.Domain
{
    public class Bug
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public BugStatus Status { get; set; }
    }
}
