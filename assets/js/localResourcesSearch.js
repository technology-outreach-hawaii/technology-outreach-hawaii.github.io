const boahu = document.getElementById("oahu");
const bbigisland = document.getElementById("bigisland");
const bmaui = document.getElementById("maui");
const bkauai = document.getElementById("kauai");
const sourceList = document.getElementById('sourceList');
const searchBar = document.getElementById('searchBar');
let sources = [];

const submitButton = document.getElementById("submit");

searchBar.addEventListener('keypress', function(e) {
  if(e.key == 'Enter') {
    search(searchBar);
  }
});

submitButton.addEventListener("click", function() {
  search(searchBar);
});

function search(t) {
  const searchString = t.value.toLowerCase();

  const filteredSources = sources.filter((source) => {
      return (
          source.title.toLowerCase().includes(searchString) ||
          source.island.toLowerCase().includes(searchString) ||
          source.tags.toLowerCase().includes(searchString)
      );
  });
  displaySources(filteredSources);
};

function select(island) {
  switch (island) {
    case "oahu":
      boahu.style.borderBottom = "1px solid black";
      bbigisland.style.borderBottom = "none";
      bmaui.style.borderBottom = "none";
      bkauai.style.borderBottom = "none";
      break;
    case "bigisland":
      boahu.style.borderBottom = "none";
      bbigisland.style.borderBottom = "1px solid black";
      bmaui.style.borderBottom = "none";
      bkauai.style.borderBottom = "none";
      break;
    case "maui":
      boahu.style.borderBottom = "none";
      bbigisland.style.borderBottom = "none";
      bmaui.style.borderBottom = "1px solid black";
      bkauai.style.borderBottom = "none";
      break;
    case "kauai":
      boahu.style.borderBottom = "none";
      bbigisland.style.borderBottom = "none";
      bmaui.style.borderBottom = "none";
      bkauai.style.borderBottom = "1px solid black";
      break;
    default:
      console.log("no work");
  }
};

boahu.addEventListener("click", function(){
  select("oahu");
  loadSources("oahu");
});
bbigisland.addEventListener("click", function(){
  select("bigisland");
  loadSources("bigisland");
});
bmaui.addEventListener("click", function(){
  select("maui");
  loadSources("maui");
});
bkauai.addEventListener("click", function(){
  select("kauai");
  loadSources("kauai");
});

const loadSources = async (island) => {
    try {
        const res = await fetch('/assets/json/localResources.json');
        sources = await res.json();
        let i = 0;
        const list = [];
        sources.map((source) => {
          if(source.island == island || source.island == 'all') {
            list[i] = source;
            i++;
          }
        })
          sources = list;
          displaySources(sources);
    } catch (err) {
        console.error(err);
    }
};

const seperateTags = (tags) => {
  var arr = tags.split(',');
  return arr;
}

const splitTags = (tags) => {
  var arr = tags.split(',');
  var list = '';
  arr.map(tags => {
  list+='<p class="tags">'+tags+'</p>';
  });
  return list;
}

const displayTags = (totalTags) => {
  totalTags.map(tags => {
    document.getElementById('listTags').innerHTML += `<p class="tags">${tags}</p>`;
  });
}

const displaySources = (sources) => {
    let total = '';
    const htmlString = sources
        .map((source) => {
          var tags = splitTags(source.tags);
            total+= `
            <li onclick="window.open('${source.link}')" class="resources-island-section-container">
                <div class="resources-island-section-container-img">
                  <img src="${source.picture}" alt="resource-image"/>
                </div>
                <div class="resources-island-section-container-body">
                  <h2>${source.title}</h2>
                  <p>${source.summary}</p>
                  <div id="listTags" class="tags-horizontal">
                  ${tags}
                  </div>
                </div>
            </li>
        `;
      }).join('');
      sourceList.innerHTML = total;
};

loadSources('oahu');
select('oahu');
