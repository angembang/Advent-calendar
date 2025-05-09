function image () {
    // retrieve the image element
    const image = document.getElementById("image");
    if(!image) return;
   // Get URL parameters
   const params = new URLSearchParams(window.location.search);

   // Decode and assign values
   const src = decodeURIComponent(params.get("src"));
   const alt = decodeURIComponent(params.get("alt"));
   const textMessage = decodeURIComponent(params.get("textMessage"));

   // Set image attributes
   image.src = src;
   image.alt = alt;

   // Display alt and message
   document.getElementById("alt").textContent = alt;
   document.getElementById("textMessage").textContent = textMessage;
}

export {image};