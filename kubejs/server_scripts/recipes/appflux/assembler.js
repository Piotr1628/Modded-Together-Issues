ServerEvents.recipes((event) => {
  // Chips
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'appflux:printed_energy_processor',
      'ae2:printed_silicon',
      'oritech:plastic_sheet',
      'minecraft:redstone',
    ])
    .itemOutputs('appflux:energy_processor')
    .time(400);
});
