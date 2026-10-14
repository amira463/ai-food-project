// ---------- Your projects: edit this list ----------
const projects = [
  {
    title: "Tomato Shelf-Life Predictor",
    status: "In progress",
    description:
      "A model that predicts how many days a batch of tomatoes stays fresh from storage temperature, humidity, and ripeness. Built to help traders and small processors reduce spoilage.",
    tags: ["Python", "scikit-learn", "Food quality"],
    link: "", // add your GitHub or demo link here
  },
  {
    title: "Food Quality Classifier",
    status: "Planned",
    description:
      "An image model that sorts fresh from damaged produce. Add details once you start.",
    tags: ["Computer vision", "Python"],
    link: "",
  },
  {
    title: "This Portfolio Website",
    status: "Live",
    description:
      "The site you are looking at, built with plain HTML, CSS, and JavaScript, with dark mode and a mobile layout.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "",
  },
];

// ---------- Render project cards ----------
const list = document.getElementById("project-list");

projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "card";

  const tags = p.tags.map((t) => `<li>${t}</li>`).join("");
  const link = p.link
    ? `<a class="card-link" href="${p.link}" target="_blank" rel="noopener">View project →</a>`
    : "";

  card.innerHTML = `
    <span class="status">${p.status}</span>
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <ul class="tags">${tags}</ul>
    ${link}
  `;
  list.appendChild(card);
});

// ---------- Dark mode (remembers your choice) ----------
const root = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(saved || (prefersDark ? "dark" : "light"));

themeBtn.addEventListener("click", () => {
  setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
});

// ---------- Mobile menu ----------
const nav = document.getElementById("nav");
document.getElementById("menu-toggle").addEventListener("click", () => {
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();
