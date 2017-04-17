using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace app1.Models.Entities
{
    public class Combiner
    {
        public int Id { get; set; }
        [Required]
        public String ProductName { get; set; }
        [Required]
        public Double Price { get; set; }
        [Required]
        public Boolean InStock { get; set; }
        [Required]
        public String ProductCompany { get; set; }

        
    }
}