const sourceList = document.getElementById('sourceList');
const searchBar = document.getElementById('searchBar');
let sources = [];

const findIsland = () => {
  const link = document.URL;
  const island = link.substring((link.indexOf('#'))+1);
  return island;
}

const defaultOahu = (sources) => {
  const oahuList = [];
  let x = 0;
  sources.map((source) => {
    if(source.island == 'oahu') {
      oahuList[x] = source;
      x++;
    }
  })
  return oahuList;
}

console.log(findIsland());

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredSources = sources.filter((source) => {
        return (
            source.title.toLowerCase().includes(searchString) ||
            source.island.toLowerCase().includes(searchString) ||
            source.tags.toLowerCase().includes(searchString)
        );
    });
    displaySources(filteredSources);
});

const loadSources = async () => {
    try {
        const res = await fetch('/search.json');
        sources = await res.json();
        let i = 0;
        const list = [];
        const island = findIsland();
        sources.map((source) => {
          if(source.island == island) {
            list[i] = source;
            i++;
          }
        })
        if(list == ''){
          const oahu = defaultOahu(sources);
          displaySources(oahu);
        } else {
          sources = list;
          displaySources(sources);
        }
    } catch (err) {
        console.error(err);
    }
};

const seperateTags = (tags) => {
  var arr = tags.split(',');
  return arr;
}

const displaySources = (sources) => {
    const htmlString = sources
        .map((source) => {
          totalTags = seperateTags(source.tags);
          link = source.link;
            return `
            <li onclick="window.open(link);" class="resources-island-section-container">
                <div class="resources-island-section-container-img">
                  <img src="${source.picture}"/>
                </div>
                <div class="resources-island-section-container-body">
                  <h2>${source.title}</h2>
                  <p>${source.excerpt}</p>
                  <div class="tags-horizontal">
                  <p class='tags'>${totalTags[0]}</p>
                  <p class='tags'>${totalTags[1]}</p>
                  </div>
                </div>
            </li>
        `;
        })
        .join('');
    sourceList.innerHTML = htmlString;
};

loadSources();
