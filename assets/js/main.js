const library = {
    catalog: {
        label: "Catalog",
        items: [
            ["Guangzhou ONI Shopfitting Limited", "assets/pdf/GUANGZHOU_ONI_SHOPFITTING_LIMITED.pdf", "oni company.webp"],
            ["ONI Restaurant Furniture Catalog", "assets/pdf/ONI_Restaurant_Furniture_Catalog.pdf", "restaurant-cover.webp"],
            ["ONI Shopfitting Clothing Shop Display Catalog", "assets/pdf/ONI_Clothing_Display_Catalog.pdf", "clothing-cover.webp"],
            ["ONI Optical Shop Display Catalog", "assets/pdf/ONI_Optical_Shop_Display_Catalog.pdf", "optical-cover.webp"],
            ["ONI Pharmacy Shop Display Catalog", "assets/pdf/ONI_Pharmacy_Shop_Display_Catalog.pdf", "pharmacy-cover.webp"],
            ["ONI Cell Phone Kiosk Catalog", "assets/pdf/ONI_Cell_Phone_Kiosk_Catalog.pdf", "phone-kiosk-cover.webp"],
            ["ONI Cell Phone Cabinet Product Catalog", "assets/pdf/ONI_Phone_Cabinet_Catalog.pdf", "phone-cabinet-cover.webp"],
            ["ONI Cosmetics & Perfume Display Cabinet Catalog", "assets/pdf/ONI_Cosmetics_Perfume_Display_Catalog.pdf", "cosmetics-cover.webp"],
            ["ONI Coffee Shop Display Catalog", "assets/pdf/ONI_Coffee_Shop_Display_Catalog.pdf", "coffee-cover.webp"],
            ["ONI Watch Display Cabinet Catalog", "assets/pdf/ONI_Luxury_Watch_Display_Solutions_Catalog.pdf", "watch-cover.webp"],
            ["ONI Jewelry Showcase Catalog", "assets/pdf/ONI_jewelry_showcase_catalog.pdf", "custom jewelry showcases.webp"],
            ["ONI Duty Free Project Catalog", "assets/pdf/ONI_Airport_Duty_Free_Project_Portfolio_with_Factory_Cases.pdf", "dury free.webp"],
            ["ONI Cinema & Entertainment Retail Fixture Solutions Catalog", "assets/pdf/ONI_Cinema&Entertainment_Retail_Fixture_Solutions.pdf", "cinema&entertainment.webp"],
            ["ONI Wig Shop Display Catalog", "assets/pdf/ONI_Shopfitting_Retail_Display_Solutions_for_Wig_Shops.pdf", "win store.webp"],
            ["ONI Dessert Shop Display Catalog", "assets/pdf/ONI_Shopfitting_Retail_Display_Solutions_for_Dessert_Shops.pdf", "dessert store.webp"],
            ["ONI Mattress & Bedding Retail Portfolio Catalog", "assets/pdf/Mattress&BeddingI_RetailI_Portfolio1.pdf", "Mattress & Bedding Retail Portfolio.webp"],   
            ["ONI Southeast Asia Retail Project Portfolio", "assets/pdf/ONI_Southeast_Asia_Retail_Project_Portfolio.pdf", "Southeast_Asia_Retail_Project_Portfolio"],         
            ["ONI Luxury Production Project Case", "assets/pdf/ONI_Luxry_Production_Project_Case.pdf", "luxry production line project case.webp"]
        ]
    },
    documents: {
        label: "Documents",
        items: [
            ["What to Prepare for Store Design & Fixture Production", "assets/pdf/What_to_prepare_for_Store_Design&Fixture_Production.pdf", "Store Design & Fixture Production.webp"],
            ["What ONI Do for Retailers 2026", "assets/pdf/What_ONI_Do_for_Retailers_2026.pdf", "What ONI Do for Retailers 2026.webp"],
            ["Guangzhou ONI Shop Design Price List", "assets/pdf/Guangzhou_ONI_Shop_Design_Price_List.pdf", "Shop Design.webp"],
            ["ONI Commercial Space Design Pricing Guide", "assets/pdf/ONI_Commercial_Space_Design_Pricing_Guide.pdf", "ONI Commercial Space Design Pricing Guide.webp"],
            ["ONI Final Drawing and Material Approval Notice", "assets/pdf/ONI_Final_Drawing_and_Material_Approval_Notice.pdf", "ONI_Final_Drawing_and_Material_Approval_Notice.webp"],
            ["ONI Wood Veneer Melamine HPL Edge Comparison", "assets/pdf/ONI_Wood_Veneer_Melamine_HPL_Edge_Comparison.pdf", "WOOD_VENEER_MELAMINE & HPL"]
        ]
    },
    resources: {
        label: "Resources",
        items: [
            ["CICI Business card", "#", "CICI Business card.jpg", "image"],
            ["Olivia Business card", "#", "Olivia Business card.jpg", "image"],
            ["Alice Business card", "#", "Alice Business card.jpg", "image"],
            ["Rechel Business card", "#", "Rechel Business card.jpg", "image"]
        ]
    },
    material: {
        label: "Material",
        items: [
            ["ONI Wood Grain · Color Chart Catalog", "assets/pdf/ONI_Wood_Grain·Color_Chart_catalog.pdf", "wood grain·color chart.webp"]
        ]
    }
};

