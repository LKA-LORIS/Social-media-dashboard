var themeSwitch = document.getElementById('themeSwitch');

if (themeSwitch) {
    initTheme(); // on page load, if user has already selected a specific theme -> apply it

    themeSwitch.addEventListener('change', function(event) {
        resetTheme(); // update color theme
    });

    function initTheme() {
        var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'theme--dark');
        // update checkbox
        themeSwitch.checked = darkThemeSelected;

        if(darkThemeSelected) {
            document.body.classList.add('theme--dark')
            document.body.classList.remove('theme--default');
        } else {
            document.body.classList.add('theme--default');
            document.body.classList.remove('theme--dark')
        }
    };

    function resetTheme() {
        if (themeSwitch.checked) { // dark theme has been selected
            document.body.classList.add('theme--dark');
            document.body.classList.remove('theme--default');
            localStorage.setItem('themeSwitch', 'theme--dark'); // save theme selection 
        } else {
            document.body.classList.remove('theme--dark');
            document.body.classList.add('theme--default');
            localStorage.removeItem('themeSwitch'); // reset theme selection 
        }
    };
}