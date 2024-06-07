document.addEventListener('DOMContentLoaded', function () {
    var sobreDiv = document.getElementById('sobre');
    sobreDiv.style.display = 'none';

    document.getElementById('link-sobre').addEventListener('click', function (event) {
        event.preventDefault();
        var sobreDiv = document.getElementById('sobre');
        if (sobreDiv.style.display === 'none') {
            sobreDiv.style.display = 'block';
        } else {
            sobreDiv.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var sobreDiv = document.getElementById('meu-drop');
    sobreDiv.style.display = 'none';

    document.getElementById('menu-drop').addEventListener('click', function(event) {
        event.preventDefault();
        if (sobreDiv.style.display === 'none' || sobreDiv.style.display === '') {
            sobreDiv.style.display = 'block';
        } else {
            sobreDiv.style.display = 'none';
        }
    });
});