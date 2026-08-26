ServerEvents.recipes((event) => {
  const recipes = [{ id: 'appflux:inscriber/energy' }];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
