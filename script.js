const elements = document.querySelectorAll('.glass');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add('visible');
}
});
}, {
threshold:0.2
});

elements.forEach(el => observer.observe(el));
