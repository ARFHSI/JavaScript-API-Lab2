let link = "https://rickandmortyapi.com/api/character/?page=2"
// console.log(link)
async function fetchData(){
    let res = await fetch(link)
    let data = await res.json();
    let collection= document.querySelector(".collection")
    // console.log(data.results[0].name)

    data.results.forEach(element => {
        console.log(element);
    let hearo = document.createElement('img')
    hearo.src = element.image

    let heroN = document.createElement('h2')

        heroN.innerText = element.name
        collection.append(heroN,hearo)
    });

}

fetchData()