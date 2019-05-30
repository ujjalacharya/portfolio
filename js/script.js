window.addEventListener("load", () => {
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    // Waits 1000ms after typing "First"
    strings: ["Software Engineer.", "Web Developer.", "Student."],
    typeSpeed: 70,
    loop: true,
    showCursor: true,
    startDelay: 1000
  });
});
