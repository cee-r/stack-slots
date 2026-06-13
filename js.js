const REEL_WORDS = [
    ['Vanilla', 'Vue', 'Next.js', 'React', 'Hugo', 'Astro', 'Eleventy', 'Svelte', 'Gatsby', 'Remix', 'Jekyll', 'Web Components'], // reel 0
    ['Lit', 'Bootstrap',  'Tailwind', 'UnoCSS', 'Bulma', 'Semantic UI', 'Material', 'Shadcn/ui', 'Carbon', 'Chakra', 'Stencil', 'Fluent', 'Primer', 'Radix', 'Ant', 'Mantine' ], // reel 1
    ['Atomic',  'Utility',   'Component-Driven',  'Feature-Sliced', 'Smart-Dumb', 'Headless',  'Design Tokens',  'CSS Modules',  'CSS-in-JS',  'BEM', 'SMACSS', 'ITCSS'],  // reel 2
  ];

document.getElementById('spinBtn').addEventListener('click', () => {
  const btn = document.getElementById('spinBtn');
  btn.disabled = true;

  const TICK = 80;
  const stopTimes = [1000, 1600, 2200];

  REEL_WORDS.forEach((words, i) => {
    const el = document.getElementById(`reel-${i}`).querySelector('.reel-word');
    const finalWord = words[Math.floor(Math.random() * words.length)];

    el.classList.add('is-spinning');
    el.classList.remove('is-settled');

    const interval = setInterval(() => {
      el.textContent = words[Math.floor(Math.random() * words.length)];
    }, TICK);

    setTimeout(() => {
      clearInterval(interval);
      el.textContent = finalWord;
      el.classList.remove('is-spinning');
      el.classList.add('is-settled');
      if (i === REEL_WORDS.length - 1) btn.disabled = false;
    }, stopTimes[i]);
  });
});