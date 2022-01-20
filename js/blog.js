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
        id: "courses",
        image: "/assets/images/Main-Certificate.svg",
        title: "Online Courses",
        byline: "List of Completed Courses",
        heading1: "About",
        content1: "Various courses dealing with an array of topics were completed. These courses were offered by different institutions and organizations. These were thorough, precise and informative.",
        heading2: "Courses",
        content2: "Here is the list of all completed courses:<br><br>● <a href = 'https://www.coursera.org/account/accomplishments/verify/ASFB86ZUESYL'>High-Fidelity Designs and Prototypes</a> - Google<br>● <a href = 'https://www.coursera.org/account/accomplishments/verify/KL7V77N3EB5J'>AWS Cloud Technical Essentials</a> - Amazon Web Services (AWS)<br>● <a href = 'https://www.coursera.org/account/accomplishments/verify/H9PFQ2ZXLA3S'>Introduction to TensorFlow for AI, ML, and Deep Learning</a> - DeepLearning.AI<br>● <a href = 'https://www.credly.com/badges/d10c9872-78c2-4230-b577-a3179c0b1bcb/public_url'>Introduction to Packet Tracer</a> - Cisco Networking Academy<br>● <a href = 'https://www.coursera.org/account/accomplishments/verify/RYMCVM774G5A'>Interactivity with JavaScript</a> - University of Michigan<br>● <a href = 'https://www.coursera.org/account/accomplishments/verify/PPV9UM6UM4AH'>Responsive Website Basics</a> - University of London<br>● <a href = 'https://www.coursera.org/account/accomplishments/verify/FX8Q8C9UR2LU'>Data Science</a> - IBM<br>● <a href = ''>Fundamentals of Digital Marketing</a> - Google<br>● <a href = 'https://www.futurelearn.com/certificates/hnqog2o'>Introduction to Creative AI</a> - University of Arts, London<br>● <a href = 'https://www.futurelearn.com/certificates/6x4xbpg'>Computer Programming for Everyone</a> - University of Leeds<br>"
    },
    
    {
        id: "achieve",
        image: "/assets/images/Main-Trophy.svg",
        title: "Achievements",
        byline: "Extra and Co-Curricular",
        heading1: "Taekwon-Do",
        content1: "Enrolled in the <b>International Taekwon-Do Federation (ITF)</b> as a Black Belt and National Judge/Umpire.<br><br>● Black Belt, Dan-1. <br>● Silver Medalist - National Taekwon-Do Championship. <br>● Received the National Umpire and Judge Certification.<br>● Umpired in Taekwon-Do State, and Zonal Level Championships. <br>● Medalist in multiple Delhi State Championships",
        heading2: "Model United Nations (MUN)",
        content2: "Model United Nations is a simulation that imitates the procedures of the United Nations finding solutions for real-world problems, done through an academic simulation of the United Nations procedure.<br><br>● Ignite MUN 3.0 : Chairperson of the UNODC Committee<br>● Ignite MUN 2.0 : Vice-Chairperson of the ECOSOC Committee<br>● Ignite MUN 1.0 : Best Delegate<br>● Navy Children MUN : Participation<br>● MUN : Participation"
    },

    {
        id: "literature",
        image: "/assets/images/Main-Literature.svg",
        title: "Literature",
        byline: "Random Works of Literature",
        heading1: "Poem | Avalanche",
        content1: "I lived in the land of mist and snow,<br>Where no person was seen.<br>From the depth of the sea arose the mortal,<br>Who painted my house green.<br><br>One day I woke up tremored,<br>which quaked my house from the branch.<br>I went outside to see what happened,<br>My house was wrecked by the avalanche.<br><br>I kept staring at the scars,<br>I wrote my pain in a book.<br>I threw it away on the floor of stars,<br>And wished someday, I'll have someone to look.",
        heading2: "Poem | That Place",
        content2: "I wonder where that place would be,<br>Where I will find my life's key.<br><br>The place where the unstoppable time would cease,<br>The place which would bring my mind to peace.<br><br>The place where my heart would skip a beat,<br>Where my soul and me could finally meet.<br><br>'What is your dream?' if someone asks,<br>To find that place will be where the list would start."
    }
]


let index = 0;
let length = blog.length - 1;
var toggle = localStorage.getItem("toggle");

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

    var links = document.getElementById("project-detail").querySelectorAll('a');
    for (var i = 0; i < links.length; i++)
    {
        var a = links[i];
        if(a.hostname != location.hostname) 
        {
                a.rel = 'noopener';
                a.target = '_blank';
        }
    }
}

function bg(id = "apac")
{
    var select = `.pane-project#` + id +` {background-color: #8D24DF; border: 5px solid white; border-radius: 0px 20px 20px 20px; outline-offset: 3px; color: white;}
                  .pane-project#` + id + ` h2 {font-weight: 600;}`

    for (const key in blog) {
        if(toggle == 1)
        {
            var unselect = `.pane-project#` + blog[key].id +` {background-color: #263140; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
                            .pane-project#` + blog[key].id + ` h2 {font-weight: 100;}`
        }

        else
        {
            var unselect = `.pane-project#` + blog[key].id +` {background-color: #fff; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
            .pane-project#` + blog[key].id + ` h2 {font-weight: 100;}`
        }
        
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