//create page load listener + page load function
window.onload = function () {
  // loading the form
  var formAlbum = document.forms.albumForm;
  formAlbum.onsubmit = submitAlbum;

  //create variables for the hard-coded albums
  var albumcollection = document.getElementById("albumCollection");
  var albumgallery = document.getElementById("albumgallery");
  var album1 = document.getElementById("album1");
  var album1description = document.getElementById("firstAlbum");
  var album2 = document.getElementById("album2");
  var album2description = document.getElementById("secAlbum");
  var album3 = document.getElementById("album3");
  var album3description = document.getElementById("thirdAlbum");

  // create variables for the form
  var title = formAlbum.al_Title;
  var artist = formAlbum.al_Artist;
  var genre = formAlbum.al_Genre;
  var pc = formAlbum.alPhotoCard;
  var addAlbum = document.getElementById("addAlbum");
  var addNextAlbum = document.getElementById("addNextAlbum");

  // create variables for the refresh
  var refresh = document.getElementById("refreshAlbum");

  // function to hide header one and show form
  function addYourAlbum() {
    albumcollection.style.display = "none";
    albumgallery.style.display = "none";
    addAlbum.style.display = "none";
    form.style.display = "block";
  }
  // show the form after the button is clicked
  addAlbum.onclick = addYourAlbum;

  // create function for validation
  function submitAlbum() {
    // empty fields will be focus + will the field will turn to #d4cec0
    // validate title of the album
    if (title.value === "") {
      title.style.background = "#d4cec0";
      title.focus();
      return false;
    }
    // validate the artist of the album
    if (artist.value === "") {
      artist.style.background = "#d4cec0";
      artist.focus();
      return false;
    }
    // validate the genre of the album
    if (genre.value === "") {
      genre.style.background = "#d4cec0";
      genre.focus();
      return false;
    }
    // validate the photocard
    if (pc.value === "X") {
      pc.style.background = "#d4cec0";
      pc.focus();
      return false;
    }

    // end of the validation
    // make the form disapper when the form is submitted
    formAlbum.style.display = "none";
    albumcollection.style.display = "block";
    albumgallery.style.display = "flex";
    addNextAlbum.style.display = "inline";
    refresh.style.display = "inline";
    album1description.style.display = "block";
    album2description.style.display = "block";
    album3description.style.display = "block";

    // show all the album collection
    // + the added album
    albumgallery.innerHTML += `<figure><img src='img/albumcover.jpeg' width='150px' alt='chosen PC card'/>
    <figcaption>Title: ${title.value}</figcaption>
    <figcaption>Artist: ${artist.value}</figcaption>
    <figcaption>Genre: ${genre.value}</figcaption>
    </figure>`;
    return false;
  } // end of function

  // when album is clicked - show the hidden message underneath
  // album 1
  function album1des() {
    album1description.classList.toggle("toggleclass");
  }
  album1.onclick = album1des;
  //album 2
  function album2des() {
    album2description.classList.toggle("toggleclass");
  }
  album2.onclick = album2des;
  // album 3
  function album3des() {
    album3description.classList.toggle("toggleclass");
  }
  album3.onclick = album3des;

  // add new album
  function addYourNextAlbum() {
    albumcollection.style.display = "none";
    albumgallery.style.display = "none";
    formAlbum.style.display = "block";
    refresh.style.display = "none";
    addNextAlbum.style.display = "none";
  }
  addNextAlbum.onclick = addYourNextAlbum;

  // refresh the page using refresh button
  refresh.onclick = refreshAll;
  function refreshAll() {
    localStorage.clear();
    window.location.reload();
  }
};
