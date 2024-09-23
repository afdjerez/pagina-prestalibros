// Función de búsqueda de libros por título, autor o género
function searchBook() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const books = document.querySelectorAll(".book");

    books.forEach(book => {
        const title = book.getAttribute("data-title").toLowerCase();
        const author = book.getAttribute("data-author").toLowerCase();
        const genre = book.getAttribute("data-genre").toLowerCase();

        if (title.includes(input) || author.includes(input) || genre.includes(input)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}

// Función para simular el préstamo de libros
document.querySelectorAll('.book button').forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Libro prestado con éxito.');
    });
});