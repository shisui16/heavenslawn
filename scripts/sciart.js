const wrapper = document.querySelector('div');
const items = wrapper.querySelectorAll('span');

const onPointerMove = (pointer) => {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    const x = rect.x + (rect.width / 2);
    const y = rect.y + (rect.height / 2);
    
    const b = pointer.x - x;
    const a = pointer.y - y;
    const c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
    const r = (Math.acos(b / c) * 180 / Math.PI) * (pointer.y > y ? 1 : -1);
    
    item.style.setProperty('--rotate', `${r}deg`);
  });
};

window.addEventListener('pointermove', onPointerMove);

onPointerMove(items[32].getBoundingClientRect());
