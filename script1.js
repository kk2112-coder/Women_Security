const wrapper =document.querySelector('.wrapper');
const loginlink =document.querySelector('.login-link');
const registerlink =document.querySelector('.register-link');
const btnpoPup =document.querySelector('.btnLogin-popup');
const iconClose =document.querySelector('.icon-close');

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

btnpoPup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

// location
document.getElementById('emergencyButton').addEventListener('click', function () {
    alert('Emergency Alert Activated! Help is on its way!');
  });

  // Emergency Button Alert
document.getElementById('emergencyButton').addEventListener('click', function () {
    const userConfirmation = confirm(
      'Are you sure you want to activate the emergency alert? This will notify your trusted contacts and authorities.'
    );
    if (userConfirmation) {
      alert('Emergency Alert Activated! Sending notifications and sharing your location...');
      // Simulated action: Send notifications and share location (can connect to APIs here)
      shareLocation();
    } else {
      alert('Emergency Alert Canceled.');
    }
  });
  
  // Function to Simulate Location Sharing
  function shareLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          alert(`Your location has been shared!\nLatitude: ${latitude}\nLongitude: ${longitude}`);
          // Logic to send location data to trusted contacts or emergency services can be added here
        },
        function (error) {
          alert('Unable to retrieve your location. Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }

  //Poloce details
