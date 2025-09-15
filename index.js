const loadCats = () =>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res)=>res.json())
    .then((cats) => displayCats(cats.categories))

};


const loadAllTrees = () =>{
    console.log("hello");
    
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((res)=>res.json())
    .then((plants)=>displayAllTrees(plants.plants))
}


const displayAllTrees = (allTrees) =>{
 const plantCardContainer = document.getElementById("plant-card-container")
 plantCardContainer.innerHTML ="";

 allTrees.forEach(oneTree => {

  const plantCardDiv = document.createElement("div")

    plantCardDiv.innerHTML = `
        <div class="bg-white p-4">

            <img class="h-[185px] w-full" src="${oneTree.image}" alt="">
            <h4 class="text-lg font-bold my-3">"${oneTree.name}"</h4>
            <p class="text-sm text-gray-600 w-full h-[75px]">"${oneTree.description}"</p>

            <div class="flex justify-between items-center my-3">
              <div class="tree-type font-semibold text-[#15803D] bg-[#15803D30] px-4 py-2 rounded-3xl">"${oneTree.category}"</div>
              <p class="font-bold"><span class="text-[15px] font-extrabold">৳</span><span>${oneTree.price}</span></p>
            </div>
            <button class="text-white bg-[#15803D] w-full h-[43px] rounded-3xl hover:cursor-pointer">Add to Cart</button>
          </div>
    `
            plantCardContainer.append(plantCardDiv);
    
 });
}

const loadCategoriesTrees = (id) =>{
    console.log(id)
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
    .then((res)=>res.json())
    .then((data)=> displayCategoriesTrees(data.plants))

};


const displayCategoriesTrees = (trees) =>{
    const plantCardContainer = document.getElementById("plant-card-container");
    plantCardContainer.innerHTML = "";

    trees.forEach(tree => {
    
     const plantCardDiv = document.createElement("div")

    plantCardDiv.innerHTML = `
        <div class="bg-white p-4">

            <img class="h-[185px] w-full" src="${tree.image}" alt="">
            <h4 class="text-lg font-bold my-3">"${tree.name}"</h4>
            <p class="text-sm text-gray-600 w-full h-[75px]">"${tree.description}"</p>

            <div class="flex justify-between items-center my-3">
              <div class="tree-type font-semibold text-[#15803D] bg-[#15803D30] px-4 py-2 rounded-3xl">"${tree.category}"</div>
              <p class="font-bold"><span class="text-[15px] font-extrabold">৳</span><span>${tree.price}</span></p>
            </div>
            <button class="text-white bg-[#15803D] w-full h-[43px] rounded-3xl hover:cursor-pointer">Add to Cart</button>
          </div>
    `
    

    plantCardContainer.append(plantCardDiv);

});

};



const displayCats = (allCategories) =>{
   const categoryContainer = document.getElementById("category-container");
   categoryContainer.innerHTML = "";

   for (const oneCategory of allCategories) {
    const catDiv = document.createElement("div")
    catDiv.innerHTML = `
      <div onclick="loadCategoriesTrees('${oneCategory.id}')" class="category text-black w-full text-2xl pl-3 py-2 hover:bg-[#15803D] hover:text-white hover:cursor-pointer ">${oneCategory.category_name}</div>
    `
    categoryContainer.append(catDiv)
    
   }
}


loadCats();
loadAllTrees();






