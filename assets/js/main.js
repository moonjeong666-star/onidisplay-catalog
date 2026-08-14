const catalogs=[
["ONI Restaurant Furniture Catalog","assets/pdf/ONI_Restaurant_Furniture_Catalog.pdf","restaurant-cover.webp"],
["ONI Shopfitting Clothing Shop Display Catalog","assets/pdf/ONI_Clothing_Display_Catalog.pdf","clothing-cover.webp"],
["ONI Optical Shop Display Catalog","assets/pdf/ONI_Optical_Shop_Display_Catalog.pdf","optical-cover.webp"],
["ONI Pharmacy Shop Display Catalog","assets/pdf/ONI_Pharmacy_Shop_Display_Catalog.pdf","pharmacy-cover.webp"],
["ONI Cell Phone Kiosk Catalog","assets/pdf/ONI_Cell_Phone_Kiosk_Catalog.pdf","phone-kiosk-cover.webp"],
["ONI Cell Phone Cabinet Product Catalog","assets/pdf/ONI_Phone_Cabinet_Catalog.pdf","phone-cabinet-cover.webp"],
["ONI Cosmetics & Perfume Display Cabinet Catalog","assets/pdf/ONI_Cosmetics_Perfume_Display_Catalog.pdf","cosmetics-cover.webp"],
["ONI Coffee Shop Display Catalog","assets/pdf/ONI_Coffee_Shop_Display_Catalog.pdf","coffee-cover.webp"],
["ONI Watch Display Cabinet Catalog","assets/pdf/ONI_Luxury_Watch_Display_Solutions_Catalog.pdf","watch-cover.webp"],
["ONI Watch Display Cabinet Catalog","assets/pdf/GUANGZHOU ONI SHOPFITTING LIMITED.pdf","oni company"],
["ONI Watch Display Cabinet Catalog","assets/pdf/ONI jewelry showcase catalog","custom jewelry showcases.webp"]
];

const grid=document.querySelector(".catalog-grid");
const resultCount=document.querySelector("#result-count");

resultCount.textContent=catalogs.length;

catalogs.forEach(item=>{
grid.insertAdjacentHTML("beforeend",`
<article class="catalog-card">
<a class="cover-link" target="_blank" rel="noopener noreferrer" href="${item[1]}" aria-label="Open ${item[0]}">
<span class="cover">
<img src="assets/images/${item[2]}" alt="${item[0]} cover">
</span>
</a>
<div class="catalog-info">
<h2>${item[0]}</h2>
<p class="year">2025</p>
<a class="view-btn" target="_blank" rel="noopener noreferrer" href="https://www.onidisplay.com/contact/">Download <span aria-hidden="true">&#8595;</span></a>
</div>
</article>`);
});
