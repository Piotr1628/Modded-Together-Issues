ServerEvents.recipes((event) => {
  event.recipes.create.mixing(
    Fluid.of('create_enchantment_industry:experience', 1000),
    Fluid.of('sophisticatedcore:xp_still', 1000),
  );
});
