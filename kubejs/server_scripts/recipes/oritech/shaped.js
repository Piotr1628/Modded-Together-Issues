ServerEvents.recipes((event) => {
  event.shaped('oritech:particle_collector_block', ['SSS', 'SWS', 'SSS'], {
    S: 'oritech:superconductor',
    W: 'malum:wavecharger',
  });
});
