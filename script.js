window.onload = function () {
    let username = localStorage.getItem('username');
    let password = localStorage.getItem('password');
    if (username && password) {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("main-container").classList.remove("hidden");
        document.getElementById("user-name").innerText = username;
    }
};


function bckgroundImagen(){
  document.body.style.backgroundImage = "url('https://images7.alphacoders.com/611/thumb-1920-611159.jpg')";
}
function bckgroundImaged(){
  document.body.style.backgroundImage = "url('https://images7.alphacoders.com/127/thumb-1920-1275132.jpg')";
}



function login() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    const validUsernames = ["2105056", "2105052", "2105042", "2105040", "2105099"];
    if (validUsernames.includes(username) && password === username) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("main-container").classList.remove("hidden");
        document.getElementById("user-name").innerText = username;
        showPopup();
    } else {
        showError();
    }
}





function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}





function closePopup() {
    document.getElementById("popup").style.display = "none";
}





function showError() {
    document.getElementById("error-message").classList.remove("hidden");
}





function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    document.getElementById("login-container").classList.remove("hidden");
    document.getElementById("main-container").classList.add("hidden");
}





function showContent(type) {
    let contentDiv = document.getElementById("content");
    if (type === "movies") {
        contentDiv.innerHTML = `<h1>Watch Movies</h1>
            <p id="movie_q">Which movie do you want to watch?</p>

            <input type="text" id="movie-name" placeholder="Enter movie name">
            <button onclick="submitMovie()">Submit</button>
            <h4 id="movie_description_main">Top 10 IMDb Movies:</h4>
              
                <li id="movie_description">The Shawshank Redemption</li>
                <li id="movie_description">The Godfather</li>
                <li id="movie_description">The Dark Knight</li>
                <li id="movie_description">Pulp Fiction</li>
                <li id="movie_description">Schindler's List</li>
                <li id="movie_description">12 Angry Men</li>
                <li id="movie_description">Lord of the Rings: Return of the King</li>
                <li id="movie_description">Fight Club</li>
                <li id="movie_description">Forrest Gump</li>
                <li id="movie_description">Inception</li>
            `;
    } else if (type === "articles") {
        contentDiv.innerHTML = `<h3>Read Articles</h3>
            <p>Coming soon! Stay tuned for interesting reads.</p>`;
    } else if (type === "explore") {
        contentDiv.innerHTML = `<h3>Explore World</h3>
            <p>01. Bandarban</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sI4H8Fnn4dw?si=1S1tgsncE21HqR1H" allowfullscreen></iframe>
            <p class='bangla'>পৃথিবী সংস্কৃতি, প্রকৃতি এবং ইতিহাসের অসংখ্য সুতোয় বোনা একটি গালিচা...</p>

            <p>02. Cox's  Bazar</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YPxfs_hYOnw" allowfullscreen></iframe>
            <p class='bangla'>নীল জলরাশি আর সোনালি বালির মায়ায় মোড়ানো কক্সবাজার যেন বাংলাদেশের এক স্বপ্নঘেরা সমুদ্রকাব্য।</p>


            <p>03. Sylhet</p>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/eIKXxe2DqK0" allowfullscreen></iframe>
            <p class='bangla'>সবুজ পাহাড় আর চা-বাগানের শহর সিলেট প্রকৃতির মায়াবী এক কোণ।
</p>


            <p>04. Nikli</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hQJdka1r6DE" allowfullscreen></iframe>
            <p class='bangla'>নিকলী হাওর—জলের আয়নায় ভেসে থাকা আকাশ আর শান্ত প্রকৃতির নির্জন স্বর্গ।
</p>`;
    } else if (type === "AET") {
        contentDiv.innerHTML = `<h3>Agricultural Engineering Courses</h3>
            <p><span class="link" onclick="showDriveFolder1()">Level 1 Semester 1</span></p>
            <p><span class="link" onclick="showDriveFolder2()">Level 1 Semester 2</span></p>
            <p><span class="link" onclick="showDriveFolder3()">Level 2 Semester 1</span></p>
            <p><span class="link" onclick="showDriveFolder4()">Level 2 Semester 2</span></p>
            <p><span class="link" onclick="showDriveFolder5()">Level 3 Semester 1</span></p>
            <p><span class="link" onclick="showDriveFolder6()">Level 3 Semester 2</span></p>
            
            <div id="drive-folder" class="hidden"></div>`;
    }
}



function showDriveFolder1() {
    let folderDiv = document.getElementById("drive-folder");
    folderDiv.innerHTML = `<a href="https://drive.google.com/drive/folders/1KnVbNU1DQbT5iZabjggqdH3WbU5gGfjF" target="_blank" style="color: yellow;font-weight:bold;font-size:20px">
                Open Level 1 Semester 1 Folder
            </a>`;
    folderDiv.classList.remove("hidden");
}
function showDriveFolder2() {
    let folderDiv = document.getElementById("drive-folder");
    folderDiv.innerHTML = `<a href="https://drive.google.com/drive/folders/1Tko3rK5qUpkzzmvhN1tUdOJcwwFA2huN"target="_blank" style="color: yellow;font-weight:bold;font-size:20px">
                Open Level 1 Semester 2 Folder
            </a>`;
    folderDiv.classList.remove("hidden");
}
function showDriveFolder3() {
    let folderDiv = document.getElementById("drive-folder");
    folderDiv.innerHTML = `<a href="https://drive.google.com/drive/folders/1M4-YeVeRfMLY5pgOyZoJp6RQQhVLJwhB"target="_blank" style="color: yellow;font-weight:bold;font-size:20px">
                Open Level 2 Semester 1 Folder
            </a>`;
    folderDiv.classList.remove("hidden");
}
function showDriveFolder4() {
    let folderDiv = document.getElementById("drive-folder");
    folderDiv.innerHTML = `<a href="https://drive.google.com/drive/folders/1TUNRU-Plhc32I6DmCMPX43a7eReHdD5T"target="_blank" style="color: yellow;font-weight:bold;font-size:20px">
                Open Level 2 Semester 2 Folder
            </a>`;
    folderDiv.classList.remove("hidden");
}
function showDriveFolder5() {
    let folderDiv = document.getElementById("drive-folder");
    folderDiv.innerHTML = `<a href="https://drive.google.com/drive/folders/1ymTtK0-XdlROqKB7AXN7GhKjMtkxoGVe"target="_blank" style="color: yellow;font-weight:bold;font-size:20px">
                Open Level 3 Semester 1 Folder
            </a>`;
    folderDiv.classList.remove("hidden");
}

function showDriveFolder6() {
    let folderDiv = document.getElementById("drive-folder");
    folderDiv.innerHTML = `<a href="https://drive.google.com/drive/folders/1m0EeorXocw9KwH65xQSH3FvV6IRlLeM5"target="_blank" style="color: yellow;font-weight:bold;font-size:20px">
                Open Level 3 Semester 2 Folder
            </a>`;
    folderDiv.classList.remove("hidden");
}






function submitMovie() {
    let movieName = document.getElementById("movie-name").value.trim();
    if (movieName) {
        let mailtoLink = `mailto:rafsan.ocson1@gmail.com?subject=Movie Request&body=I want to watch: ${movieName}`;
        window.location.href = mailtoLink;
        alert("Your request has been sent!");
    } else {
        alert("Please enter a movie name.");
    }
}






document.getElementById("password").addEventListener("keydown", function (event) {
    if (event.key === "Enter") login();
});







document.getElementById("username").addEventListener("keydown", function (event) {
    if (event.key === "Enter") login();
});
