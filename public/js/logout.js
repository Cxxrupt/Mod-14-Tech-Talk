// initialize logout function when logout button is clicked
const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert("You've been logged out!");
  }
};

// event listener for logout
document.querySelector('#logout').addEventListener('click', logout);
