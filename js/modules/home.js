function home() {
  /**
   * Retrieve the welcome message
   * Check if it doesn't exist
   * Add the content width the first name of the connect user retrieve
   */
  // Retrieve the welcome message
  const welcomeMessage = document.querySelector(".welcomeMessage");
  // Check if welcomeMessage doesn't exist to return
  if (!welcomeMessage) return;
  // Retrieve the firstName of the connected user
  const connectUserFirstName = localStorage.getItem("connectUserFirstName");
  if (!connectUserFirstName) {
    welcomeMessage.textContent =
      "Veuillez vous connectez pour acceder au calendrier";
    window.location.href = "../templates/login.html";
    return;
  }
  // Retrieve the welcome message paragraph
  welcomeMessage.textContent = `Salut ${connectUserFirstName}`;

  /** Retrieve the span wich content the id current year
   * Retrieve the current year
   * insert the current year to the span
   */
  // Retrieve the span wich content the id current year
  const currentYear = document.getElementById("currentYear");
  // Check if the element width the id currentyear doesn't exist to stop the processus
  if (!currentYear) return;
  // Retrieve the current date
  const currentDate = new Date();
  // Retrieve only the year in the current day
  const year = currentDate.getFullYear();
  // Add the content to the span element
  currentYear.textContent = year;

  /**
   * Create the calendar
   *
   * Retrieve the calendar div
   * Retrieve data store to the surprises.json file by fetch method
   * Loop trough data to create caledarboxes and content
   */
  // Retrieve the calendar div
  const calendar = document.getElementById("calendar");
  let currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  // Check if the month is different to december (11)
  if (currentMonth !== 11) {
    //calendar.innerHTML =
    //"<p> Le calendrier de l’Avent ne sera disponible qu'à partir du 1er décembre </p>";
    //return;
  }
  // fetch the surprises.json file to retrieve stored data
  fetch("https://github.com/angembang/Advent-calendar/blob/main/surprises.json")
    .then((response) => response.json())
    .then((data) => {
      // Shuffle the retrieve data
      data.surprises.sort(() => Math.random() - 0.5);
      // Loop trough 24 i, representing 24 days of december
      for (let i = 1; i <= 24; i++) {
        // Create an element div which going to contain the box calendar
        const calendarBox = document.createElement("div");
        // Add the class to the div created
        calendarBox.classList.add("calendarBox");

        // Create a paragraph element which going to contain the text of the box calendar created
        const paragraph = document.createElement("p");
        // Assignated the i value to the paragraph
        paragraph.textContent = i;
        // Insert the paragraph to the calendar box div
        calendarBox.appendChild(paragraph);

        // Check if the paragraph value (i) is inferior or egal to the current day for displaying the link of the surprise
        if (i <= currentDay) {
          // Retrieve the surprise for the current day (i) by accessing the corresponding element in the surprises array. Use i - 1 to get the correct item for the day because the array index starts at 0
          const surprise = data.surprises[i - 1];
          // Create an element a which going to contain the link of the surprise
          const surpriseLink = document.createElement("a");
          // Add the content to the element a created
          surpriseLink.textContent = "Cliquez pour ouvrir";
          //surpriseLink.target = "_blank";

          // Check the type of the surprise to manipulate it during to the type
          if (surprise.type === "video") {
            /**
             *  Create a temporary page to use personalisate url
             */
            // Encode the video source (URL)
            const videoSrc = encodeURIComponent(surprise.src);
            // Encode the message or title to display
            const videoMessage = encodeURIComponent(surprise.message);

            // Build the media.html URL with query parameters
            surpriseLink.href = `media.html?src=${videoSrc}&title=${videoMessage}`;
          } else if (surprise.type === "image") {
            const imageSrc = encodeURIComponent(surprise.src);
            const imageAlt = encodeURIComponent(surprise.name);
            const imageContent = encodeURIComponent(surprise.message);
            surpriseLink.href = `image.html?src=${imageSrc}&alt=${imageAlt}&textMessage=${imageContent}`;
          } else if (surprise.type === "quote") {
            /**
             *  Create a temporary page to use personalisate url
             */
            // Encode the content of the quote to  use it in a URL
            const quoteText = encodeURIComponent(surprise.content);
            // Encode the author's name
            const author = encodeURIComponent(surprise.Author);
            // Encode the title
            const title = encodeURIComponent(surprise.title);
            // Build a URL with the encoded quote, author, and title as query parameters and set it as the href of the surpriseLink element
            surpriseLink.href = `citation.html?text=${quoteText}&author=${author}&title=${title}`;
          }

          calendarBox.appendChild(surpriseLink);
        }

        calendar.appendChild(calendarBox);
      }
    });
}

export { home };
