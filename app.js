console.log("Let's get this party started!");

// Part 1: Building the Form

// When the user submits the form, 
// use axios to make a request to GIPHY for information based on that term. 
// After receiving the response, 
// console.log the response data to make sure you’re getting back what you expect.

async function searchGiphyUrl(searchTerm){
    const res=await axios.get("http://api.giphy.com/v1/gifs/search", {params:
    {q:searchTerm,
    api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}
    })
    const data=res.data.data
    console.log(data[0].images.original.url)//this will log the first url
}
// Part 2: Appending GIFs

//handle the click of submission button
//get response from API


const $searchInput = $("#search");
const $gifhyDiv=$("#giphies")

$("#searchBtn").on("click",async function(e) {
    e.preventDefault();
    let searchTerm=$searchInput.val()
    $searchInput.val("");
    const res=await axios.get("http://api.giphy.com/v1/gifs/search", {params:
    {q:searchTerm,api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})  
    const data=res.data.data
    appendGiphy(data)
})

// grab a GIF from the response data
// append the GIF to the page.
function appendGiphy(data){
    let numResults = data.length;
    if (numResults>=0) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let randomUrl=data[randomIdx].images.original.url
        let $giphy = $("<img>", {src:randomUrl });
        $gifhyDiv.append($giphy);  
    }  
}


// Part 3: Removing GIFs
// Add a button next to the form which, 
// when clicked, will remove all GIFs from the page.
$("#deleteBtn").on("click", function() {
    $("#giphies").empty();
  });