const jsonData = [];
const array = [];

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
          <div class = "border rounded-full   ">
          <button  onclick="clickList('${element.id}')"  href="#" class ="btn btn-accent btn-sm" >
          <i class="fa-solid fa-envelope-open text-white"></i>
          </button>
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
          <div class = "border rounded-full   ">
          <button  onclick="clickList('${element.id}')"  href="#" class ="btn btn-accent btn-sm" >
          <i class="fa-solid fa-envelope-open text-white"></i>
          </button>
          
          </div>
          </div>
        </div>
      </div>
    </div>
   
          `;
    }

    dataContainer.appendChild(dataDiv);
  });
  loaderSpinner(false);
};

const searchFunction = () => {
  loaderSpinner(true);
  const searchField = document.getElementById("search-bar");
  const searchText = searchField.value;
  filteredData(searchText);
};

const clickList = (id) => {
  const container = document.getElementById("selected-data");
  for (const iterator of jsonData) {
    const div = document.createElement("div");
    if (iterator.id == id) {
      array.push(iterator.id);

      div.innerHTML = `
      <div class = " flex justify-between mb-3 bg-white p-4 rounded-xl">
      <h1 class="text-xl">${iterator.title}</h1>
      <div class="flex items-center gap-1">
      <i class="fa-regular fa-eye"></i>
      <p>${iterator.view_count}</p></div>
      </div>
      `;
    }
    container.appendChild(div);
  }
  console.log(array);
  const count = document.getElementById("mark-count");
  count.innerText = array.length;
};

const loadLatestData = async () => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/latest-posts`;
  const res = await fetch(url);
  const data2 = await res.json();
  console.log(data2);
  displayData2(data2);
};

loadLatestData();

const displayData2 = (data) => {
  const container = document.getElementById("posts-container");
  for (const iterator of data) {
    console.log(iterator);
    const newDIv = document.createElement("div");

    newDIv.innerHTML = `
    <div class="card md:w-56 lg:w-80 bg-base-100 shadow-xl">
    <figure><img src="${iterator.cover_image}" alt="Shoes" /></figure>
    <div class="card-body">
    <p><i class="fa-solid fa-calendar-days"></i> ${
      iterator.author.posted_date
        ? iterator.author.posted_date
        : "No Publish Date"
    }</p>
      <h2 class="card-title">${iterator.title}</h2>
      <p>${iterator.description}</p>
      <div class="card-actions justify-start">
      <div class="avatar">
      <div class="w-[45px] rounded-full">
        <img src="${iterator.profile_image}" />
      </div>
    </div>
 <div>
    <h1 class = "text-[16px] font-bold">${iterator.author.name}</h1>
    <p class ="text-[12px]">${
      iterator.author.designation ? iterator.author.designation : "Unknown"
    }</p>
    </div> 
    </div>
    </div>
  </div>
    `;
    container.appendChild(newDIv);
  }
};

const loaderSpinner = (isLoading) => {
  const div = document.getElementById("spinner");
  if (isLoading) {
    div.classList.remove("hidden");
  } else {
    div.classList.add("hidden");
  }
};

loadData();
