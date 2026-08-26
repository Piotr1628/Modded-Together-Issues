ServerEvents.recipes((event) => {
  const recipes = [];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
