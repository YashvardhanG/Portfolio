var toggle;
var filename;

function get() 
{
    toggle = localStorage.getItem("toggle");
    filename = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);
    console.log(toggle);
    console.log(filename);
    if(toggle == 1)
    {
        document.addEventListener('DOMContentLoaded', (e) => {
            dark(filename);
        });
    }
}

function change() 
{
    if (document.getElementById("toggle").checked) 
    {
        console.log("1");
        localStorage.setItem("toggle", 1);
        dark(filename);
    }
    
    else 
    {
        console.log("2");
        localStorage.setItem("toggle", 2);
        light();
    }
}

function dark(filename) 
{
    var link = 'a {color: lightblue; font-weight: 900;}'
    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = link
    document.head.appendChild(styleSheet)

    if (filename == "index.html")
    {
        document.getElementById("toggle").checked = true;
        document.body.style.background = "#263140";
        document.body.style.color = "#fff";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundImage = 'url(./assets/images/BG-Home-Dark.png)';
        document.getElementById("LinkedIn").src = "./assets/images/LinkedIn-Dark.png";
        document.getElementById("GitHub").src = "./assets/images/GitHub-Dark.png";
        document.getElementById("Dribbble").src = "./assets/images/Dribbble-Dark.png";
        document.getElementById("projects").src = "./assets/images/Projects-Dark.svg";
        document.getElementById("blog").src = "./assets/images/Blog-Dark.svg";
        document.getElementById("connect").src = "./assets/images/Connect-Dark.svg";
        document.getElementById("active").style = "background: #263140;"
    }

    else if (filename == "project.html")
    {
        document.body.style.background = "#263140";
        document.body.style.color = "#fff";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundImage = 'url(/assets/images/BG-Projects-Dark.png)';
        document.getElementById("home").src = "/assets/images/Home-Dark.svg";
        document.getElementById("blog").src = "/assets/images/Blog-Dark.svg";
        document.getElementById("connect").src = "/assets/images/Connect-Dark.svg";
        document.getElementById("active").style = "background: #263140;"
        document.getElementById("pane").style = "background: #263140; border-right: 1px solid #263140;"
        elements = document.getElementsByClassName("pane-project");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border = "1px solid #263140";
            elements[i].style.color = "#fff";
        }
    }

    else if (filename == "blog.html")
    {
        document.body.style.background = "#263140";
        document.body.style.color = "#fff";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundImage = 'url(/assets/images/BG-Blog-Dark.png)';
        document.getElementById("home").src = "/assets/images/Home-Dark.svg";
        document.getElementById("projects").src = "/assets/images/Projects-Dark.svg";
        document.getElementById("connect").src = "/assets/images/Connect-Dark.svg";
        document.getElementById("active").style = "background: #263140;"
        document.getElementById("pane").style = "background: #263140; border-right: 1px solid #263140;"
        elements = document.getElementsByClassName("pane-project");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border = "1px solid #263140";
            elements[i].style.color = "#fff";
        }
    }

    else if (filename == "contact.html")
    {
        document.body.style.background = "#263140";
        document.body.style.color = "#fff";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundImage = 'url(/assets/images/BG-Contact-Dark.png)';
        document.getElementById("home").src = "/assets/images/Home-Dark.svg";
        document.getElementById("button").src = "/assets/images/Contact-Image-Dark.png";
        document.getElementById("blog").src = "/assets/images/Blog-Dark.svg";
        document.getElementById("projects").src = "/assets/images/Projects-Dark.svg";
        document.getElementById("active").style = "background: #263140;"
        document.getElementById("mail").src = "/assets/images/Icon-Mail-Dark.svg";
        document.getElementById("insta").src = "/assets/images/Icon-Insta-Dark.svg";
        document.getElementById("discord").src = "/assets/images/Icon-Discord-Dark.svg";
        document.getElementById("linkedin").src = "/assets/images/LinkedIn-Dark.png";
        document.getElementById("github").src = "/assets/images/GitHub-Dark.png";
    }

    else 
    {
        document.body.style.background = "#263140";
        document.body.style.color = "#fff";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundImage = 'url(./assets/images/BG-Home-Dark.png)';
        document.getElementById("active").style = "background: #263140;"
    }
}

function light()
{
    localStorage.setItem("toggle", 0);
    location.reload();
}

window.addEventListener("load", get());