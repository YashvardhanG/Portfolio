const blog = [
    {
        id: "apac",
        image: "/assets/images/Main-Graphics.svg",
        title: "Asia Virtual Conference",
        byline: "Journey Through a Design | 03.04.2021",
        heading1: "About",
        content1: "I am excited to share that I recently gave a talk called <b>'The Journey through a Design'</b> at the Asia Virtual Conference, organised by Hack Club. This primarily concerned itself with the intricacies of graphics designing and the workflow behind creating a design. I also gave some tips on graphics designing and hopefully it helps you set out your journey.",
        heading2: "Link to Workshop",
        content2: "To catch up on the workshop, go here: <a href = 'https://www.youtube.com/watch?v=_C208vKrK5Q&t=907s'>Journey Through a Design</a> "
    },
    
    {
        id: "literature",
        image: "/assets/images/Main-EdTech.svg",
        title: "Literature",
        byline: "Random Works of Literature",
        heading1: "Poem | Avalanche",
        content1: "I lived in the land of mist and snow,<br>Where no person was seen.<br>From the depth of the sea arose the mortal,<br>Who painted my house green.<br><br>One day I woke up tremored,<br>which quaked my house from the branch.<br>I went outside to see what happened,<br>My house was wrecked by the avalanche.<br><br>I kept staring at the scars,<br>I wrote my pain in a book.<br>I threw it away on the floor of stars,<br>And wished someday, I'll have someone to look.",
        heading2: "Poem | That Place",
        content2: "I wonder where that place would be,<br>Where I will find my life's key.<br><br>The place where the unstoppable time would cease,<br>The place which would bring my mind to peace.<br><br>The place where my heart would skip a beat,<br>Where my soul and me could finally meet.<br><br>'What is your dream?' if someone asks,<br>To find that place will be where the list would start."
    },

    {
        id: "untitled",
        image: "/assets/images/Main-CNN.svg",
        title: "Untitled",
        byline: "Untitled",
        heading1: "About",
        content1: "#"
    }
]


let index = 0;
let length = blog.length - 1;

function get()
{
    for (const key in blog) 
    {     
        document.getElementById(blog[key].id).addEventListener("click", function() {details(blog[key].id); bg(blog[key].id)}, false);       
    }
}

function details(id = "apac") 
{
    for (const key in blog) {
        if (id == blog[key].id) {
            index = key;
            var image = document.getElementById("main-image");
            var div = document.getElementById("project-detail");
            document.querySelectorAll('.dynamic').forEach(e => e.remove());

            image.src = blog[key].image;
            document.getElementById("title").innerHTML = blog[key].title;
            document.getElementById("byline").innerHTML = blog[key].byline;
                        
            let index_length = Object.keys(blog[key]).length;
            let head_count = ((index_length - 4)/2)
            var values = Object.values(blog[key]);

            for(let i = 1; i<=head_count; i++)
            {
                let current = (3 + i);
                var h2 = ("<h2 class = 'dynamic'>" + values[current + i-1] + "</h2>");
                let p = ("<p class = 'dynamic'>" + values[current + i] + "</p>");

                div.innerHTML += h2;
                div.innerHTML += p;
            }    
        }
    }

    if (id == blog[0].id)
    {
        document.getElementById("back").style.visibility = "hidden";
    }
    
    else if (id == blog[length].id)
    {
        document.getElementById("next").style.visibility = "hidden";
    }

    else
    {
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("back").style.visibility = "visible";
    }
}

function bg(id = "apac")
{
    var select = `.pane-project#` + id +` {background-color: #8D24DF; border: 5px solid white; border-radius: 0px 20px 20px 20px; outline-offset: 3px; color: white;}
                  .pane-project#` + id + ` h2 {font-weight: 600;}`

    for (const key in blog) {
        var unselect = `.pane-project#` + blog[key].id +` {background-color: #fff; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
                        .pane-project#` + blog[key].id + ` h2 {font-weight: 100;}`
        
        var styleSheet = document.createElement("style")
        styleSheet.type = "text/css"
        styleSheet.innerText = unselect
        document.head.appendChild(styleSheet)
    }

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = select
    document.head.appendChild(styleSheet)
}

function next()
{
    if (index != length)
    {
        index++;
    } 
    
    bg(blog[index].id);
    details(blog[index].id); 
    document.getElementById(projects[index].id).scrollIntoView(); 
}

function back()
{
    if (index != 0) 
    {
        index--;       
    }
    
    bg(blog[index].id);
    details(blog[index].id); 
    document.getElementById(projects[index].id).scrollIntoView(); 
}

window.addEventListener("load", bg("apac"));
window.addEventListener("load", details("apac"));
window.addEventListener("load", get());
window.addEventListener("keyup", function(e) {if (e.keyCode === 39){next();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 37){back();}});