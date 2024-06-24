document.addEventListener('DOMContentLoaded', () => {
    fetch('profileText.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('profile-text').innerText = data;
        })
        .catch(error => console.error('Error fetching the content:', error));

    fetch('assignmentsText.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('assignments-text').innerText = data;
        })
        .catch(error => console.error('Error fetching the assignments content:', error));

    fetch('aboutText.txt')
        .then(response => response.text())
        .then(data => {
            document.getElementById('about-text').innerText = data;
        })
        .catch(error => console.error('Error fetching the about content:', error));
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