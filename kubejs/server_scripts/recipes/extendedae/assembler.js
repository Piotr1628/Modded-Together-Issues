ServerEvents.recipes((event) => {
  event.recipes.oritech
    .assembler()
    .itemInputs([
      'extendedae:concurrent_processor_print',
      'ae2:printed_silicon',
      'oritech:plastic_sheet',
      'minecraft:redstone',
    ])
    .itemOutputs('extendedae:concurrent_processor')
    .time(400);
});
