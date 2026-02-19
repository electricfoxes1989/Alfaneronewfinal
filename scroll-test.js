// Check if page is loading the portrait
console.log("Checking for Alberto Pinto portrait...");
setTimeout(() => {
  const img = document.querySelector('img[alt="Alberto Pinto, Interior Designer"]');
  if (img) {
    console.log("Portrait found:", img.src);
    console.log("Loading status:", img.complete ? "Loaded" : "Loading...");
  } else {
    console.log("Portrait not found in DOM");
  }
}, 2000);
