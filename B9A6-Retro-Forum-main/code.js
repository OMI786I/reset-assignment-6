const loadData = async (data) => {
  const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
  const res = await fetch(url);
  const data2 = await res.json();
  console.log(data2.posts);
  displayData(data2.posts);
};

loadData();

const displayData = (data) => {
  const dataContainer = document.getElementById("data-container");
  console.log(data);
};
