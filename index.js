const loadCats = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((cats) => displayCats(cats.categories));
};

const removeAllActive = () => {
    const allTheTreesClass = document.querySelector(".all-the-trees");

    allTheTreesClass.classList.remove("active");
}

const newFunction = () =>{
    const allTheTrees = document.getElementById("all-trees");
    allTheTrees.classList.add("active");
}


const loadTreeDetail=async(id) =>{
     const url = `https://openapi.programming-hero.com/api/plant/${id}`;
    const res =await fetch(url)
    const detail =await res.json()
    
    displayTreeDetail(detail.plants);
    
}

                           // Functions for the MODAL...



const displayTreeDetail =(tree) =>{
   
    const treeModalBox = document.getElementById("tree-description-box");
    treeModalBox.innerHTML = `   <h2 class="text-3xl font-semibold">${tree.name}</h2>
       <span class="Text-2xl">It is a</span> <span class="text-xl font-semibold">${tree.category}</span>
       <p class="text-xl text-gray-600 my-6 text-justify">${tree.description}</p>
       <span class="text-2xl font-semibold">Price:</span> <span class="text-2xl">৳</span><span class="text-2xl font-semibold">${tree.price}</span>`
       
    
    
    document.getElementById("tree_modal").showModal();
}



const loadAllTrees = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((plants) => {
      removeActive();
    displayAllTrees(plants.plants);
    });
};


                           
const displayAllTrees = (allTrees) => {
  const plantCardContainer = document.getElementById("plant-card-container");
  plantCardContainer.innerHTML = "";

  allTrees.forEach((oneTree) => {
    const plantCardDiv = document.createElement("div");

    plantCardDiv.innerHTML = `
        <div class="bg-white p-4 h-[490px] md:h-[470px] rounded-xl">
            
            <img class="rounded-xl h-[250px] md:h-[185px] w-full" src="${oneTree.image}" alt="">
            <h4 class="text-lg font-bold my-3 hover:cursor-pointer">"${oneTree.name}"</h4>
            <p class="text-sm text-gray-600 w-full leading-[20px] md:leading-[20px]">"${oneTree.description}"</p>

            <div class="flex justify-between items-center my-3">
              <div class="tree-type font-semibold text-[#15803D] bg-[#15803D30] px-4 py-2 rounded-3xl">"${oneTree.category}"</div>
              <p class="font-bold"><span class="text-[15px] font-extrabold">৳</span><span>${oneTree.price}</span></p>
            </div>
            
            <button class="text-white bg-[#15803D] w-full h-[43px] rounded-3xl hover:cursor-pointer">Add to Cart</button>
          </div>
    `;
    plantCardContainer.append(plantCardDiv);
  });
};


const removeActive = () => {
  const clickCategoryClass = document.querySelectorAll(".click-category");
  clickCategoryClass.forEach((oneCategoryClass) => {
    oneCategoryClass.classList.remove("active");
    

  });
};


const loadCategoriesTrees = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      removeAllActive();
        const clickCategory = document.getElementById(`click-category-${id}`);
      clickCategory.classList.add("active");
      displayCategoriesTrees(data.plants);
      
      
      
    });
};

const displayCategoriesTrees = (trees) => {
  const plantCardContainer = document.getElementById("plant-card-container");
  plantCardContainer.innerHTML = "";

  trees.forEach((tree) => {
    const plantCardDiv = document.createElement("div");

    plantCardDiv.innerHTML = `
        <div class="bg-white p-4 h-[490px] md:h-[456px] rounded-xl">

            <img class="rounded-xl h-[250px] md:h-[185px] w-full" src="${tree.image}" alt="">
            <h4 id="tree-detail" onclick="loadTreeDetail(${tree.id})" class="text-lg font-bold my-3 hover:cursor-pointer">"${tree.name}"</h4>
            <p class="text-sm text-gray-600 w-full leading-[20px] md:leading-[20px] text-justify md:text-balance">"${tree.description}"</p>

            <div class="flex justify-between items-center my-3">
              <div class="tree-type font-semibold text-[#15803D] bg-[#15803D30] px-4 py-2 rounded-3xl">"${tree.category}"</div>
              <p class="font-bold"><span class="text-[15px] font-extrabold">৳</span><span>${tree.price}</span></p>
            </div>
            <button class="text-white bg-[#15803D] w-full h-[43px] rounded-3xl hover:cursor-pointer">Add to Cart</button>
          </div>
    `;

    plantCardContainer.append(plantCardDiv);
  });
};

const displayCats = (allCategories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  for (const oneCategory of allCategories) {
    const catDiv = document.createElement("div");
    catDiv.innerHTML = `
      <div id="click-category-${oneCategory.id}" onclick="loadCategoriesTrees(${oneCategory.id})" class="click-category text-black w-full text-2xl rounded-xl pl-3 py-2 hover:bg-[#15803D90] hover:text-white hover:cursor-pointer ">${oneCategory.category_name}</div>
    `;
    categoryContainer.append(catDiv);
  }
};

loadCats();
loadAllTrees();
