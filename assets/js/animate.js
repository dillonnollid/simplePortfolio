// Callback for IntersectionObserver
 const callback = function(entries) {
    entries.forEach(entry => {
      // If element in the viewport
      if (entry.isIntersecting) {
        // Add the fadeIn class:
          entry.target.classList.add("animate-fadeIn");
          console.log("FADE IN")
      } else {
        // Remove the fadein class:
          entry.target.classList.remove("animate-fadeIn");
          console.log("FADE IN REMOVE")
      }
    });
  };
  
  const targets = document.querySelectorAll(".fade-on-scroll");
  const observer = new IntersectionObserver(callback);
  
  // Loop through targets
  targets.forEach(function(target) {
    // Hide the element
    target.classList.add("opacity-0");
    // Add the element to the watcher
    observer.observe(target);
  });
  