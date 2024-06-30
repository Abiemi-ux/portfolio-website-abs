document.addEventListener('DOMContentLoaded', function() {
    var dropdownItems = document.querySelectorAll('.dropdown-content a');
    var categories = document.querySelectorAll('.category');

    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var categoryId = this.getAttribute('data-category');

            // Hide all categories
            categories.forEach(function(category) {
                category.style.display = 'none';
            });

            // Show the selected category
            document.getElementById(categoryId).style.display = 'block';
        });
    });
});
