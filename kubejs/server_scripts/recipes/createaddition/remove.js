ServerEvents.recipes((event) => {
  const recipes = [
    { id: 'createaddition:liquid_burning/biofuel' },
    { id: 'createaddition:mixing/bioethanol' },
    { id: 'createaddition:charging/electrify_gold_ingot' },
    { id: 'createaddition:crushing/tuff_recycling' },
    { id: 'extendedae:assembler/logic_processor' },
    { id: 'extendedae:assembler/calculation_processor' },
    { id: 'extendedae:assembler/engineering_processor' },
    { id: 'extendedae:assembler/energy_processor' },
    { id: 'createaddition:mixing/electrum' },
  ];

  recipes.forEach((recipe) => {
    event.remove(recipe);
  });
});
