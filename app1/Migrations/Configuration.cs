namespace app1.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using app1.Models.Entities;

    internal sealed class Configuration : DbMigrationsConfiguration<app1.Models.app1Context>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(app1.Models.app1Context context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.Products.AddOrUpdate(x => x.Id, new Product() { Id = 1, ProductName ="1070 SC" ,Price=400,InStock=true});
            //context.ProductDetails.AddOrUpdate(x => x.Id,new ProductDetails() { ProductCompany ="Evga"});
        }
    }
}
