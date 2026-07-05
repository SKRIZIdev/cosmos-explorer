const orrery = document.getElementById('orrery');
const detail = document.getElementById('detail');

PLANETS.forEach((p, i) => {
  const el = document.createElement('div');
  el.className = 'planet';
  el.style.animationDelay = (i * 70) + 'ms';
  el.innerHTML = `<div class="ball" style="width:${p.size}px;height:${p.size}px;
    background:radial-gradient(circle at 35% 30%, #fff6, ${p.color})"></div><span>${p.name}</span>`;
  el.onclick = () => {
    document.querySelectorAll('.planet').forEach(x => x.classList.remove('sel'));
    el.classList.add('sel');
    openPlanet(p);
  };
  orrery.appendChild(el);
});

function openPlanet(p) {
  const bd = document.createElement('div'); bd.className = 'planet-bd';
  bd.innerHTML = `<div class="planet-dialog">
    <button class="px" aria-label="Close">×</button>
    <div class="pvis">
      <div class="porbit"></div>
      <div class="pball" style="background:radial-gradient(circle at 34% 30%, #fff8, ${p.color})"></div>
    </div>
    <div class="pinfo">
      <span class="ptag">${p.tag}</span>
      <h2>${p.name}</h2>
      <p class="pdesc">${p.desc}</p>
      <div class="stats">
        <div class="stat"><small>Diameter</small><b>${p.dia}</b></div>
        <div class="stat"><small>Day length</small><b>${p.day}</b></div>
        <div class="stat"><small>Distance from Sun</small><b>${p.sun}</b></div>
        <div class="stat"><small>Moons</small><b>${p.moons}</b></div>
      </div>
    </div></div>`;
  document.body.appendChild(bd);
  requestAnimationFrame(() => bd.classList.add('show'));
  const close = () => { bd.classList.remove('show'); setTimeout(() => bd.remove(), 250); };
  bd.querySelector('.px').onclick = close;
  bd.onclick = e => { if (e.target === bd) close(); };
  document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } });
  detail.innerHTML = `<p class="placeholder">Now viewing <b style="color:var(--accent)">${p.name}</b> — tap another planet to explore.</p>`;
}
