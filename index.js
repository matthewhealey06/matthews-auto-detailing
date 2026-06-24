function setupMobileMenu() {
  const icon = document.querySelector(".mobile-menu-icon");
  const menu = document.querySelector(".mobile-menu");
  if (!icon || !menu) return;

  icon.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}


document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setActiveNav();
});

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam odio, et ipsa, vitae sapiente maiores tempore quae aliquam necessitatibus, beatae non voluptatum aliquid.",
    name: "Sarah Mitchell",
    img: "images/profile-female.png"
  },
  {
    text: "Donec ullamcorper fermentum velit at pulvinar. Vivamus ac convallis sapien. In lacinia nulla non turpis suscipit, eu luctus mauris ultrices.",
    name: "James Hartley",
    img: "images/profile-male.png"
  },
  {
    text: "Proin sed malesuada velit. In fermentum, arcu eget mollis tincidunt, est nisl auctor leo, eget fermentum libero diam in justo.",
    name: "Priya Desai",
    img: "images/profile-female.png"
  }
];

let current = 0;

const quoteEl = document.querySelector("#testimonials > p");
const nameEl = document.querySelector(".profile-section p");
const imgEl = document.querySelector(".profile-section img");
const dots = document.querySelectorAll(".testimonial-page p");
const leftBtn = document.getElementById("left-arrow");
const rightBtn = document.getElementById("right-arrow");

function update(direction) {
  const t = testimonials[current];
  const els = [quoteEl, document.querySelector(".profile-section")];
  const slideOut = direction === "right" ? "-100px" : "100px";
  const slideIn = direction === "right" ? "100px" : "-100px";

  els.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = `translateX(${slideOut})`;
  });

  setTimeout(() => {
    quoteEl.textContent = t.text;
    nameEl.textContent = t.name;
    imgEl.src = t.img;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));

    els.forEach(el => {
      el.style.transition = "none";
      el.style.transform = `translateX(${slideIn})`;
    });

    requestAnimationFrame(() => {
      els.forEach(el => {
        el.style.transition = "transform 0.3s ease, opacity 0.3s ease";
        el.style.transform = "translateX(0)";
        el.style.opacity = 1;
      });
    });
  }, 300);
}

leftBtn.addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  update("left");
});

rightBtn.addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  update("right");
});
(function() {
  const p = ['07', '593', ' 284', ' 599'];
  const el = document.getElementById('phone-link');
  const num = p.join('');
  el.href = 'tel:' + num.replace(/\s/g, '');
  el.textContent = num;
})();