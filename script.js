function toggleDropdown() {
    var dropdownContent = document.getElementById("mymenu");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "170px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

  let currentSlide = 0;

  function prevSlide() {
      if (currentSlide > 0) {
          currentSlide--;
          updateSlider();
      }
  }

  function nextSlide() {
      if (currentSlide < 2) {
          currentSlide++;
          updateSlider();
      }
  }

  function updateSlider() {
      const slider = document.querySelector('.slider');
      const slideWidth = slider.clientWidth / 6;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }