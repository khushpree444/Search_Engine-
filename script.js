document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');

    // Function to handle the search
    function performSearch(query) {
        if (query.trim() !== '') {
            // Encode the search query for URL
            const encodedQuery = encodeURIComponent(query);
            // Redirect to Google search
            window.location.href = `https://www.google.com/search?q=${encodedQuery}`;
        }
    }

    // Event listener for the Enter key
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch(this.value);
        }
    });

    // Auto focus on search input when page loads
    searchInput.focus();
});
