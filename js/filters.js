const filterContainer = document.querySelector(".feature__filters");
const galleryItems = document.querySelectorAll(".feature__product");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("feature__filters-item")){

    // deactivate existing active 'filter-item'
   filterContainer.querySelector(".feature__filters-item_active").classList.remove("feature__filters-item_active");

    // activate new 'filter-item'
   event.target.classList.add("feature__filters-item_active");

   const filterValue = event.target.getAttribute("data-filter");

   galleryItems.forEach((item) =>{

      if(item.classList.contains(filterValue) || filterValue === 'all'){
       item.classList.remove("feature__product_hide");
        item.classList.add("show");
      }

      else{
       item.classList.remove("show");
       item.classList.add("feature__product_hide");
      }

    });
  }
});