using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using app1.Models.Entities;

namespace app1.Models
{
    public class app1Context : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public app1Context() : base("name=app1Context")
        {
        }

        public System.Data.Entity.DbSet<app1.Models.Entities.Product> Products { get; set; }

        public System.Data.Entity.DbSet<app1.Models.Entities.ProductDetails> ProductDetails { get; set; }

        public System.Data.Entity.DbSet<app1.Models.Entities.Combiner> Combiners { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Combiner>().HasOptional(s => s.Product).WithRequired(i => i.Combiner);
            modelBuilder.Entity<Product>().HasOptional(s => s.ProductDetails).WithRequired(i => i.Product);
        }
    }
}
