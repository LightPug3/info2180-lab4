document.getElementById("searchButton").addEventListener("click", () => {
    fetch("superheroes.php")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            // extract the superhero aliases from the HTML response:
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const aliases = Array.from(doc.querySelectorAll("li")).map(li => li.textContent);

            // display aliases in an alert:
            alert("Superheroes:\n" + aliases.join("\n"));
        })
        .catch(error => {
            console.error("Error fetching the superheroes list:", error);
            alert("An error occurred while fetching the superheroes list.");
        });
});
