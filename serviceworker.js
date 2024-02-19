let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default prompt
  event.preventDefault();

  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Show a custom "Add to Home Screen" button or message
  // Update your UI to notify the user they can add your PWA
  showAddToHomeScreenButton();
});

function showAddToHomeScreenButton() {
  // Show your custom button or message
  // For example, display a button that, when clicked, triggers the installation prompt
  const addToHomeScreenButton = document.getElementById(
    "add-to-home-screen-button"
  );

  addToHomeScreenButton.style.display = "block";

  addToHomeScreenButton.addEventListener("click", () => {
    // Trigger the deferred prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }

      // Reset the deferred prompt variable
      deferredPrompt = null;
    });
  });
}
