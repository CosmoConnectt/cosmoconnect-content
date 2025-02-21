document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('post-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const postContent = document.getElementById('post-content').value;
        const errorMessage = document.getElementById('error-message');

        if (postContent.trim() === '') {
            showError('Post content cannot be empty.');
            return;
        }

        errorMessage.textContent = '';
        // Code to handle successful post submission
        // ...
    });

    function showError(message) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function showNotFoundHomepageMessage() {
        const notFoundMessage = document.getElementById('not-found-homepage-message');
        notFoundMessage.textContent = 'Homepage not found.';
        notFoundMessage.style.display = 'block';
    }

    // Example usage:
    // showError('An error occurred while loading posts.');
    // showNotFoundHomepageMessage();
});
