const loadData = async (data) => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
  const res = await fetch(url);
  const data2 = await res.json();

  displayData(data2.posts);
};

loadData();

const displayData = (data) => {
  data.forEach((element) => {
    const dataContainer = document.getElementById("data-container");
    const dataDiv = document.createElement("div");
    dataDiv.innerHTML = `
    <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img src="${element.image}" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">${element.title}</h1>
        <p class="py-6">${element.description}</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
      
        `;
    dataContainer.appendChild(dataDiv);

    console.log(element);
  });
  const dataContainer = document.getElementById("data-container");
  const dataDiv = document.createElement("div");
  dataDiv.innerHTML = `
  <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">"${data.title}"</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

  `;
  dataContainer.appendChild(dataDiv);
  console.log(data[0].title);
};
