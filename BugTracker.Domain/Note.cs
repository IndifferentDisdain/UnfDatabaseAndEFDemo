using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BugTracker.Domain
{
    public class Note
    {
        [Key]
        public int Id { get; set; }

        public int BugId { get; set; }

        [MaxLength(500)]
        [Required]
        public string Text { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedDate { get; set; }

        [ForeignKey("BugId")]
        public virtual Bug Bug { get; set; }
    }
}
