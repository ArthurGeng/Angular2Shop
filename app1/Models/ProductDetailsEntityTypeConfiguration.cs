using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
using app1.Models.Entities;

namespace app1.Models
{
    public class ProductDetailsEntityTypeConfiguration: EntityTypeConfiguration<ProductDetails>
    {
    
        public ProductDetailsEntityTypeConfiguration()
        {
            this.HasRequired(c => c.Product).WithOptional(p => p.ProductDetails);
        }
    }
}