document.addEventListener('DOMContentLoaded', () => {
    // Click event for showing loadout content
    document.getElementById('loadout-icon').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.hash = 'loadout'; // Update the hash
    });

    // Click event for the back-to-home icon inside the loadout content
    // Ensure this element exists in your HTML
    document.getElementById('back-to-home').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.hash = ''; // Reset the hash to default
    });

    // Function to toggle content visibility based on the hash
    function showContentBasedOnHash() {
        if (window.location.hash === '#loadout') {
            document.getElementById('main-content').style.display = 'none';
            document.getElementById('loadout-content').style.display = 'block';
        } else {
            document.getElementById('main-content').style.display = 'block';
            document.getElementById('loadout-content').style.display = 'none';
        }
    }

    // Initialize and respond to hash changes
    showContentBasedOnHash();
    window.addEventListener('hashchange', showContentBasedOnHash);
});
