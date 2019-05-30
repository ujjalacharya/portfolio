window.addEventListener("load", () => {

  let loader = document.getElementById("loader");
  loader.classList.add("hidden")

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

  var element = document.querySelectorAll('.chart');
  console.log(element)
  element.forEach((el, i) => {
    new EasyPieChart(element[i], {
      easing: 'easeInOut',
      barColor: '#fff',
      trackColor: false,
      scaleColor: false,
      lineWidth: 4,
      size: 90
  });
  })
});