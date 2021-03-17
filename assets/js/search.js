const sourceList = document.getElementById('sourceList');
const searchBar = document.getElementById('searchBar');
let sources = [];

const findIsland = () => {
  const link = document.URL;
  const island = link.substring((link.indexOf('#'))+1);
  return island;
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
        console.log(sources);
        let i = 0;
        const list = [];
        const island = findIsland();
        sources.map((source) => {
          if(source.island == island) {
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

const displaySources = (sources) => {
    const htmlString = sources
        .map((source) => {
            return `
            <li class="source">
                <h2>${source.title}</h2>
                <p>${source.tags}</p>
                <p>${source.island}</p>
            </li>
        `;
        })
        .join('');
    sourceList.innerHTML = htmlString;
};

loadSources();
