const desktopContent = document.querySelector('.desktop-content');
const mobileContent = document.querySelector('.mobile-content');

function toggleContent() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        desktopContent.style.display = 'none';
        mobileContent.style.display = 'block';
    } else {
        desktopContent.style.display = 'block';
        mobileContent.style.display = 'none';
    }
}

toggleContent(); // Call the function when the page loads

// Call the function whenever the window size changes
window.addEventListener('resize', toggleContent);

function toggleCSS() {
    const cssLink = document.getElementById('cssLink');
    
    if (window.matchMedia("(max-width: 767px)").matches) {
        cssLink.href = 'style-mobile.css';
    } else {
        cssLink.href = 'style-desktop.css';
    }
}

toggleCSS(); // Call the function when the page loads


// Call the function whenever the window size changes
window.addEventListener('resize', toggleCSS);


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }