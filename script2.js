document.addEventListener('DOMContentLoaded', function() {
    const apologyTexts = [
        "I know I'm so bad at meeting",
        "and I know that you wanted to see me today, I really wanted too, honestly...",
        "sorry for ruining your mood after having a good day with your friends...",
        "I'm so sorry",
        "I didn't mean to upset you, I just thought it would be better...",
        "But I know we will see each other on Monday, right?",
        "So...",
        "I had an idea!",
        "We wanted to see this movie, right?",
        "Let's go and see it then? I have 2 tickets..."
    ];

    const apologyImages = [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "movie.jpg",
        "ticket.PNG" // Add the movie image here
    ];

    let index = 0;

    const apologyText = document.getElementById('apologyText');
    const nextButton = document.getElementById('nextButton');
    const imageContainer = document.querySelector('.image-container');
    const movieContainer = document.querySelector(".small-movie-image");
    nextButton.addEventListener('click', function() {
        index++;
        if (index >= apologyTexts.length) {
            window.location.href = 'index.html';
        } else {
            apologyText.textContent = apologyTexts[index];
            const existingImage = imageContainer.querySelector('img');
            if (existingImage) {
                existingImage.remove();
            }
            if (index === 8) {
                const movieImg = document.createElement('img');
                movieImg.src = apologyImages[10];
                movieImg.classList.add('small-movie-image');
                movieContainer.innerHTML = ''; // Clear previous image
                movieContainer.appendChild(movieImg); // Append movie image
            } else {
                const img = document.createElement('img');
                img.src = apologyImages[index];
                img.classList.add('apology-image');
                imageContainer.appendChild(img);
                movieContainer.innerHTML = ''; // Append regular image
            }
            if (index === 8) {
                const img = document.createElement('img');
                img.src = apologyImages[index];
                img.classList.add('apology-image');
                imageContainer.appendChild(img);
            }
            if (index === 9) {
                const img = document.createElement('img');
                img.src = apologyImages[11];
                img.classList.add('ticket-image');
                movieContainer.appendChild(img);
            }
        }
    });
});
