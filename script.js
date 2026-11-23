const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

const scrollTop = window.scrollY;

const docHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progress = (scrollTop / docHeight) * 100;

document.querySelector(".progress-fill").style.width =
progress + "%";

document.getElementById("percent").textContent =
Math.round(progress) + "%";

sections.forEach(section => {

const top = section.offsetTop - 150;
const bottom = top + section.offsetHeight;

if(scrollTop >= top && scrollTop < bottom){

links.forEach(link =>
link.classList.remove("active")
);

const active =
document.querySelector(
`a[href="#${section.id}"]`
);

if(active){
active.classList.add("active");
}
}

});

});

const steps =
document.querySelectorAll(".method-step");

const panels =
document.querySelectorAll(".method-panel");

steps.forEach(step => {

    step.addEventListener("click", () => {

        const target =
        step.dataset.target;

        steps.forEach(s =>
            s.classList.remove("active")
        );

        panels.forEach(p =>
            p.classList.remove("active")
        );

        step.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");
    });

});

const caseButtons =
document.querySelectorAll(".case-btn");

const casePanels =
document.querySelectorAll(".case-panel");

caseButtons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
        button.dataset.target;

        caseButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        casePanels.forEach(panel =>
            panel.classList.remove("active")
        );

        button.classList.add("active");

        document
            .getElementById(target)
            .classList.add("active");

    });

});


/* ==========================
MODAL MESURE
========================== */

const mesureModal = document.getElementById("mesure-modal");

function openMesureModal() {

    mesureModal.classList.add("active");
}

function closeMesureModal() {

    mesureModal.classList.remove("active");
}

mesureModal.addEventListener("click", (event) => {
    if (event.target === mesureModal) {
        closeMesureModal();
    }
});

/* ==========================
MODAL PRISES DE VUES
========================== */

const prisesModal = document.getElementById("prises-modal");

function openPrisesModal() {
    if (!prisesModal) return;
    prisesModal.classList.add("active");
}

function closePrisesModal() {
    if (!prisesModal) return;
    prisesModal.classList.remove("active");
}

if (prisesModal) {
    prisesModal.addEventListener("click", (event) => {
        if (event.target === prisesModal) {
            closePrisesModal();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && prisesModal && prisesModal.classList.contains("active")) {
        closePrisesModal();
    }
});

/* ==========================
MODAL VALISE
========================== */

const valiseModal = document.getElementById("valise-modal");

function openValiseModal() {
    if (!valiseModal) return;
    valiseModal.classList.add("active");
}

function closeValiseModal() {
    if (!valiseModal) return;
    valiseModal.classList.remove("active");
}

if (valiseModal) {
    valiseModal.addEventListener("click", (event) => {
        if (event.target === valiseModal) {
            closeValiseModal();
        }
    });
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && valiseModal && valiseModal.classList.contains("active")) {
        closeValiseModal();
    }
});

/* ==========================
MODALES PROJETS 4 À 8
========================== */

const projectModals = [
  {
    modal: document.getElementById("chwiya-modal"),
    open: () => openGenericModal("chwiya-modal"),
    close: () => closeGenericModal("chwiya-modal")
  },
  {
    modal: document.getElementById("start-fle-modal"),
    open: () => openGenericModal("start-fle-modal"),
    close: () => closeGenericModal("start-fle-modal")
  },
  {
    modal: document.getElementById("prompt-modal"),
    open: () => openGenericModal("prompt-modal"),
    close: () => closeGenericModal("prompt-modal")
  },
  {
    modal: document.getElementById("tquelgenre-modal"),
    open: () => openGenericModal("tquelgenre-modal"),
    close: () => closeGenericModal("tquelgenre-modal")
  },
  {
    modal: document.getElementById("mjc-modal"),
    open: () => openGenericModal("mjc-modal"),
    close: () => closeGenericModal("mjc-modal")
  }
];

function openGenericModal(modalId) {
  const targetModal = document.getElementById(modalId);
  if (targetModal) {
    targetModal.classList.add("active");
  }
}

function closeGenericModal(modalId) {
  const targetModal = document.getElementById(modalId);
  if (!targetModal) return;

  // Pausa vídeos <video> si estaban reproduciéndose al cerrar
  targetModal.querySelectorAll("video").forEach((vid) => vid.pause());
  targetModal.classList.remove("active");
}

function openChwiyaModal() { openGenericModal("chwiya-modal"); }
function closeChwiyaModal() { closeGenericModal("chwiya-modal"); }

function openStartFleModal() { openGenericModal("start-fle-modal"); }
function closeStartFleModal() { closeGenericModal("start-fle-modal"); }

function openPromptModal() { openGenericModal("prompt-modal"); }
function closePromptModal() { closeGenericModal("prompt-modal"); }

function openTquelgenreModal() { openGenericModal("tquelgenre-modal"); }
function closeTquelgenreModal() { closeGenericModal("tquelgenre-modal"); }

function openMjcModal() { openGenericModal("mjc-modal"); }
function closeMjcModal() { closeGenericModal("mjc-modal"); }

projectModals.forEach(({ modal, close }) => {
  if (!modal) return;

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      close();
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  projectModals.forEach(({ modal, close }) => {
    if (modal && modal.classList.contains("active")) {
      close();
    }
  });
});





const filterButtons = document.querySelectorAll('.creative-filters .filter-btn');
const creativeCards = document.querySelectorAll('.creative-grid .creative-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const selected = btn.dataset.filter;
    creativeCards.forEach((card) => {
      if (selected === 'all' || card.dataset.category === selected) {
        card.classList.remove('is-hidden');
      } else {
        card.classList.add('is-hidden');
      }
    });
  });
});

const galleryModal = document.getElementById('gallery-modal');
const galleryTitle = document.getElementById('gallery-modal-title');
const galleryTag = document.getElementById('gallery-modal-tag');
const galleryGroups = document.querySelectorAll('#gallery-modal .gallery-group');
const cardGalleryBtns = document.querySelectorAll('.card-gallery-btn');
const closeGalleryEls = document.querySelectorAll('[data-close-gallery]');

const galleryLabels = {
  aquarelle: {
    tag: 'LIVRE POUR ENFANTS',
  },
  acrylique: {
    tag: 'PEINTURE ACRYLIQUE',
    
  }
};

if (galleryModal) {
  const openGallery = (key) => {
    galleryGroups.forEach((group) => {
      group.classList.toggle('is-active', group.dataset.galleryGroup === key);
    });

    if (galleryLabels[key]) {
      galleryTag.textContent = galleryLabels[key].tag;
      galleryTitle.textContent = galleryLabels[key].title;
    }

    galleryModal.classList.add('is-open');
    galleryModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    galleryModal.classList.remove('is-open');
    galleryModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  cardGalleryBtns.forEach((btn) => {
    btn.addEventListener('click', () => openGallery(btn.dataset.gallery));
  });

  closeGalleryEls.forEach((el) => el.addEventListener('click', closeGallery));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && galleryModal.classList.contains('is-open')) {
      closeGallery();
    }
  });
}