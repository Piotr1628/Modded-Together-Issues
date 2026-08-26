ServerEvents.recipes((event) => {
  event.recipes.create.filling('ae2:fluix_covered_cable', [
    Fluid.of('rubberworks:resin', 100),
    'ae2:fluix_glass_cable',
  ]);
});
