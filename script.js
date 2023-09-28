function display() {
  img = document.getElementById("imginput");
  img = img.files[0];
  const imgtype = img.type;
  console.log(imgtype);
  const typ = imgtype.substring(0, 5);



  if (typ == "image") {
    console.log("hello");
  } else {
    alert("Not a Image file");
  }
}
