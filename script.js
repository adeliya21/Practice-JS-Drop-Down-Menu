document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggleButton = dropdown.querySelector('.dropdown-toggle');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        toggleButton.addEventListener('click', function() {
            // Close all dropdowns
            dropdowns.forEach(dd => {
                const content = dd.querySelector('.dropdown-content');
                if (content !== dropdownContent) {
                    content.classList.remove('visible');
                }
            });

            // Toggle the current dropdown
            dropdownContent.classList.toggle('visible');
        });
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-content').classList.remove('visible');
            });
        }
    });
});
