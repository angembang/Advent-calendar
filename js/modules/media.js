function media () {
    // Retrieve the video element
    const video = document.getElementById("video");
    if(!video) return;
    // Get query parameters from the URL
    const params = new URLSearchParams(window.location.search);
  
    // Set the video source from the 'src' parameter
    video.src = decodeURIComponent(params.get("src"));
  
    // Set the paragraph content from the 'title' parameter
    const content = document.getElementById("content");
    content.textContent = decodeURIComponent(params.get("title"));
  }
  
  export {media};