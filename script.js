const searchInput = document.querySelector("#search-input"); // Get your search input element
const searchButton = document.querySelector("#google-search"); 


searchButton.addEventListener("click", function() {
  search();
});

function search(){
  const input = searchInput.value; 

window.location.href = "https://www.google.com/search?q="+input+"&sca_esv=fbf738c26e1a574b&source=hp&ei=G7YCZ4H9OIm_kPIPlsKX2Aw&iflsig=AL9hbdgAAAAAZwLEK9V8qXpqb_MvDWr3PhQ0b9eseuzH&ved=0ahUKEwjB9o76kfqIAxWJH0QIHRbhBcsQ4dUDCBw&oq=" + input +"&gs_lp=Egdnd3Mtd2l6IgVoZWxsbzIOEC4YgAQYxwEYjgUYrwEyCBAuGIAEGLEDMggQLhiABBixAzITEC4YgAQYsQMY0QMYxwEYigUYCjIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIIEAAYgAQYsQMyCxAuGIAEGMcBGK8BMggQLhiABBixA0idE1AAWKgGcAB4AJABAJgBVqAB7AKqAQE1uAEMyAEA-AEBmAIFoAKIA8ICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAgsQLhiABBjRAxjHAcICDhAuGIAEGLEDGIMBGIoFwgIEEAAYA8ICDhAuGIAEGLEDGNEDGMcBwgIREC4YgAQYsQMYgwEY1AIYigXCAgsQLhiABBixAxiDAcICDhAAGIAEGLEDGIMBGIoFwgIFEC4YgATCAg4QLhiABBixAxiDARjUApgDAJIHATWgB_NQ&sclient=gws-wiz"
}

// Notes for Latori: I was trying to get this alert to show up after the user searches but it only shows during the initial load up//
alert(`User searched: ${searchInput.value}`); 
