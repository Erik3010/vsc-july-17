const card = document.querySelector(".card");

document.addEventListener("mousemove", e => {
  const centerX = e.clientX - (window.innerWidth / 2);
  const centerY = (window.innerHeight / 2) - e.clientY;
  const degX = centerX * 0.05;
  const degY = centerY * 0.05;

  card.style.transform = `perspective(1000px) rotateY(${degX}deg) rotateX(${degY}deg)`
})