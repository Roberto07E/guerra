
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const form = event.target;
  
    // Enviar formulario usando FormSubmit.co
    fetch(form.action, {
      method: "POST",
      body: new FormData(form)
    })
    .then(response => {
      if (response.ok) {
        window.location.href = "gracias.html"; // Redirige a la página de gracias
      } else {
        alert("Hubo un error al enviar tu mensaje. Inténtalo de nuevo.");
      }
    })
    .catch(error => {
      alert("Hubo un error de red. Inténtalo de nuevo.");
    });
  });
  