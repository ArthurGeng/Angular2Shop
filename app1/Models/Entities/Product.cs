﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;


namespace app1.Models.Entities
{
    public class Product
    {

        public int Id { get; set; }
        [Required]
        public String ProductName { get; set; }
        [Required]
        public Double Price { get; set; }
        [Required]
        public Boolean InStock { get; set; }

        //public virtual ProductDetails ProductDetails { get; set; }
    }
}