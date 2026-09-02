// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#1d160e");
  tg.setBackgroundColor("#090807");

  // --- CONFIGURATION DES LIENS DE CONTACT L'ÉPICIER ---
  const contactLinks = [
    {
      name: "TELEGRAM PRINCIPAL ✈️",
      url: "https://t.me/LepicierV3",
      icon: "#icon-telegram",
      id: "telegram-main",
      className: "telegram-main",
      text: "TELEGRAM PRINCIPAL ✈️",
    },
    {
      name: "POTATO 🥔",
      url: "https://tutuduanyu.org/lepicierconnection2",
      icon: "#icon-potato",
      id: "potato-main",
      className: "potato-main",
      text: "POTATO 🥔",
    },
  ];

  // --- DONNÉES DE L'APPLICATION L'ÉPICIER ---
  const appData = [
    {
      id: "WEED",
      name: "🍀 WEED",
      type: "Weed",
      quality: "🍀 WEED",
      image: "CategWeed.png",
      farms: [
         {
          id: "CALI_US",
          name: "🇺🇸 CALI US",
          badgeText: "Cali US",
          products: [
             {
              id: "Exotik Lemon 🍋🌴",
              flag: "🇺🇸",
              name: "Exotik Lemon 🍋🌴",
              farm: "CALI USA MIDSHELF 🇺🇸",
              type: "Mousseux",
              image: "ProductEL.jpg",
              video: "VideoEL.mp4",
              description: "",
              tarifs: [
                { weight: "2G", price: 30.0 },
                { weight: "5G", price: 60.0 },
                { weight: "10G", price: 100.0 },
                { weight: "20G", price: 180.0 },
                { weight: "50G", price: 360.0 },
                { weight: "100G", price: 680.0 },
              ],
            },
          ],
        },
        /* {
          id: "CALI_ESPAGNOL",
          name: "🇪🇸 CALI ESPAGNOL",
          badgeText: "Cali Espagne",
          products: [],
        },
        {
          id: "CALI_US",
          name: "🇺🇸 CALI US",
          badgeText: "Cali US",
          products: [],
        },
        {
          id: "AMNESIA",
          name: "🌿 AMNESIA",
          badgeText: "Amnesia",
          products: [],
        }, */
      ],
    },
    {
      id: "HASH",
      name: "🍫 HASH",
      type: "Hash",
      quality: "🍫 HASH",
      image: "CategHash.png",
      farms: [
        {
          id: "MOUSSEUX",
          name: "🧼 MOUSSEUX",
          badgeText: "Mousseux",
          products: [
            {
              id: "Moussflix 🎥🍿",
              flag: "🇺🇸",
              name: "Moussflix 🎥🍿",
              farm: "JAUNE MOUSSEUX 🇲🇦🧽",
              type: "Mousseux",
              image: "ProductM.jpg",
              video: "VideoM.mp4",
              description: "",
              tarifs: [
                { weight: "4G", price: 20.0 },
                { weight: "10G", price: 40.0 },
                { weight: "20G", price: 80.0 },
                { weight: "50G", price: 160.0 },
              ],
            },
          ],
        },
        {
          id: "DRY",
          name: "💎 DRY",
          badgeText: "Dry",
          products: [
            {
              id: "Black Orange 🍊",
              flag: "🇺🇸",
              name: "Black Orange 🍊",
              farm: "NO FARM 🫁",
              type: "Dry",
              image: "ProductBO.jpg",
              video: "VideoBO.mp4",
              description: "DRY NO FARM 90/120u👨🏽‍🌾",
              tarifs: [
                { weight: "2G", price: 20.0 },
                { weight: "5G", price: 40.0 },
                { weight: "10G", price: 60.0 },
                { weight: "25G", price: 130.0 },
                { weight: "50G", price: 220.0 },
                { weight: "100G", price: 410.0 },
              ],
            },
            {
              id: "Oreoz 🥛🍪",
              flag: "🇺🇸",
              name: "Oreoz 🥛🍪",
              farm: "HASH FORCE ONE 🇲🇦",
              type: "Dry",
              image: "ProductO.jpg",
              video: "VideoO.mp4",
              description: "70/130u 🧨",
              tarifs: [
                { weight: "2G", price: 20.0 },
                { weight: "5G", price: 40.0 },
                { weight: "10G", price: 70.0 },
                { weight: "25G", price: 140.0 },
                { weight: "50G", price: 240.0 },
                { weight: "100G", price: 430.0 },
              ],
            },
          ],
        },
        {
          id: "STATIC",
          name: "🔮 STATIC",
          badgeText: "Static",
          products: [
            {
              id: "Gelato 28",
              flag: "🇺🇸",
              name: "Gelato 2️⃣8️⃣",
              farm: "BBM FARM ⚡️🐦‍🔥",
              type: "Static",
              image: "ProductG.jpg",
              video: "VideoG.mp4",
              description: "STATIK BBM FARM 73u ⚡️🐦‍🔥",
              tarifs: [
                { weight: "2G", price: 20.0 },
                { weight: "5G", price: 40.0 },
                { weight: "10G", price: 70.0 },
                { weight: "25G", price: 140.0 },
                { weight: "50G", price: 240.0 },
                { weight: "100G", price: 430.0 },
              ],
            },
            {
              id: "Cherry Banana 🍒🍌",
              flag: "🇺🇸",
              name: "Cherry Banana 🍒🍌",
              farm: "BBM FARM ⚡️🐦‍🔥",
              type: "Static",
              image: "ProductCB.jpg",
              video: "VideoCB.mp4",
              description: "STATIK BBM FARM 73u ⚡️🐦‍🔥",
              tarifs: [
                { weight: "2G", price: 20.0 },
                { weight: "5G", price: 40.0 },
                { weight: "10G", price: 70.0 },
                { weight: "25G", price: 140.0 },
                { weight: "50G", price: 240.0 },
                { weight: "100G", price: 430.0 },
              ],
            },
            {
              id: "Mimosa Jealousy",
              flag: "🇺🇸",
              name: "Mimosa Jealousy ⚛️",
              farm: "BBM FARM ⚡️🐦‍🔥",
              type: "Static",
              image: "ProductMJ.jpg",
              video: "VideoMJ.mp4",
              description: "STATIK BBM FARM 73u ⚡️🐦‍🔥",
              tarifs: [
                { weight: "2G", price: 20.0 },
                { weight: "5G", price: 40.0 },
                { weight: "10G", price: 70.0 },
                { weight: "25G", price: 140.0 },
                { weight: "50G", price: 240.0 },
                { weight: "100G", price: 430.0 },
              ],
            },
          ],
        },
        {
          id: "FROZEN",
          name: "🧊 FROZEN",
          badgeText: "Frozen",
          products: [
            {
              id: "Green Crack 🌴🥝",
              flag: "🇺🇸",
              name: "Green Crack 🌴🥝",
              farm: "NO FARM 🫁",
              type: "Static",
              image: "ProductGC.jpg",
              video: "VideoGC.mp4",
              description: "FROZEN NO FARM 120u 🐍🫁",
              tarifs: [
                { weight: "1.5G", price: 20.0 },
                { weight: "5G", price: 50.0 },
                { weight: "10G", price: 80.0 },
                { weight: "20G", price: 150.0 },
                { weight: "50G", price: 270.0 },
                { weight: "100G", price: 520.0 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "FETES",
      name: "🎉 FÊTES",
      type: "Fêtes",
      quality: "🎉 FÊTES",
      image: "CategFete.png",
      products: [
         {
              id: "PILLS ROLLS ROYCE 🍬",
              flag: "🇧🇴",
              name: "PILLS ROLLS ROYCE 🍬",
              farm: "NO FARM 🫁",
              type: "Static",
              image: "ProductRR.jpg",
              video: "VideoRR.mp4",
              description: "",
              tarifs: [
                { weight: "1u", price: 10.0 },
                { weight: "3u", price: 20.0 },
                { weight: "5u", price: 30.0 },
                { weight: "10u", price: 50.0 },
                { weight: "50u", price: 170.0 },
                { weight: "100u", price: 320.0 },
              ],
            },
         {
              id: "COCAÏNE 🇧🇴",
              flag: "🇧🇴",
              name: "COCAÏNE 🇧🇴",
              farm: "NO FARM 🫁",
              type: "Static",
              image: "ProductC.jpg",
              video: "VideoC.mp4",
              description: "",
              tarifs: [
                { weight: "1G", price: 60.0 },
                { weight: "2G", price: 100.0 },
                { weight: "3G", price: 140.0 },
                { weight: "5G", price: 200.0 },
                { weight: "10G", price: 360.0 },
              ],
            },
      ],
    },
  ];

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories";
  let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
  let currentFarmId = null; // Garde en mémoire la farm sélectionnée
  let appliedPromo = null; // Pour suivre le code promo
  let paymentMethod = "Espèce"; // Méthode de paiement par défaut

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {
    ACTUPLUG33: {
      type: "fixed", // 'percent' (pourcentage) ou 'fixed' (fixe)
      value: 10, // 20%
      appliesTo: "eligible", // 'eligible' (articles marqués) ou 'all' (tout le panier)
    },
    /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
    // Ajoute d'autres codes ici

    // ADD CUMULABLE FONCTION POUR PLUTARD
  };

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");

  const filterContainer = document.querySelector(".filters");

  // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;
  // --- FIN NOUVEAUX SÉLECTEURS ---

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID (Version Correcte) ---
  function getProductById(productId) {
    for (const category of appData) {
      // Cas 1 : La catégorie a des produits en direct (comme ta nouvelle structure Weed)
      if (category.products) {
        const product = category.products.find((p) => p.id === productId);
        if (product) return product;
      }

      // Cas 2 : La catégorie a des sous-catégories/farms (comme Hash)
      if (category.farms) {
        for (const farm of category.farms) {
          if (farm.products) {
            const product = farm.products.find((p) => p.id === productId);
            if (product) return product;
          }
        }
      }
    }
    return undefined;
  }

  // Récupère tous les produits, quelle que soit leur ancienne catégorie.
  function getAllProducts() {
    return appData.flatMap((category) => {
      const directProducts = Array.isArray(category.products)
        ? category.products
        : [];
      const farmProducts = Array.isArray(category.farms)
        ? category.farms.flatMap((farm) =>
            Array.isArray(farm.products) ? farm.products : [],
          )
        : [];

      return [...directProducts, ...farmProducts];
    });
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
    pages.forEach((p) => p.classList.remove("active"));
    // S'assure que la page existe avant de l'activer
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info"); // On ajoute l'info
    const contactNav = document.getElementById("nav-contact");

    // On reset tout
    homeNav.classList.remove("active");
    infoNav.classList.remove("active");
    contactNav.classList.remove("active");

    // On active le bon
    if (pageId === "page-contact") {
      contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      infoNav.classList.add("active");
    } else {
      // Pour page-home, page-produit, panier, etc.
      homeNav.classList.add("active");
    }
  }

  // --- LOGIQUE D'AFFICHAGE ---

  // --- MODIFIÉ ( sans sous categorie ): renderHomePage ---

  // --- NOUVELLE FONCTION renderFarmList (Version Boutons) ---
  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune sous-catégorie disponible.</p>';
      return;
    }

    // 1. Créer un conteneur pour les boutons
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "sub-categories-container";

    farms.forEach((farm) => {
      // 2. Au lieu d'une 'div.farm-card', on crée un 'button.sub-category-btn'
      const button = document.createElement("button");
      button.className = "sub-category-btn";
      button.dataset.farmId = farm.id; // Important pour le clic

      if (farm.clickable === false) {
        button.style.opacity = "0.6";
        button.style.cursor = "not-allowed";
      }

      const productCount = farm.products.length;
      // Le texte du badge (ex: "5 produits" ou le texte personnalisé)
      const badgeTextContent =
        productCount > 0
          ? `${productCount} produit${productCount > 1 ? "s" : ""}`
          : farm.badgeText || "";

      // 3. Le contenu du bouton : juste le nom et le badge (plus d'image géante)
      button.innerHTML = `
            <span>${farm.name}</span>
            ${badgeTextContent ? `<span class="sub-btn-badge">${badgeTextContent}</span>` : ""}
        `;

      // Ajoute le bouton au conteneur
      buttonsContainer.appendChild(button);
    });

    // Ajoute le conteneur à la page
    productListContainer.appendChild(buttonsContainer);
  }

  // --- NOUVELLE FONCTION ---
  // Affiche la liste des FARMS pour une catégorie
  /*  function renderFarmList(categoryId) {
         const category = appData.find(c => c.id === categoryId);
         if (!category) {
             productListContainer.innerHTML = '<p class="no-results">Catégorie non trouvée.</p>';
             return;
         }
 
         const farms = category.farms; // Pas de filtres ici pour l'instant
 
         productListContainer.innerHTML = '';
         if (farms.length === 0) {
             productListContainer.innerHTML = '<p class="no-results">Aucune farm trouvée pour cette catégorie.</p>';
             return;
         }
 
         farms.forEach(farm => {
             const card = document.createElement('div');
             card.className = 'farm-card'; // NOUVELLE CLASSE
             card.dataset.farmId = farm.id; // DATASET IMPORTANT
 
             if (farm.clickable === false) {
                 card.classList.add('unclickable');
             }
 
             const productCount = farm.products.length;
 
             let badgeHTML = '';
             if (farm.badgeText) {
                 badgeHTML = `<div class="card-badge">${farm.badgeText}</div>`;
             }
 
             card.innerHTML = `
             <div class="card-badge">${productCount > 0 ? productCount + ' produit' + (productCount > 1 ? 's' : '') : farm.badgeText || ''}</div>
             
             <img src="${farm.image}" alt="${farm.name}">
            
         `;
             productListContainer.appendChild(card);
         });
     } */

  function renderHomePage() {
    filterContainer.style.display = "flex";

    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();

    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    if (currentView === "categories") {
      renderCategoryList();
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "none";
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";
    } else if (currentView === "farms") {
      renderFarmList(currentCategoryId);
      searchFilterWrapper.style.display = "none";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "none";
      productListContainer.style.gridTemplateColumns = "repeat(1, 1fr)";

      const category = appData.find((c) => c.id === currentCategoryId);
      const backButton = document.createElement("button");
      backButton.className = "back-to-categories-btn";
      backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;
      backButton.style.cssText = `
                background: linear-gradient(180deg, black, transparent);
                border-bottom: 2px solid #c99b57;
                border-top: none;
                border-left: none;
                border-right: none;
                color: white;
                padding: 10px 15px;
                border-radius: 10px;
                font-size: 1.1rem;
                font-weight: 700;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
                width: 100%;
                box-sizing: border-box;
                margin-top: 3vh;
                font-family: Copperplate;
            `;
      filterContainer.prepend(backButton);
    } else if (currentView === "products") {
      renderProductList(currentCategoryId);
      searchFilterWrapper.style.display = "flex";
      farmFilterWrapper.style.display = "none";
      qualityFilterWrapper.style.display = "none";
      productListContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
    }
  }

  function renderAllProducts() {
    const searchTerm = currentFilters.searchTerm.trim().toLowerCase();

    const filteredProducts = getAllProducts().filter((product) => {
      const searchableText = [
        product.name,
        product.farm,
        product.type,
        product.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchTerm);
    });

    productListContainer.innerHTML = "";

    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      if (product.clickable === false) {
        card.classList.add("unclickable");
      }

      const flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      const firstPrice =
        Array.isArray(product.tarifs) && product.tarifs.length > 0
          ? `Dès ${Number(product.tarifs[0].price).toFixed(2)}€`
          : "Prix sur demande";

      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm || product.type || ""}</div>
                    <div class="price">${firstPrice}</div>
                </div>
            `;

      productListContainer.appendChild(card);
    });
  }

  // --- MODIFIÉ : renderCategoryList ---
  // Prend en compte le filtre qualité
  function renderCategoryList() {
    const filteredCategories = appData.filter((category) => {
      const searchMatch = category.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // --- AJOUT ---
      const qualityMatch =
        currentFilters.quality === "all" ||
        category.quality === currentFilters.quality;
      return searchMatch && qualityMatch;
      // --- FIN AJOUT ---
    });

    productListContainer.innerHTML = "";
    if (filteredCategories.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune catégorie ne correspond à votre recherche.</p>';
      return;
    }

    filteredCategories.forEach((category) => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.dataset.categoryId = category.id;

      card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
              
            `;
      productListContainer.appendChild(card);
    });
  }

  function renderProductList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    // --- 1. NETTOYAGE DES BOUTONS PRÉCÉDENTS ---
    // Supprime tous les boutons de retour existants dans le conteneur de filtres
    const oldBackButtons = filterContainer.querySelectorAll(
      ".back-to-categories-btn, .back-to-farms-btn",
    );
    oldBackButtons.forEach((btn) => btn.remove());

    let allProducts = [];

    // --- 2. RÉCUPÉRATION DES PRODUITS ---
    // Cas A : Produits en direct (comme ta nouvelle structure WEED)
    if (category.products) {
      allProducts = category.products;
    }
    // Cas B : Produits via sous-catégories (comme HASH)
    else if (category.farms) {
      if (currentFarmId) {
        const selectedFarm = category.farms.find((f) => f.id === currentFarmId);
        if (selectedFarm) allProducts = selectedFarm.products;
      } else {
        allProducts = category.farms.flatMap((farm) => farm.products);
      }
    }

    // --- 3. CRÉATION DU BOUTON RETOUR UNIQUE ---
    const backButton = document.createElement("button");
    // On utilise une classe cohérente pour le CSS
    backButton.className = "back-to-categories-btn";
    backButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg> ${category.name}`;

    // Application du style visuel
    backButton.style.cssText = `
            background: linear-gradient(180deg, black, transparent); 
            border-bottom: 2px solid var(--sunset-orange); 
            border-top: none; border-left: none; border-right: none;
            color: white; padding: 10px 15px; 
            border-radius: 10px; font-size: 1.1rem; 
            font-weight: 700; cursor: pointer; 
            display: flex; align-items: center; 
            gap: 10px; width: 100%; box-sizing: border-box; 
            margin-top: 3vh; font-family: Copperplate;
        `;

    filterContainer.prepend(backButton);

    // --- 4. FILTRAGE ET AFFICHAGE DES PRODUITS ---
    if (!allProducts || allProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé dans cette section.</p>';
      return;
    }

    const filteredProducts = allProducts.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch = currentFarmId
        ? true
        : currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      if (product.clickable === false) {
        card.classList.add("unclickable");
      }

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
      productListContainer.appendChild(card);
    });
  }
  // --- FONCTION MODIFIÉE POUR GÉRER LE CARROUSEL ---
  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    // 1. On récupère la zone où s'affiche l'image/vidéo
    // (Note: dans ton HTML actuel c'est une balise <video>, on va peut-être devoir la remplacer)
    const mediaContainer = document.querySelector(
      "#page-product .page-content",
    );

    // On cherche si on a déjà créé un wrapper média, sinon on nettoie le haut
    // Pour faire simple avec ton code actuel, on va reconstruire le haut de la page produit dynamiquement

    // --- CONSTRUCTION DU MÉDIA (Vidéo ou Carrousel) ---
    let mediaHTML = "";

    if (product.images && product.images.length > 0) {
      // CAS 1 : C'est un CARROUSEL (Seringue)
      const slides = product.images
        .map(
          (img) => `
            <div class="carousel-slide">
                <img src="${img}" alt="${product.name}">
            </div>
        `,
        )
        .join("");

      mediaHTML = `
            <div class="carousel-container">
                ${slides}
            </div>
            <div class="carousel-hint">↔️ Swipe pour voir les photos</div>
        `;
    } else {
      // CAS 2 : C'est une VIDÉO ou une IMAGE UNIQUE (Les autres produits)
      // On garde ta logique actuelle avec la vidéo
      mediaHTML = `
            <video class="product-video" poster="${product.image}" src="${product.video || ""}" ${product.video ? "controls" : ""}></video>
        `;
    }

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    // --- GESTION DES TARIFS ---
    let tarifsHTML = product.tarifs
      .map((tarif) => {
        // Si le texte fait plus de 10 caractères, on ajoute la classe 'text-shrink'
        const shrinkClass = tarif.weight.length > 10 ? "text-shrink" : "";

        return `
            <div class="tarif-item">
                <div class="box-tarif">
                    <div class="tarif-wieght ${shrinkClass}">${tarif.weight}</div>
                    <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
            `;
      })
      .join("");

    let descriptionHTML = "";
    if (product.description) {
      descriptionHTML = `<div class="product-description">${product.description}</div>`;
    }

    // --- ON INJECTE TOUT DANS LA PAGE ---
    // Attention : On modifie légèrement la structure HTML via JS pour insérer le média au bon endroit
    // On vide le contenu précédent pour éviter les doublons
    const pageContent = document.querySelector("#page-product .page-content");

    // On reconstruit le contenu de la page produit proprement
    pageContent.innerHTML = `
        ${mediaHTML}
        <div id="product-details-content" class="product-details">
            <div class="name">${product.name}</div>
            <div class="farm">${product.farm}</div>
            ${descriptionHTML} 
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">
                ${tarifsHTML}
            </div>
        </div>
    `;

    showPage("page-product");
  }
  // Met à jour l'affichage du panier (inchangé)
  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div class="gram" >${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
  }

  // Affiche la page de confirmation et gere les codes promo
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];

      if (promo.appliesTo === "eligible") {
        // Calcul sur les articles éligibles
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        // Calcul sur tout le panier
        discountableAmount = subTotal;
      }

      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        // 'fixed'
        discount = promo.value;
      }
    }

    // Assure que la réduc ne dépasse pas le montant
    if (discount > subTotal) {
      discount = subTotal;
    }

    const totalPrice = subTotal - discount;
    // --- Fin de la logique de calcul ---

    // Mise à jour du résumé (panier en haut)
    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    // Remplissage de la liste des articles (inchangé)
    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
             <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `,
      )
      .join("");

    // Mise à jour de l'UI Promo
    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = ""; // Reset l'input
    }

    // Mise à jour de l'UI Paiement
    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    // Mise à jour du résumé final
    const summaryContainer = document.getElementById("confirmation-summary");
    let summaryHTML = `
            <div class="summary-line">
                <span>Sous-total:</span>
                <span>${subTotal.toFixed(2)}€</span>
            </div>
        `;
    if (discount > 0) {
      summaryHTML += `
            <div class="summary-line discount">
                <span>Réduction:</span>
                <span>-${discount.toFixed(2)}€</span>
            </div>
            `;
    }
    summaryHTML += `
            <div class="summary-line total">
                <span>💰 Total final:</span>
                <span>${totalPrice.toFixed(2)}€</span>
            </div>
        `;
    summaryContainer.innerHTML = summaryHTML;

    /* const copyBtn = document.getElementById('copy-order-btn');
        const contactBtn = document.getElementById('confirm-order-button');

        // État initial: Copier = Rouge (main), Contacter = Gris (secondary/disabled)
        copyBtn.classList.add('main-action-btn');
        copyBtn.classList.remove('secondary-action-btn');

        contactBtn.classList.add('secondary-action-btn');
        contactBtn.classList.remove('main-action-btn');
        contactBtn.disabled = true; // On le re-verrouille */

    showPage("page-confirmation");
  }
  // Affiche la page de contact (inchangé)
  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  // Met à jour le compteur du panier (inchangé)
  function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll(".cart-count");
    cartCountElements.forEach((el) => {
      el.innerText = count;
      el.style.display = count > 0 ? "flex" : "none";
    });
  }

  // --- MODIFIÉ : populateFilters ---
  // Prend les données des catégories ET des produits
  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    // Ces deux sélecteurs restent dans le HTML pour ne rien casser,
    // mais ils sont masqués : l'utilisateur voit directement tous les produits.
    qualityFilter.innerHTML = '<option value="all">Tous</option>';
    farmFilter.innerHTML = '<option value="all">Toutes</option>';

    searchFilter.addEventListener("input", (event) => {
      currentFilters.searchTerm = event.target.value;
      renderHomePage();
    });
  }

  // --- NOTIFICATION (inchangé) ---
  let notificationTimeout;
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove("show");
    void notification.offsetWidth;

    notification.innerText = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  // --- LOGIQUE DU PANIER ---

  function addToCart(productId, weight, price) {
    const cartItemId = `${productId}-${weight}`;
    const existingItem = cart.find((item) => item.id === cartItemId);

    const product = getProductById(productId);

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    } else {
      cart.push({
        id: cartItemId,
        productId: productId,
        name: product.name,
        image: product.image,
        weight: weight,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }

  // updateQuantity (inchangé)
  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
    } else {
      item.totalPrice = item.quantity * item.unitPrice;
    }
    renderCart();
  }

  // --- FORMATAGE DU MESSAGE DE COMMANDE (pour gere les promo) ---
  function formatOrderMessage() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Recalcul des prix pour le message
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      let discountableAmount = 0;
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // Fin recalcul

    const date = new Date();
    const formattedDate = `${date.getDate()} ${date.toLocaleString("fr-FR", { month: "long" })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;

    let message = "NOUVELLE COMMANDE\n\n";
    message += "====================\n";
    message += "RESUME:\n";
    message += `- ${totalItems} article${totalItems > 1 ? "s" : ""} commande\n`;
    message += `- Méthode de paiement: ${paymentMethod}\n`; // AJOUT
    message += "====================\n";
    message += `DETAIL DES ARTICLES:\n`;

    cart.forEach((item) => {
      message += `\n- ${item.id}`;
      message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
      message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
      message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
    });

    message += `\n\n====================\n`;
    message += `\nSOUS-TOTAL: ${subTotal.toFixed(2)} EUR`;
    if (discount > 0) {
      message += `\nREDUCTION (${appliedPromo}): -${discount.toFixed(2)} EUR`; // AJOUT
    }
    message += `\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`; // AJOUT
    message += " \n-LIVRAISON: A convenir\n";
    message += " \n-CONTACT: Merci de confirmer cette commande\n";
    message += ` \n-Commande passee le: ${formattedDate}\n`;
    return message;
  }

  // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
  /*    function copyToClipboard(text) {
           if (navigator.clipboard) { // API moderne et sécurisée
               navigator.clipboard.writeText(text).then(() => {
                   showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                   tg.HapticFeedback.notificationOccurred('success');
               }, (err) => {
                   showNotification('❌ Erreur en copiant le message');
               });
           } else { // Ancien fallback (pour certains navigateurs)
               const textArea = document.createElement('textarea');
               textArea.value = text;
               textArea.style.position = 'fixed'; // Hors de l'écran
               document.body.appendChild(textArea);
               textArea.focus();
               textArea.select();
               try {
                   document.execCommand('copy');
                   showNotification('✅ Commande copiée ! Colle-la dans le chat.');
                   tg.HapticFeedback.notificationOccurred('success');
               } catch (err) {
                   showNotification('❌ Erreur en copiant le message');
               }
               document.body.removeChild(textArea);
           }
       }
    */
  // --- GESTION DES ÉVÉNEMENTS ---

  // Clics sur la barre de navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      // Les lignes gérant la classe 'active' ont été supprimées
      // showPage(pageId) s'en occupe maintenant.

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        currentFarmId = null;
        // On reset TOUS les filtres
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      showPage(pageId);
    });
  });

  // Clics sur le reste de la page
  document.body.addEventListener("click", function (e) {
    const target = e.target;

    if (target.closest("#copy-order-btn")) {
      let message = formatOrderMessage();
      message = message.replace(/\*/g, "");

      // --- AJOUT : Inverser les styles des boutons ---
      const copyBtn = document.getElementById("copy-order-btn");
      const contactBtn = document.getElementById("confirm-order-button");

      // Copier devient Gris (secondary)
      copyBtn.classList.remove("main-action-btn");
      copyBtn.classList.add("secondary-action-btn");

      // Contacter devient Rouge (main) et est activé
      contactBtn.classList.remove("secondary-action-btn");
      contactBtn.classList.add("main-action-btn");
      contactBtn.disabled = false; // <-- ON DÉVERROUILLE LE BOUTON
      return; // On s'arrête là
    }

    // 1. Clic sur une carte CATÉGORIE
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      const categoryId = categoryCard.dataset.categoryId;
      const category = appData.find((c) => c.id === categoryId);

      currentCategoryId = categoryId;

      // SI LA CATÉGORIE A DES PRODUITS DIRECTS (WEED)
      if (category.products) {
        currentView = "products";
      } else {
        currentView = "farms"; // POUR HASH (QUI A DES SOUS-CATÉGORIES)
      }

      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // Gère l'accordéon sur la page contact
    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      // On ferme les autres items
      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      // On ouvre/ferme l'item cliqué
      accordionItem.classList.toggle("active");
      return; // On arrête là pour ne pas déclencher d'autres clics
    }

    // 2. NOUVEAU : Clic sur une carte FARM (MIS EN COMMENTAIRE)
    /*   const farmCard = target.closest('.farm-card');
         if (farmCard) {
 
             if (farmCard.classList.contains('unclickable')) {
                 return;
             }
 
             currentView = 'products'; // On va à la vue "products"
             currentFarmId = farmCard.dataset.farmId;
             // On reset les filtres
             currentFilters.searchTerm = '';
             document.getElementById('search-filter').value = '';
             renderHomePage();
             return;
         } 
*/

    // 2. Clic sur un BOUTON SOUS-CATÉGORIE (Modifié)
    // AVANT C'ÉTAIT : const farmCard = target.closest('.farm-card');
    // MAINTENANT C'EST :
    const subCategoryBtn = target.closest(".sub-category-btn");

    if (subCategoryBtn) {
      // Si on a cliqué sur un bouton

      // Vérif si c'est cliquable (optionnel selon tes data)
      if (subCategoryBtn.style.cursor === "not-allowed") return;

      currentView = "products";
      // On récupère l'ID via le dataset du bouton
      currentFarmId = subCategoryBtn.dataset.farmId;

      // On reset les filtres
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // 3. Clic sur une carte PRODUIT
    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // Clic sur "Appliquer" le code promo
    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase(); // Mets en majuscule

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null; // Reset au cas où
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation(); // Met à jour la page de confirmation
    }

    // Clic sur "Supprimer" le code promo
    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation(); // Met à jour la page
    }

    // Clic sur un bouton de paiement
    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      // Pas besoin de rafraîchir toute la page, juste les boutons
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    // Clic sur "Ajouter au panier"
    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");
      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
      );
    }

    // Clic sur les boutons de quantité
    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    // Clic sur le bouton "fermer"
    if (target.closest(".close-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur "Continuer les achats"
    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur les boutons "retour" (des pages produits, panier...)
    if (target.closest(".back-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur le bouton du panier
    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    // Clic sur "Commander"
    if (target.closest("#checkout-button")) {
      renderConfirmation();
    }

    // Clic sur "Modifier"
    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }

    // Clic sur "Confirmer la commande" (VERSION POTATO)
    /*    if (target.closest('#confirm-order-button')) {
               // 1. Remplace 'TON_PSEUDO_POTATO' par ton VRAI pseudo Potato.
               const targetPotatoUser = 'BPDiSPENSARY';
   
               let message = formatOrderMessage();
               message = message.replace(//g, '');
               const encodedMessage = encodeURIComponent(message);
   
              // 2. On construit le lien Potato.  https://dympt.org/ - `https://potato.im/p/u/${targetPotatoUser}?text=${encodedMessage}`;
   
               // (Utilise 'p/u/' pour un compte utilisateur, ou 'p/s/' pour un bot)
               //const potatoUrl = `https://dympt.org/${targetPotatoUser}?text=${encodedMessage}`;
               const potatoUrl = `https://dympt.org/${targetPotatoUser}`;
   
               // 3. On utilise la même fonction pour ouvrir le lien
               tg.openLink(potatoUrl);
           } */

    // Clic sur "Confirmer la commande" (VERSION COPIER/COLLER - LA SEULE FIABLE)
    if (target.closest("#confirm-order-button")) {
      // 1. TON PSEUDO TELEGRAM
      const targetUsername = "LepicierV3";

      // 2. On prépare le message
      let message = formatOrderMessage();
      message = message.replace(/\*/g, ""); // On nettoie

      // 3. (Optionnel mais cool) On copie quand même dans le presse-papier en backup
      // copyToClipboard(message);

      // 4. On encode et on ouvre le lien
      const encodedMessage = encodeURIComponent(message);
      const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;

      tg.openLink(telegramUrl);
    }
  });

  // --- INITIALISATION DE L'APP ---
  function init() {
    setTimeout(() => {
      populateFilters();
      renderHomePage(); // Affiche directement tous les produits
      updateCartCount();
      showPage("page-home");
    }, 1500);
  }

  init();
});
