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
        //[ForeignKey("Product")]
        public int Id { get; set; }
        // Navigation property
        //public virtual Product Product { get; set; }
        [Required]
        public String ProductCompany { get; set; }
        //[Required]
        //public DateTime ReleaseDate { get; set; }
        public int ProductId { get; set; }

        public Product Product { get; set; }
    }
}