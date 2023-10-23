// Favorites.js
import React, { useState } from 'react';

const Favorites = () => {
  // Use local state to manage the list of favorite recipes
  // const [favoriteRecipes, setFavoriteRecipes] = useState([
  //   // Initialize with some sample favorite recipes
  //   {
  //     idMeal: '1',
  //     strMeal: 'Favorite Recipe 1',
  //     strMealThumb: 'https://example.com/recipe1.jpg',
  //     // Add other recipe details here
  //   },
  //   {
  //     idMeal: '2',
  //     strMeal: 'Favorite Recipe 2',
  //     strMealThumb: 'https://example.com/recipe2.jpg',
  //     // Add other recipe details here
  //   },
  // ]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Favorite Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favoriteRecipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white border border-gray-300 rounded-lg p-4 hover:shadow-lg"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
            {/* Add other recipe details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
