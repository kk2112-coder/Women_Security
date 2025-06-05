// Mobile menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.navigation').classList.toggle('active');
});

// Save emergency numbers to phone
document.querySelectorAll('.hotline-number').forEach(number => {
    number.addEventListener('click', function() {
        const phoneNumber = this.textContent.trim().split(' ')[0];
        if (confirm(`Call or save ${phoneNumber}?`)) {
            // In a real app, this would initiate a call or save to contacts
            alert(`Number ${phoneNumber} is ready to be called/saved.`);
        }
    });
});