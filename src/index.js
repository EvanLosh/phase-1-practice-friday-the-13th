// Challenge 1
// For each movie returned from http://localhost:3000/movies create an image and add it to the movie-list nav element.

function renderMovie(x) {
    // get the parent element for the movie list
    const moviesNav = document.getElementById("movie-list")
    console.log(moviesNav)
    // Create an unordered list for movie images
    const moviesList = document.createElement("ul")
    // append a ul to the nav element
    moviesNav.append(moviesList)
    // create a list item for each image. Each list item contains one image.
    const listItem = document.createElement("li") // for now, we will do just a single image
    // append the list item with an image tag
    moviesList.append(listItem)
    // add an image tag
    const imageVar = document.createElement("img")
    imageVar.src = x.image
    listItem.append(imageVar)
    // add a source link to the image tag
}


fetch("http://localhost:3000/movies")
    .then(res => res.json())
    .then((res) => {
        //renderMovie(res)
        for (renderImage in res ){
            renderMovie(renderImage)  
            console.log(renderImage)
        }

    })


// function getLink(x) {
//     return fetch("http://localhost:3000/movies")
//         .then(res => res.json())
//         .then((res) => { res[x].image })
//     // .then(res => console.log(res[0].image))
// }

// console.log(imageLink)