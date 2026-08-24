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
["GUANGZHOU ONI SHOPFITTING LIMITED","assets/pdf/GUANGZHOU_ONI_SHOPFITTING_LIMITED.pdf","oni company.webp"],
["ONI jewelry showcase catalog","assets/pdf/ONI_jewelry_showcase_catalog.pdf","custom jewelry showcases.webp"],
["ONI Duty Free Project Catalog","assets/pdf/ONI_Airport_Duty_Free_Project_Portfolio_with_Factory_Cases.pdf","dury free.webp"],
["ONI Cinema & Entertainment Retail Fixture Solutions Catalog","assets/pdf/ONI_Cinema&Entertainment_Retail_Fixture_Solutions.pdf","cinema&entertainment.webp"],
["ONI Wig Shop Display Catalog","assets/pdf/ONI_Shopfitting_Retail_Display_Solutions_for_Wig_Shops.pdf","win store.webp"],
["ONI Dessert Shop Display Catalog","assets/pdf/ONI_Shopfitting_Retail_Display_Solutions_for_Dessert_Shops.pdf","dessert store.webp"],
["ONI Mattress & Bedding Retail Portfolio Catalog","assets/pdf/Mattress&BeddingI_RetailI_Portfolio1.pdf","Mattress & Bedding Retail Portfolio.webp"],
["ONI Wood Grain·Color Chart catalog","assets/pdf/ONI_Wood_Grain·Color_Chart_catalog.pdf","wood grain·color chart.webp"],
["ONI Luxry Production Project Case","assets/pdf/ONI_Luxry_Production_Project_Case.pdf","luxry production line project case.webp"],
["What to prepare for Store Design & Fixture Production","assets/pdf/What_to_prepare_for_Store_Design_&_Fixture_Production - Guangzhou_ONI_Shopfitting_2026.pdf","Store Design & Fixture Production.webp"]
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
