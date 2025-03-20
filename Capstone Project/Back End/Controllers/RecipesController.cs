using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipeManagementAPI.Data;
using RecipeManagementAPI.Models;

namespace RecipeManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RecipesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/recipes
        [HttpGet]
        public async Task<IActionResult> GetRecipes()
        {
            var recipes = await _context.Recipes.ToListAsync();
            if (!recipes.Any())
            {
                return NotFound("No recipes found.");
            }
            return Ok(recipes);
        }

        // GET: api/recipes/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecipeById(int id)
        {
            var recipe = await _context.Recipes.FindAsync(id);
            if (recipe == null)
            {
                return NotFound($"Recipe with ID {id} not found.");
            }
            return Ok(recipe);
        }

        // POST: api/recipes
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddRecipe([FromBody] Recipe recipe)
        {
            if (recipe == null || string.IsNullOrEmpty(recipe.Name))
            {
                return BadRequest("Invalid recipe data. Name is required.");
            }

            try
            {
                _context.Recipes.Add(recipe);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetRecipeById), new { id = recipe.Id }, recipe);
            }
            catch (DbUpdateException dbEx)
            {
                Console.WriteLine($"Database error: {dbEx.InnerException?.Message}");
                return StatusCode(500, "A database error occurred. Please try again.");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error adding recipe: {ex.Message}");
                return StatusCode(500, "An error occurred while adding the recipe. Please try again.");
            }
        }

        // PUT: api/recipes/{id}
        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateRecipe(int id, [FromBody] Recipe updatedRecipe)
        {
            if (updatedRecipe == null)
            {
                return BadRequest("Invalid recipe data.");
            }

            var existingRecipe = await _context.Recipes.FindAsync(id);
            if (existingRecipe == null)
            {
                return NotFound($"Recipe with ID {id} not found.");
            }

            existingRecipe.Name = updatedRecipe.Name;
            existingRecipe.Ingredients = updatedRecipe.Ingredients;
            existingRecipe.Instructions = updatedRecipe.Instructions;
            existingRecipe.CategoryId = updatedRecipe.CategoryId;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(new { Message = "Recipe updated successfully!" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updating recipe: {ex.Message}");
                return StatusCode(500, "An error occurred while updating the recipe. Please try again.");
            }
        }

        // DELETE: api/recipes/{id}
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteRecipe(int id)
        {
            var recipe = await _context.Recipes.FindAsync(id);
            if (recipe == null)
            {
                return NotFound($"Recipe with ID {id} not found.");
            }

            _context.Recipes.Remove(recipe);
            try
            {
                await _context.SaveChangesAsync();
                return Ok(new { Message = "Recipe deleted successfully!" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error deleting recipe: {ex.Message}");
                return StatusCode(500, "An error occurred while deleting the recipe. Please try again.");
            }
        }
    }
}
