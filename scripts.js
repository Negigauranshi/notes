function subscribe() {
  const email = document.getElementById("emailInput").value;
  if (email) {
    alert(`Thank you for subscribing with ${email}!`);
    document.getElementById("emailInput").value = '';
  } else {
    alert("Please enter a valid email address.");
  }
}
