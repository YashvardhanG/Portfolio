var toggle;
var filename;
var user_count;

function get() 
{
    toggle = localStorage.getItem("toggle");
    filename = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);

    // console.log(toggle);
    // console.log(filename);
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
        // console.log("1");
        localStorage.setItem("toggle", 1);
        dark(filename);
    }
    
    else 
    {
        // console.log("2");
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
        document.body.style.backgroundImage = 'url(./assets/images/BG-Home-Dark.png)';
        document.body.style.backgroundSize = 'cover';
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
        document.body.style.backgroundImage = 'url(/assets/images/BG-Projects-Dark.png)';
        document.body.style.backgroundSize = 'cover';
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
        document.body.style.backgroundImage = 'url(/assets/images/BG-Blog-Dark.png)';
        document.body.style.backgroundSize = 'cover';
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
        document.body.style.backgroundImage = 'url(/assets/images/BG-Contact-Dark.png)';
        document.body.style.backgroundSize = 'cover';
        document.getElementById("home").src = "/assets/images/Home-Dark.svg";
        document.getElementById("button").src = "/assets/images/CV-Dark.svg";
        document.getElementById("contact").src = "/assets/images/Contact-Image-Dark.png";
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
        dark("index.html");
    }

    if(window.matchMedia("(max-width: 768px)").matches)
    {
        document.body.style.backgroundAttachment = 'fixed';
    }
}

function light()
{
    localStorage.setItem("toggle", 0);
    location.reload();
}

function toggle_shortcut()
{
    toggle = localStorage.getItem("toggle");   
    if(toggle == "0")
    {
        localStorage.setItem("toggle", 1);
        location.reload();
    }

    else
    {
        localStorage.setItem("toggle", 0);
        location.reload();
    }
}

var display = 0;
function helpbox()
{
    toggle = localStorage.getItem("toggle"); 
    var helpbox = document.getElementById("helpbox");
    var popup = document.getElementById("popup");
    var helpbox_content = document.getElementById("helpbox_content");

    if(toggle == "0")
    {
        if(display == 0)
        {
            helpbox.style.display = "block";
            popup.style.display = "none";
            display = 1;
        }

        else
        {
            helpbox.style.display = "none";
            display = 0;
        }
    }

    else
    {
        if(display == 0)
        {
            helpbox.style.display = "block";
            helpbox_content.style.backgroundColor = "#263140";
            helpbox_content.style.borderColor = "#000";
            popup.style.display = "none";
            display = 1;
        }

        else
        {
            helpbox.style.display = "none";
            display = 0;
        }
    }
}

var displaypop = 0;
function popup()
{
    toggle = localStorage.getItem("toggle"); 
    var helpbox = document.getElementById("popup");
    var helpbox_content = document.getElementById("popup_content");

    if(toggle == "0")
    {
        if(displaypop == 0)
        {
            helpbox.style.display = "block";
            displaypop = 1;
        }

        else
        {
            helpbox.style.display = "none";
            displaypop = 0;
        }
    }

    else
    {
        if(displaypop == 0)
        {
            helpbox.style.display = "block";
            helpbox_content.style.backgroundColor = "#263140";
            helpbox_content.style.borderColor = "#000";
            displaypop = 1;
        }

        else
        {
            helpbox.style.display = "none";
            displaypop = 0;
        }
    }
}

function pop()
{
    user_count = localStorage.getItem("times");
    if(user_count == null)
    {
        localStorage.setItem("times", 0);
        setTimeout(function()
        {
            popup();
        }, 1000); 
    }

    if (filename == "index.html")
    {
        var new_count =  parseInt(localStorage.getItem("times")) + 1;
        localStorage.setItem("times", new_count);
        user_count = localStorage.getItem("times");
        
        // console.log(user_count);
        if(((parseInt(user_count) % 2) == 0))
        {   
            setTimeout(function()
            {
                popup();
            }, 1000); 
        }
    }
}

window.addEventListener("load", get());
window.addEventListener("load", pop());
window.addEventListener("keyup", function(e) {if (e.keyCode === 49){location.replace("/index.html");}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 50){location.replace("/html/project.html");}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 51){location.replace("/html/blog.html");}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 52){location.replace("/html/contact.html");}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 84){toggle_shortcut();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 191){helpbox();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 80){popup();}});