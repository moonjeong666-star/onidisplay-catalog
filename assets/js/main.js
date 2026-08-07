const catalogs=[
["ONI Restaurant Furniture Catalog","assets/pdf/ONI_Restaurant_Furniture_Catalog.pdf","restaurant-cover.jpg"],
["ONI Shopfitting Clothing Shop Display Catalog","assets/pdf/ONI_Clothing_Display_Catalog.pdf","clothing-cover.jpg"],
["ONI Optical Shop Display Catalog","assets/pdf/ONI_Optical_Shop_Display_Catalog.pdf","optical-cover.jpg"],
["ONI Pharmacy Shop Display Catalog","assets/pdf/ONI_Pharmacy_Shop_Display_Catalog.pdf","pharmacy-cover.jpg"],
["ONI Cell Phone Kiosk Catalog","assets/pdf/ONI_Cell_Phone_Kiosk_Catalog.pdf","phone-kiosk-cover.jpg"],
["ONI Cell Phone Cabinet Product Catalog","assets/pdf/ONI_Phone_Cabinet_Catalog.pdf","phone-cabinet-cover.jpg"],
["ONI Cosmetics & Perfume Display Cabinet Catalog","assets/pdf/ONI_Cosmetics_Perfume_Display_Catalog.pdf","cosmetics-cover.jpg"],
["ONI Coffee Shop Display Catalog","assets/pdf/ONI_Coffee_Shop_Display_Catalog.pdf","coffee-cover.jpg"],
["ONI Watch Display Cabinet Catalog","assets/pdf/ONI_Luxury_Watch_Display_Solutions_Catalog.pdf","watch-cover.jpg"]
];

const grid=document.querySelector(".catalog-grid");

catalogs.forEach(item=>{
grid.innerHTML+=`
<article class="catalog-card">
<div class="cover">
<img src="assets/images/${item[2]}" alt="${item[0]}">
</div>
<div class="year">2025</div>
<h2>${item[0]}</h2>
<a class="view-btn" target="_blank" rel="noopener noreferrer" href="${item[1]}">View Catalog</a>
</article>`;
});
