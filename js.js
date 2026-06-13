const REEL_WORDS = [
    ['DREAM', 'BLAZE', 'LUCKY', 'GLORY', 'STORM', 'CROWN', 'EMBER', 'PIXEL', 'NOVA',  'FROST'], // reel 0
    ['CHAOS', 'NEON',  'BRAVE', 'SWIFT', 'BLOOM', 'SPARK', 'TITAN', 'MAGIC', 'PRISM', 'SURGE'], // reel 1
    ['FIRE',  'ICE',   'WIND',  'EARTH', 'LIGHT', 'DARK',  'VOID',  'TIME',  'SOUL',  'FATE'],  // reel 2
  ];

document.getElementById('spinBtn').addEventListener('click', () => {
  REEL_WORDS.forEach((words, i) => {
    const word = words[Math.floor(Math.random() * words.length)];
    document.getElementById(`reel-${i}`).textContent = word;
  });
});