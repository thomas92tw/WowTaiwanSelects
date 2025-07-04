document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentNode;
            const accordionContent = this.nextElementSibling;

            accordionItem.classList.toggle('active');

            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                accordionContent.style.padding = "20px 25px"; // Ensure padding is applied
            } else {
                accordionContent.style.maxHeight = "0";
                accordionContent.style.padding = "0 25px"; // Collapse padding as well
            }
        });
    });
});