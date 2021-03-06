﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BugTracker.Domain
{
    public class Bug
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(140)]
        [Required]
        public string Title { get; set; }

        [MaxLength(500)]
        [Required]
        public string Description { get; set; }

        [Required]
        public BugStatus Status { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedDate { get; set; }

        public DateTime LastActivityDate { get; set; }

        public virtual ICollection<Note> Notes { get; set; }
    }
}
