using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RecipeManagementAPI.Models
{
    public class Recipe
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Recipe name is required.")]
        [MaxLength(100, ErrorMessage = "Recipe name cannot exceed 100 characters.")]
        [Column("Name")] // Explicitly mapping the column name to 'Name'
        public string Name { get; set; }

        [Required(ErrorMessage = "Ingredients are required.")]
        public string Ingredients { get; set; }

        [Required(ErrorMessage = "Instructions are required.")]
        public string Instructions { get; set; }

        [Required(ErrorMessage = "Category ID is required.")]
        public int CategoryId { get; set; }

       
    }
}
