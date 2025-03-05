# Movie Search App

This is a simple web application that allows users to search for movie details using the **OMDb API**. Users can enter a movie name, fetch details, and view information such as the title, director, genre, actors, and plot. A "Back to Top" button allows users to scroll up after viewing results.

## 🚀 Features
- Search for movie details by title
- Display movie poster, year, director, genre, and plot
- Direct link to watch details on OMDb
- "Back to Top" button for smooth scrolling
- Responsive and clean design using **HTML, CSS, and JavaScript**

## 🛠️ Technologies Used
- HTML
- CSS
- JavaScript
- OMDb API

## 📂 Project Structure
```
Movie-Search-App/
│── index.html      # Main HTML file
│── style.css       # CSS styles
│── script.js       # JavaScript for fetching movie details
│── README.md       # Project documentation
└── assets/         # Contains images and logos
```

## 🔧 Setup & Usage
1. Clone the repository or download the files.
```sh
 git clone https://github.com/yourusername/movie-search-app.git
```
2. Open **index.html** in your browser.
3. Enter a movie name in the search bar and click **Search**.
4. View movie details and use the **Back to Top** button to navigate up.

## 📜 Code Overview
### `index.html`
Contains the basic structure, including the search bar and movie details section.

### `style.css`
Provides styles for a clean and responsive layout.

### `script.js`
Handles API requests to OMDb and updates the webpage with movie details.

## 🔑 API Key
This project uses the **OMDb API**. Get your API key from [OMDb](http://www.omdbapi.com/apikey.aspx) and replace it in `script.js`:
```js
const apiKey = 'YOUR_API_KEY_HERE';
```

## 🎨 UI Preview
![Movie Search App Preview](assets/preview.png)

## 📜 License
This project is licensed under the MIT License - feel free to modify and distribute it.

---
**Happy Coding! 🎬**

