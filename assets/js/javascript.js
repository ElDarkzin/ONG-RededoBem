document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    // Check if toggleBtn was found before setting onclick
    if (toggleBtn) {
        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            // Check if toggleBtnIcon was found before setting classList
            if (toggleBtnIcon) {
                toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
            }
        }
    }
});
