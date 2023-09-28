function display() {
 const img = document.getElementById("imginput");
 const img2 = img.files[0];
 console.log(img2.type);
  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById("images").src = e.target.result;

    console.log("hi");
};

reader.readAsDataURL(img2);

//   const dropArea = document.getElementById("drop-area");

//   dropArea.addEventListener("dragover", (event) => {
//     event.stopPropagation();
//     event.preventDefault();
//     // Style the drag-and-drop as a "copy file" operation.
//     event.dataTransfer.dropEffect = "copy";
//   });

//   dropArea.addEventListener("drop", (event) => {
//     event.stopPropagation();
//     event.preventDefault();
//     const fileList = event.dataTransfer.files;
//     console.log(fileList);
//   });
}
