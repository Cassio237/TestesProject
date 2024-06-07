function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', loadNavbar);

document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.outer-container').classList.toggle('dark-theme');
    document.querySelector('.inner-container').classList.toggle('dark-theme');
  });

function toggle(params) {
    const object = document.querySelectorAll(params);
    object.forEach(object => {
        object.classList.toggle('hidden')
    })
}