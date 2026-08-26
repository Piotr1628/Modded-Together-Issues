ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'apotheosis:simple_reforging_table' },
    { id: 'apotheosis:reforging_table' },
    { id: 'apotheosis:gem_fused_slate' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
