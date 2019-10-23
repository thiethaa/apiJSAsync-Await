var btn = document.getElementById("btn").addEventListener('click', loadRecipe);
var btn1 = document.getElementById("btn1").addEventListener('click', loadRecipe1);
var btn2 = document.getElementById("btn2").addEventListener('click', loadRecipe2);

var card = document.getElementById("card");
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");



async function loadRecipe() {
    console.log('load recipe...');
    try {
      const url = "https://api.edamam.com/search?q=chicken&app_id=130a0976&app_key=be1e8fe24f4a5a6305283a7b16dda916";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
          for (let index = 0; index < data.hits.length; index++) {
            card.innerHTML += `
            <div class="card col-3 m-1 mx-auto">
              <img src="${data.hits[index].recipe.image}" class="card-img-top" alt="...">
              <div class="card-body" style="background: #E0E97F;color:black">
                <h5 class="card-title">${data.hits[index].recipe.dietLabels}</h5>
                <h3 class="card-text">${data.hits[index].recipe.label}</h3>
                <p class="card-text"><small class="text-muted">${data.hits[index].recipe.ingredientLines.join("<br>")}</small></p>
              </div>
            </div>`
            }
      
         } 
    catch (error) {
      console.log('error',error);
    }
};

async function loadRecipe1(){
  try {
    const url1 ="https://api.edamam.com/search?q=beef&app_id=130a0976&app_key=be1e8fe24f4a5a6305283a7b16dda916"
    const response = await fetch (url1);
    const data1 = await response.json();
    console.log(data1);
      for (let index = 0; index < data1.hits.length; index++) {
        card1.innerHTML += `
        <div class="card col-3 m-1 mx-auto">
        <img src="${data1.hits[index].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body"style="background:#A8D273;color:black">
          <h5 class="card-title">${data1.hits[index].recipe.dietLabels}</h5>
          <h3 class="card-text">${data1.hits[index].recipe.label}</h3>
          <p class="card-text"><small class="text-muted">${data1.hits[index].recipe.ingredientLines.join("<br>")}</small></p>
        </div>
      </div>`
      }
  } catch (error) {
    console.log('error',error);
  }
};


async function loadRecipe2(){
  try {
    const url2 ="https://api.edamam.com/search?q=seafood&app_id=130a0976&app_key=be1e8fe24f4a5a6305283a7b16dda916"
    const response = await fetch (url2);
    const data2 = await response.json();
    console.log(data2);
      for (let index = 0; index < data2.hits.length; index++) {
        card2.innerHTML += `
        <div class="card col-3 m-1 mx-auto">
        <img src="${data2.hits[index].recipe.image}" class="card-img-top" alt="...">
        <div class="card-body"style="background:#FFFFB2;color:black">
          <h5 class="card-title">${data2.hits[index].recipe.dietLabels}</h5>
          <h3 class="card-text">${data2.hits[index].recipe.label}</h3>
          <p class="card-text"><small class="text-muted">${data2.hits[index].recipe.ingredientLines.join("<br>")}</small></p>
        </div>
      </div>`
      }
  } catch (error) {
    console.log('error',error);
  }
};




