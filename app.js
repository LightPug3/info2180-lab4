const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultDiv = document.getElementById("result");

function searchSuperheroes() {
    const query = searchInput.value.trim();
    const sanitizedQuery = encodeURIComponent(query);       // sanitize user input

    fetch(`superheroes.php?query=${sanitizedQuery}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            resultDiv.innerHTML = data;                     // update the result div with the fetched content
        })
        .catch(error => {
            console.error("Error fetching the superhero data:", error);
            resultDiv.innerHTML = `<p style="color: red;">An error occurred. Please try again later.</p>`;
        });
}

// listen for click on the search button:   
searchButton.addEventListener("click", searchSuperheroes);

// listen for the Enter key in the input field:
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();         // prevent default form submission behavior
        searchSuperheroes();
    }
});
