
function showSection(sectionId) {
    const sections = ['home', 'training'];
    sections.forEach(id => {
        let el = document.getElementById(id);
        if(el) el.style.display = (id === sectionId) ? 'flex' : 'none';
    });
}
showSection('home');
function startTraining() { showSection('training'); }
function openModal() { document.getElementById("loginModal").style.display = "flex"; }
function closeModal() { document.getElementById("loginModal").style.display = "none"; }
window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) closeModal();
}

