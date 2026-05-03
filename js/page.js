document.addEventListener("DOMContentLoaded", function() {

  // === SIDEBAR ACTIVE AU SCROLL ===
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".sidebar-item");

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(function(link) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { threshold: 0.25 });

  sections.forEach(function(section) {
    observer.observe(section);
  });

  // === BOUTON RETOUR EN HAUT ===
  const mybutton = document.querySelector(".back");

  window.onscroll = function() {
    if (!mybutton) return;
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  };

  if (mybutton) {
    mybutton.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === PROJETS ===
  const projetsData = [
  {
    emoji: "💭",
    bg: "linear-gradient(135deg,#1a1e2a83,#1f213d8a)",
    title: "Cartes Memory",
    date: "Octobre – Décembre 2024 · BTS SIO 1e année",
    desc: "Création d'une application de cartes interactives, on choisit une matière puis on peut réviser avec différents thèmes.",
    tags: ["HTML", "CSS", "JS", "PHP", "MySQL"],
    images: [
      { src: "img/projets/memory1.png", caption: "Page d'accueil – choix de la matière" },
      { src: "img/projets/memory2.png", caption: "Vue des cartes à retourner" },
      { src: "img/projets/memory3.png", caption: "Résultat de la session" }
    ]
  },
  {
    emoji: "📋",
    bg: "linear-gradient(135deg,#465e2b81,#224b0f85)",
    title: "Tableau Kanban",
    date: "Février – Mai 2025 · BTS SIO 1e année",
    desc: "Tableau de planification de tâches permettant d'organiser et de suivre l'avancement de projets sous forme de colonnes (À faire, En cours, Terminé).",
    tags: ["HTML", "JavaScript", "PgSQL"],
    images: [
      { src: "img/projets/kanban1.png", caption: "Vue générale du tableau" },
      { src: "img/projets/kanban2.png", caption: "Ajout d'une tâche" }
    ]
  },
  {
    emoji: "🎆",
    bg: "linear-gradient(135deg,#6e47007a,#86650c7a)",
    title: "Projet Pyrofètes",
    date: "Octobre – Décembre 2025 · BTS SIO 2e année",
    desc: "Gestion des différents acteurs de Pyrofètes : création d'une API RESTful en C# et d'un front-end Angular permettant de gérer les clients, les prestataires et les différentes opportunités.",
    tags: ["C#", "API RESTful", "Angular"],
    images: [
      { src: "img/projets/pyro1.png", caption: "Dashboard principal" },
      { src: "img/projets/pyro2.png", caption: "Gestion des intervenants" }
    ]
  },
  {
    emoji: "🗣️",
    bg: "linear-gradient(135deg,#2a1a1a71,#3d1f1f73)",
    title: "Application mobile de discussion chiffrée",
    date: "Mars – Mai 2026 · BTS SIO 2e année",
    desc: "Développement d'une application mobile permettant des discussions chiffrées entre membres et par groupes. API RESTful en C#, front-end Angular transformé en application native Android via Capacitor.",
    tags: ["C#", "API RESTful", "Angular", "Capacitor"],
    images: [
      { src: "img/projets/chat1.png", caption: "Liste des conversations" },
      { src: "img/projets/chat2.png", caption: "Vue d'une discussion chiffrée" }
    ]
  },
  {
    emoji: "⛓",
    bg: "linear-gradient(135deg,#241a2a71,#341f3d73)",
    title: "Application de logs d'erreurs",
    date: "Mai - Juin 2025 · Stage de première année",
    desc: "Amélioration d'une application de logs d'erreurs afin d'y ajouter dese pistes de résolutions via un tableau excel externe stocké dans les cloud de l'entreprise.",
    tags: ["Java", "JavaScript", "Git"],
    images: [
      { src: "img/projets/stage1-1.png", caption: "Vue globale avant modification" },
      { src: "img/projets/stage1-2.png", caption: "Vue globale après modification" }
    ]
  },
  {
    emoji: "🚪",
    bg: "linear-gradient(135deg,#292a1a75,#3d381f79)",
    title: "OnBoarding / OffBoarding",
    date: "Janvier – Février 2026 · Stage de deuxième année",
    desc: "Développement de 3 projets C# .NET 9 en collaboration avec un autre stagiaire. Ces applications automatisent la préparation à l'arrivée et au départ des agents : déplacement de données d'une API à un DataLake puis de ce dernier vers un DataWareHouse, le dernier projet prépare les différentes actions qui seront effectuées lors de l'arrivée/départ de l'employé/prestataire.",
    tags: ["C#", ".NET 9", "HTTP Client", "xUnit", "FluentAssertions", "FakeItEasy"],
    images: [
      { src: "img/projets/stage2-1", caption: "Vue globale premier projet" },
      { src: "img/projets/stage2-2", caption: "Vue globale deuxième projet" },
      { src: "img/projets/stage2-3", caption: "Vue globale troisième projet" },
      { src: "img/projets/stage2-4", caption: "Vue globale tests" }
    ]
  }
  
];

  document.querySelectorAll(".projet-card").forEach(function(card) {
    card.addEventListener("click", function() {
      const i = parseInt(this.getAttribute("data-projet"));
      const p = projetsData[i];

      document.getElementById("projetThumb").style.background = p.bg;
      document.getElementById("projetThumb").textContent = p.emoji;
      document.getElementById("projetTitle").textContent = p.title;
      document.getElementById("projetDate").textContent = p.date;
      document.getElementById("projetDesc").textContent = p.desc;
      document.getElementById("projetTags").innerHTML = p.tags.map(function(t) {
        return '<span class="ptag">' + t + "</span>";
      }).join("");

      // Galerie d'images
      const galerie = document.getElementById("projetGalerie");
      galerie.innerHTML = "";
      p.images.forEach(function(img) {
        galerie.innerHTML += `
          <div class="galerie-item">
            <img src="${img.src}" alt="${img.caption}" />
            <span class="galerie-caption">${img.caption}</span>
          </div>`;
      });

      document.getElementById("projetOverlay").classList.add("open");
    });
  });

  const closeBtn = document.getElementById("projetCloseBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      document.getElementById("projetOverlay").classList.remove("open");
    });
  }

  const overlay = document.getElementById("projetOverlay");
  if (overlay) {
    overlay.addEventListener("click", function(e) {
      if (e.target === overlay) overlay.classList.remove("open");
    });
  }

});