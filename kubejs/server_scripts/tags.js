// ITEMS
ServerEvents.tags('item', (event) => {
  event.add('hazentouvelib:focus/radiance_focus', 'eternal_starlight:starlit_diamond');
  event.add('mynethersdelight:boiled_egg_candidate', '#c:eggs');
  event.add('c:eggs', [
    'reanimal:kiwi_egg',
    'reanimal:ostrich_egg',
    'reanimal:pigeon_egg',
    'reanimal:vulture_egg',
    'reanimal:penguin_egg',
    'reanimal:crocodile_egg',
  ]);
  event.add('c:doughs/wheat', 'create:dough');
  event.add('c:foods/milk', 'minecraft:milk_bucket');
  event.add('nomoremagicchoices:skill_weapon', '#minecraft:enchantable/weapon');
  event.add('c:oil', 'createdieselgenerators:crude_oil');
  event.removeAllTagsFrom('createdieselgenerators:plant_oil', 'crystal_chronicles:source_blood');
});

// BLOCKS
ServerEvents.tags('block', (event) => {
  event.add('irons_spellbooks:spectral_hammer_mineable', ['#eternal_starlight:base_stone_starlight']);
});
ServerEvents.tags('fluid', (event) => {
  event.add('c:oil', 'createdieselgenerators:crude_oil');
});
// EMNTITIES
ServerEvents.tags('entity_type', (event) => {
  event.add('ars_nouveau:bubble_blacklist', [
    'create:contraption',
    'create:stationary_contraption',
    'create:gantry_contraption',
    'create:carriage_contraption',
  ]);
  event.add('iceandfire:immune_to_gorgon_stone', [
    /cataclysm/,
    /legendary_monsters/,
    /iceandfire/,
    /ars_nouveau/,
    /scguns/,
    /eternal_starlight/,
    /irons_spellbooks/,
    /mowziesmobs/,
  ]);
  event
    .get('ars_nouveau:jar_blacklist')
    .removeAll()
    .add([
      /cataclysm/,
      /legendary_monsters/,
      /iceandfire/,
      /ars_nouveau/,
      /scguns/,
      /eternal_starlight/,
      /irons_spellbooks/,
      /mowziesmobs/,
      'minecraft:iron_golem',
    ]);
});
