const orrery = document.getElementById('orrery');
const detail = document.getElementById('detail');

PLANETS.forEach((p, i) => {
  const el = document.createElement('div');
  el.className = 'planet';
  el.innerHTML = `<div class="ball" style="width:${p.size}px;height:${p.size}px;
    background:radial-gradient(circle at 35% 30%, #fff6, ${p.color})"></div><span>${p.name}</span>`;
  el.onclick = () => {
    document.querySelectorAll('.planet').forEach(x => x.classList.remove('sel'));
    el.classList.add('sel');
    show(p);
  };
  orrery.appendChild(el);
});

function show(p) {
  detail.classList.add('detail');
  detail.innerHTML = `<h2>${p.name}</h2><div class="tag">${p.tag}</div>
    <p class="desc">${p.desc}</p>
    <div class="stats">
      <div class="stat"><small>Diameter</small><b>${p.dia}</b></div>
      <div class="stat"><small>Day length</small><b>${p.day}</b></div>
      <div class="stat"><small>Distance from Sun</small><b>${p.sun}</b></div>
      <div class="stat"><small>Moons</small><b>${p.moons}</b></div>
    </div>`;
}
