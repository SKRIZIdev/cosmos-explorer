const QUESTIONS = [
  ['Which planet is the hottest?', ['Mercury','Venus','Mars','Jupiter'], 1],
  ['Which planet spins on its side?', ['Saturn','Neptune','Uranus','Earth'], 2],
  ['Which is the largest planet?', ['Saturn','Earth','Neptune','Jupiter'], 3],
  ['How many moons does Mars have?', ['0','1','2','4'], 2],
  ['Which planet is farthest from the Sun?', ['Neptune','Uranus','Saturn','Pluto'], 0],
  ['Which planet is known for its rings?', ['Jupiter','Saturn','Mars','Venus'], 1],
];
let score = 0, answered = 0;
const box = document.getElementById('quiz');
QUESTIONS.forEach((q, qi) => {
  const el = document.createElement('div');
  el.className = 'q';
  el.innerHTML = `<h3>${qi + 1}. ${q[0]}</h3>` +
    q[1].map((o, oi) => `<button class="opt" data-q="${qi}" data-o="${oi}">${o}</button>`).join('');
  box.appendChild(el);
});
box.querySelectorAll('.opt').forEach(btn => btn.onclick = () => {
  const qi = +btn.dataset.q, oi = +btn.dataset.o;
  const parent = btn.parentElement;
  if (parent.dataset.done) return;
  parent.dataset.done = '1';
  answered++;
  const correct = QUESTIONS[qi][2];
  if (oi === correct) { btn.classList.add('right'); score++; }
  else { btn.classList.add('wrong'); parent.querySelector(`[data-o="${correct}"]`).classList.add('right'); }
  if (answered === QUESTIONS.length) {
    const s = document.createElement('div');
    s.className = 'score';
    s.innerHTML = `You scored <b>${score} / ${QUESTIONS.length}</b> 🚀<br>
      <button class="btn" onclick="location.reload()">Try again</button>`;
    box.appendChild(s);
    s.scrollIntoView({ behavior: 'smooth' });
  }
});
