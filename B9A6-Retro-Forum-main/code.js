const jsonData = [];

const loadData = async (data) => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
  const res = await fetch(url);
  const data2 = await res.json();
  displayData(data2.posts);
};

const filteredData = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`;
  const res = await fetch(url);
  const data2 = await res.json();
  console.log(data2);
  displayData(data2.posts);
};

const displayData = (data) => {
  const dataContainer = document.getElementById("data-container");
  dataContainer.innerHTML = "";
  data.forEach((element) => {
    jsonData.push(element);
    const dataDiv = document.createElement("div");
    if (element.isActive === true) {
      dataDiv.innerHTML = `
      <div class="hero mt-3 rounded-xl bg-base-200" ${element.category}>
      <div class="hero-content flex-row lg:flex-row items-start">
      
      
  <div id ="avatar-container">
  <div class = "avatar online"  > 
  <div class= "  w-[60px] rounded-lg shadow-2xl">
  <img src="${element.image}" class="" />
  </div>
  </div>
  </div>     
  
  
  
        <div>
  
        <div class = "flex gap-3">
        <h1>#<span id = "categoryName">${element.category}</span></h1>
        <h1>Author : ${element.author.name}</h1>
        </div>
        
          <h1 class="text-xl font-bold">${element.title}</h1>
          <p class="py-6">${element.description}</p>
          <div class ="flex justify-between">
          <div class = "flex items-center gap-1">
          <div class ="flex items-center gap-1">
          <i class="fa-regular fa-message"></i>
          <p>${element.comment_count}</p>
          </div>
        
          <div class = "flex items-center gap-1">
          <i class="fa-regular fa-eye"></i>
          <p>${element.view_count}</p>
          </div>
          <div class = "flex items-center gap-1">
          <i class="fa-regular fa-clock"></i>
          <p>${element.posted_time}</p>
          
          </div>
          </div>
          <div class = "border rounded-full p-3 bg-[#10b981] cursor-pointer">
          <i class="fa-regular fa-envelope-open text-white" onclick="clickList('${element.id}')"  href="#" ></i>
          </div>
          </div>
        </div>
      </div>
    </div>
   
          `;
    } else {
      dataDiv.innerHTML = `
      <div class="hero mt-3 rounded-xl bg-base-200" ${element.category}>
      <div class="hero-content flex-row lg:flex-row items-start">
      
      
  <div id ="avatar-container">
  <div class = "avatar offline"  > 
  <div class= "  w-[60px] rounded-lg shadow-2xl">
  <img src="${element.image}" class="" />
  </div>
  </div>
  </div>     
  
  
  
        <div>
  
        <div class = "flex gap-3">
        <h1>#<span id = "categoryName">${element.category}</span></h1>
        <h1>Author : ${element.author.name}</h1>
        </div>
        
          <h1 class="text-xl font-bold">${element.title}</h1>
          <p class="py-6">${element.description}</p>
          <div class ="flex justify-between">
          <div class = "flex items-center gap-1">
          <div class ="flex items-center gap-1">
          <i class="fa-regular fa-message"></i>
          <p>${element.comment_count}</p>
          </div>
        
          <div class = "flex items-center gap-1">
          <i class="fa-regular fa-eye"></i>
          <p>${element.view_count}</p>
          </div>
          <div class = "flex items-center gap-1">
          <i class="fa-regular fa-clock"></i>
          <p>${element.posted_time}</p>
          
          </div>
          </div>
          <div class = "border rounded-full p-3 bg-[#10b981] cursor-pointer">
          <i class="fa-regular fa-envelope-open text-white" onclick="clickList('${element.id}')"  href="#" ></i>
          </div>
          </div>
        </div>
      </div>
    </div>
   
          `;
    }

    dataContainer.appendChild(dataDiv);
  });
};

const searchFunction = () => {
  const searchField = document.getElementById("search-bar");
  const searchText = searchField.value;
  filteredData(searchText);
};

loadData();

const clickList = async (id) => {
  for (const iterator of jsonData) {
    const container = document.getElementById("selected-data");
    const div = document.createElement("div");

    if (iterator.id == id) {
      div.innerHTML = `
      <div class = " flex justify-between mb-3 bg-white p-4 rounded-xl">
      <h1 class="text-xl">${iterator.title}</h1>
      <div class="flex items-center gap-1">
      <i class="fa-regular fa-eye"></i>
      <p>1568</p></div>
      </div>
      `;
      container.appendChild(div);
    }
  }
};

/*
const active = (id) => {
  const container = document.getElementById("avatar-container");

  for (const iterator of jsonData) {
    const newDiv = document.createElement("div");
    if (iterator.isActive == true) {
      newDiv.innerHTML = `
      <div class = "avatar online"  > 
      <div class= "  w-[60px] rounded-lg shadow-2xl">
      <img src="${iterator.image}" class="" />
      </div>
      </div>

      `;
      container.appendChild(newDiv);
    }
  }
};
*/
