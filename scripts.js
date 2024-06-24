document.addEventListener('DOMContentLoaded', () => {
    fetch('contentText.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('profile-text').innerText = data;
        })
        .catch(error => console.error('Error fetching the content:', error));
});

document.querySelectorAll('.sidebar a, .profile-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
