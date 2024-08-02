document.getElementById('learnMore').addEventListener('click', function() {
    var moreInfo = document.getElementById('moreInfo');
    var isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        this.textContent = 'Mostrar Menos';
    } else {
        moreInfo.style.display = 'none';
        this.textContent = 'Saiba Mais';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.parentElement.style.textDecoration = 'line-through';
            } else {
                this.parentElement.style.textDecoration = 'none';
            }
        });
    });
});

