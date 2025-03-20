using System.ComponentModel.DataAnnotations;

namespace RecipeManagementAPI.Models
{
    public class Category
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Category name is required.")]
        [MaxLength(50, ErrorMessage = "Category name cannot exceed 50 characters.")]
        public string Name { get; set; }

        // Navigation Property for Recipes
        public ICollection<Recipe> Recipes { get; set; }
    }
}
