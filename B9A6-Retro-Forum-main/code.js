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
    const dataDiv = document.createElement("div");

    dataDiv.innerHTML = `
    <div class="hero mt-3 rounded-xl bg-base-200" ${element.category}>
    <div class="hero-content flex-row lg:flex-row items-start">
   
    <div class ="avatar online" id="avatar-container"> 

    <div class= "  w-[60px] rounded-lg shadow-2xl">
    
    <img src="${element.image}" class="" />
    </div>
    
    
    </div>
     
      <div>

      <div class = "flex gap-3">
      <h1>#<span id = "categoryName">${element.category}</span></h1>
      <h1>Author : ${element.author.name}</h1>
      </div>
      
        <h1 class="text-3xl font-bold">${element.title}</h1>
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
        <button><i class="fa-regular fa-envelope-open text-white" onclick="clickList('${element.title}')"></i></button>
        </div>
        </div>
      </div>
    </div>
  </div>
      
        `;

    dataContainer.appendChild(dataDiv);
  });
  console.log(data);
};

const searchFunction = () => {
  const searchField = document.getElementById("search-bar");
  const searchText = searchField.value;
  filteredData(searchText);
};

loadData();

const clickList = async (id) => {
  console.log(id);
};
