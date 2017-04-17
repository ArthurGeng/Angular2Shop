using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace app1.Models.Entities
{
    public class ProductDetails
    {
        public int Id { get; set; }
       
        [Required]
        public String ProductCompany { get; set; }
       
        public virtual Product Product { get; set; }
    }
}