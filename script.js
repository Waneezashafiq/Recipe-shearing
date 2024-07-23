document.getElementById('signOutButton').addEventListener('click', function() {
    document.getElementById('overlay').classList.remove('hidden');
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('overlay').classList.add('hidden');
});

document.getElementById('confirmButton').addEventListener('click', function() {
    // Add your sign-out logic here
    alert('Signed out successfully!');
    document.getElementById('overlay').classList.add('hidden');
});