const lightboxStyles = document.createElement("link");
lightboxStyles.rel = "stylesheet";
lightboxStyles.href = "assets/css/lightbox.css";
document.head.append(lightboxStyles);

const lightbox = document.createElement("dialog");
lightbox.className = "image-lightbox";
lightbox.setAttribute("aria-labelledby", "image-lightbox-caption");
lightbox.innerHTML = `
    <div class="image-lightbox-content">
        <button class="image-lightbox-close" type="button" aria-label="Close image preview">&#215;</button>
        <img class="image-lightbox-image" alt="">
        <p class="image-lightbox-caption" id="image-lightbox-caption"></p>
    </div>
`;
document.body.append(lightbox);

const lightboxImage = lightbox.querySelector(".image-lightbox-image");
const lightboxCaption = lightbox.querySelector(".image-lightbox-caption");
const lightboxClose = lightbox.querySelector(".image-lightbox-close");
const tabs = [...document.querySelectorAll(".resource-tab")];
const grid = document.querySelector("#catalog-grid");
const title = document.querySelector("#category-title");
const resultCount = document.querySelector("#result-count");

function openImagePreview(src, label) {
    lightboxImage.src = src;
    lightboxImage.alt = label;
    lightboxCaption.textContent = label;
    document.body.classList.add("lightbox-open");
    lightbox.showModal();
}

function closeImagePreview() {
    lightbox.close();
}

function renderCategory(category) {
    const section = library[category] || library.catalog;

    tabs.forEach(tab => {
        const active = tab.dataset.category === category;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
    });

    title.textContent = section.label;
    resultCount.textContent = section.items.length;
    grid.setAttribute("aria-labelledby", `tab-${category}`);
    grid.innerHTML = section.items.map(item => {
        const imagePath = `assets/images/${item[2]}`;
        const isImagePreview = item[3] === "image";
        const coverControl = isImagePreview
            ? `<button class="cover-link image-preview-trigger" type="button" data-image-src="${imagePath}" data-image-label="${item[0]}" aria-label="Enlarge ${item[0]}">
                <span class="cover"><img src="${imagePath}" alt="${item[0]}"></span>
            </button>`
            : `<a class="cover-link" target="_blank" rel="noopener noreferrer" href="${item[1]}" aria-label="Open ${item[0]}">
                <span class="cover"><img src="${imagePath}" alt="${item[0]} cover"></span>
            </a>`;

        return `
            <article class="catalog-card">
                ${coverControl}
                <div class="catalog-info">
                    <h2>${item[0]}</h2>
                    <p class="year">2025</p>
                    <a class="view-btn" target="_blank" rel="noopener noreferrer" href="https://www.onidisplay.com/contact/">Download <span aria-hidden="true">&#8595;</span></a>
                </div>
            </article>
        `;
    }).join("");
}

grid.addEventListener("click", event => {
    const trigger = event.target.closest(".image-preview-trigger");
    if (!trigger) return;
    openImagePreview(trigger.dataset.imageSrc, trigger.dataset.imageLabel);
});

lightboxClose.addEventListener("click", closeImagePreview);
lightbox.addEventListener("click", event => {
    if (event.target === lightbox) closeImagePreview();
});
lightbox.addEventListener("close", () => {
    document.body.classList.remove("lightbox-open");
    lightboxImage.removeAttribute("src");
});

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => renderCategory(tab.dataset.category));
    tab.addEventListener("keydown", event => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        let nextIndex = index;
        if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        tabs[nextIndex].focus();
        renderCategory(tabs[nextIndex].dataset.category);
    });
});

const requestedCategory = new URLSearchParams(window.location.search).get("tab");
renderCategory(library[requestedCategory] ? requestedCategory : "catalog");
