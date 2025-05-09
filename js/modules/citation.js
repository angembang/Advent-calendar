function quote () {
    // Retrieve the quote element
    const quote = document.getElementById("quote");
    if(!quote) return;
    // Create a URLSearchParams object from the current page's query string to retrieve the query parameter of the current url
    const params = new URLSearchParams(window.location.search);
    // Set the content of the element with id="quote" to the value of the text parameter from the URL
    quote.textContent = params.get("text");
    // Set the content of the element with the value
    document.getElementById("author").textContent =
    params.get("author") + " — " + params.get("title");
  }
  
  export {quote};
  