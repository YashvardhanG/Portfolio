const projects = [
    {
        id: "cynthia",
        image: "/assets/images/Main-Cynthia.svg",
        title: "Cynthia",
        byline: "Artificial Intelligent Assistant",
        heading1: "About",
        content1: "Cynthia is an Artificial Intelligent, personalized Computer Assistant. It works on two modes; Voice Command Recognition and Command-Line based text mode. Cynthia has a variety of features and, is much more than the conventional weather, memo assistant. It can control the entirety of your device, including your web browser, just with your voice. You can personalize this assistant to any extent by adding customized commands.<br><br>Cynthia can execute basic functions like commencing a countdown, information about the weather, and even perform an advanced task such as helping you in taking down notes and read them as well. This Assistant works in two modes, Voice and Text based modes. By default, it runs in text mode (command prompt). The modes can easily be switched by just writing or speaking, 'change mode' as your command.",
        heading2: "Functionality",
        content2: "The purpose behind building this Computer Assistant is to reduce the effort that is required in performing very menial tasks. With this, you may open stuff in your browser, laptop, and further control it just by typing in a command or simply saying it out loud. The assistant is yet in its initial stages and hence, the scope of commands and functionalities is limited. You may just fork this project, and recommended and add any sort of functionality which you think might add to the overall performance.",
        heading3: "Source Code",
        content3: "You may go ahead and take a look at the project here: <a href='https://github.com/YashvardhanG/Cynthia'>Source Code</a>"
    },
    
    {
        id: "td",
        image: "/assets/images/Main-TD.svg",
        title: "Tri-Death",
        byline: "Arcade Game",
        heading1: "About",
        content1: "Tri-Death combines a fast-paced gameplay with infinite levels to create an exciting adventure like no other. Tri-Death features many modes of varying difficulties, each mode having a different feel and a new adventure packed. The objective to not to dodge your enemies, it is to survive. Keep the aim of survival in your minds, listen to the music, dodge your enemies and continue on your endless adventure!",
        heading2: "Play Store Link",
        content2: "To download the game on your android device: <a href='https://play.google.com/store/apps/details?id=com.spiralcosmos.triangleofdeath'>Click Here</a>"
    },

    {
        id: "cnn",
        image: "/assets/images/Main-CNN.svg",
        title: "CNN",
        byline: "Convolutional Neural Networks",
        heading1: "About",
        content1: "Neural networks reflect the behavior of the human brain, allowing computer programs to recognize patterns and solve common problems in the fields of AI, machine learning, and deep learning. Artificial neural networks (ANNs) are comprised of a node layers, containing an input layer, one or more hidden layers, and an output layer. Each node, or artificial neuron, connects to another and has an associated weight and threshold. If the output of any individual node is above the specified threshold value, that node is activated, sending data to the next layer of the network. Otherwise, no data is passed along to the next layer of the network.<br><br>A <b>Convolutional Neural Network</b> (CNN/ConvNet) is, a class of neural networks that specializes in processing data that has a grid-like topology, such as an image. A digital image is a binary representation of visual data. It contains a series of pixels arranged in a grid-like fashion that contains pixel values to denote how bright and what color each pixel should be.",
        heading2: "Functionality",
        content2: "This project consists of various examples of Convolutional Neural Networks developed using Tensorflow which is integrated in the Python programming language. Since Tensorflow has been integrated in the Python Programming language, it requires some modules to operate. <br><br>You may explore the working of a Convolutional Neural Network <a href = 'https://towardsdatascience.com/convolutional-neural-network-17fb77e76c05#:~:text=Fully%20Connected%20Layer%20is%20simply,into%20the%20fully%20connected%20layer.'>Here</a>.",
        heading3: "Source Code",
        content3: "You may head on to <a href='https://github.com/YashvardhanG/CNN'>Source Code</a> and view all the CNN models developed."
    },

    {
        id: "imagerec",
        image: "/assets/images/Main-ImageRec.svg",
        title: "Image Recognition",
        byline: "CNN, Tensorflow, Keras & Python",
        heading1: "About",
        content1: "This Image Recognition/Classification Software is built using the CIFAR-10 Dataset (Canadian Institute for Advanced Research, 10 Classes). The CIFAR-10 dataset consists of 60000 32x32 colour images in 10 classes, with 6000 images per class. There are 50000 training images and 10000 test images. <br><br>The dataset is divided into five training batches and one test batch, each with 10000 images. The test batch contains exactly 1000 randomly-selected images from each class. The training batches contain the remaining images in random order, but some training batches may contain more images from one class than another. Between them, the training batches contain exactly 5000 images from each class.",
        heading2: "Source Code",
        content2: "You may head on to <a href='https://github.com/YashvardhanG/CNN/tree/main/Image%20Recognition%20Software'>Image Recognition</a> to explore and know more about the project."
    },

    {
        id: "edtech",
        image: "/assets/images/Main-EdTech.svg",
        title: "Ed-Tech",
        byline: "Educational Technology Platform",
        heading1: "About",
        content1: "Educational technology is the combined use of computer hardware, software, and educational theory and practice to facilitate learning. There is always a need for a system that will help students attempt exams .Thus, there is a desperate need for an Ed-tech platform especially crafted for college students, which provides all the Above mentioned facilities and many more.<br><br>As students enter university life, they don’t have prescribed textbooks or any standard material or notes from professors. A lot of responsibility falls on the students to educate themselves, and on many occasions even though they know what they have to cover, they are left to scour hundreds of pages to find the website for them which covers their needs, and even then if they have doubts, getting them answered becomes a task.<br><br>So we set out to create a platform, a single platform where a university student can get access to: <br>-Curated course material covering hundreds of courses<br>-A library of downloadable material to help study offline and make study self-paced.<br>-Tools, tips and techniques to make learning easy and efficient.",
        heading2: "Functionality",
        content2: "Since this is a prototype to a fully functioning Ed-Tech Platform, there tends to be limited functionality on the platform. There are a limited set of courses but, the links to all resources are fully functioning. The login/signup to the portal does lead to an actual registration to the database but, there tends to be limited functionality there as well.",
        heading3: "Source Code",
        content3: "You may take a look at the platform here: <a href = 'https://yashvardhang.github.io/Ed-Tech/'>Ed-Tech Website</a>. <br>The source code for this project and all it's resources are available at: <a href = 'https://github.com/YashvardhanG/Ed-Tech'>Source Code</a>."
    },

    {
        id: "facerec",
        image: "/assets/images/Main-FaceRec.svg",
        title: "Facial Recognition",
        byline: "OpenCV, Tensorflow and Python",
        heading1: "About",
        content1: "This Facial Recognition project was built in order to study the intricacies of Facial Biometrics and, the multiple training models used behind the process. A facial recognition system is a technology capable of matching a human face from a digital image or a video frame against a database of faces, typically employed to authenticate users through ID verification services, works by pinpointing and measuring facial features from a given image.",
        heading2: "Functionality",
        content2: "A Facial Recognition software built using Python, Numpy and OpenCV. It captures photos, trains the data model and then recognizes using the trained model. All the pictures captured are stored locally ie: no data is transferred hence, making this a completely private and safe recognition system.",
        heading3: "Source Code",
        content3: "The detailed description and code has been provided here: <a href = 'https://github.com/YashvardhanG/Facial-Recognition'>Source Code</a>."
    },

    {
        id: "weather",
        image: "/assets/images/Main-Weather.svg",
        title: "Weather App",
        byline: "Weather Prediction",
        heading1: "About",
        content1: "A general and graphically pleasing weather forecasting application made using python which retrieves and displays information about the current temperature and weather, as well as the future predictions based on the current location of the user.",
        heading2: "Source Code",
        content2: "The source code has been provided here: <a href = '#'>Source Code</a>"
    },

    {
        id: "dbms",
        image: "/assets/images/Main-DBMS.svg",
        title: "Database Management System",
        byline: "MySQL & Python",
        heading1: "About",
        content1: "Database Management System (DBMS) is a software for storing and retrieving users’ data while considering appropriate security measures. It consists of a group of programs which manipulate the database. The DBMS accepts the request for data from an application and instructs the operating system to provide the specific data. In large systems, a DBMS helps users and other third-party software to store and retrieve data.<br><br>A Python-SQL Integrated Database Management System software. It uses a Command Line Program as the front-end and, a SQL based database as the back-end. This DBMS provides the ease of storing and retrieving data.",
        heading2: "Source Code",
        content2: "The source code has been provided here: <a href = '#'>Source Code</a>"
    },

    {
        id: "graphics",
        image: "/assets/images/Main-Graphics.svg",
        title: "Graphics Designing",
        byline: "UI/UX | Figma",
        heading1: "About",
        content1: "Various projects covering designing of logos, backgrounds, assets, banners, posters, and more. Many of them are available on this website, and feel free to connect with me for more.",
        heading2: "Designs",
        content2: "You may preview some of my graphic designing work here: <a href = 'https://dribbble.com/yashvardhang'>Graphics Designing</a><br>Majority of the icons present on this website have also been designed."
    },

    {
        id: "threed",
        image: "/assets/images/Main-3D.svg",
        title: "3D Modelling",
        byline: "Blender",
        heading1: "About",
        content1: "Three dimensional design and animation. Numerous projects including phone mockups, game graphics designing, backgrounds and more. 3D modelling was done using the <b>Blender</b> software. To know more about the software and use this tool, head on <a href = 'https://www.blender.org/'>here.</a>",
        heading2: "Designs",
        content2: "The links to some of the my 3D design work has been given below:<br><br><img src='/assets/images/Project-Images/3D-1.png'/>"
    },

    {
        id: "compass",
        image: "/assets/images/Main-Compass.svg",
        title: "Compass App",
        byline: "Flutter and Dart",
        heading1: "About",
        content1: "A simple minimalist compass application built using Flutter and Dart. To explore more about Flutter and understand its usage, head on <a href = 'https://flutter.dev/'>here</a>.",
        heading2: "Source Code",
        content2: "The prototype file: <a href = '#'>Figma Prototype</a><br>Source Code: <a href = '#'>Code</a>"
    },

    {
        id: "mit",
        image: "/assets/images/Main-MIT.svg",
        title: "MIT App Inventor",
        byline: "Various Projects",
        heading1: "About",
        content1: "Various projects made using MIT App Inventor, including health application, sketchboard, and a basic calculator. MIT App Inventor is a great tool to build your own apps without coding. It's simple block structure makes it easier to understand the logic behind app development, and can be used to make fun projects. You may head on <a href = 'https://appinventor.mit.edu/'>Here</a> to build your own projects without coding.",
        heading2: "Projects",
        content2: "The samples of some apps built, their files and details: <a href = 'https://github.com/YashvardhanG/MIT-App-Inventor-2'>MIT App Projects</a>."
    },

    {
        id: "video",
        image: "/assets/images/Main-Video.svg",
        title: "Video Projects",
        byline: "DaVinci Resolve | Sony Vegas Pro",
        heading1: "About",
        content1: "A set of documentaries and, specific purpose projects shot and then edited in softwares such as Sony Vegas Pro, DaVinci Resolve and After Effects. In order to make professional videos and general video edits, my recommendation will be: <a href = 'https://www.blackmagicdesign.com/in/products/davinciresolve/'>DaVinci Resolve</a>, which is an absolutely free video editing software.",
        heading2: "Video Projects",
        content2: "Some Video Projects are given below:<br><br><b>● 3D Design</b> - Blender | <b>App Prototype</b> - Figma | <b>Video Editing</b> - DaVinci Resolve<br><br><video width = '500' controls autoplay loop><source src='/assets/images/Project-Images/Video-1.mp4' type='video/mp4'></video>"
    },

    {
        id: "movierec",
        image: "/assets/images/Main-MovieRec.svg",
        title: "Movie Recommendation Software",
        byline: "Sklearn & Python",
        heading1: "About",
        content1: "This Movie Recommendation system picks up a random movie from the dataset and suggests <b>10 similar movies</b> according to the genre, director, title and more. This project was completely made using Sklearn and Python. This recommendation software gives you similar movies through the large dataset of movies fed into it. For more accuracy and suggestions, the database can be expanded.",
        heading2: "Source Code",
        content2: "You can find the source code for this project <a href = 'https://github.com/YashvardhanG/Movie-Recommendation'>Here</a>."
    },

    
    {
        id: "website",
        image: "/assets/images/Main-Website.svg",
        title: "Website Development",
        byline: "HTML, CSS & JS",
        heading1: "About",
        content1: "Developed and contributed in multiple projects concerned WebDev. I usually follow the conventional HTML/CSS/JS approach to develop websites. The links to some of the websites have been given below.",
        heading2: "Websites",
        content2: "● This Website (Portfolio): <a href = '/index.html'>Portfolio</a><br>● Ed-Tech Platform: <a href = 'https://yashvardhang.github.io/Ed-Tech/'>Ed-Tech</a><br>● Spiral Cosmos: <a href = 'www.spiralcosmos.com'>Website</a>"
    },
    
    {
        id: "spiralcosmos",
        image: "/assets/images/Main-SpiralCosmos.svg",
        title: "Spiral Cosmos",
        byline: "Open Source Community",
        heading1: "About",
        content1: "Spiral Cosmos is an open-source organization created for the purpose of learning and growing. It works on various projects with the main purpose of improving along the way. It has been founded and maintained by me.",
        heading2: "Website",
        content2: "To know more about Spiral Cosmos, you may head on <a href = 'www.spiralcosmos.com'>Here</a>"
    },
    
    {
        id: "robotics",
        image: "/assets/images/Main-Robotics.svg",
        title: "Robotics",
        byline: "Hardware Projects using Arduino/Atmega",
        heading1: "About",
        content1: "Robotics is an interdisciplinary branch of engineering and science that includes information engineering, computer science, and others. Robotics deals with the design, construction, operation, and use of robots, as well as computer systems for their control, sensory feedback, and information processing.<br><br>Arduino/Atmega Boards are used for creating interactive objects or environments. These can interact with buttons, LEDs, motors, speakers, GPS units, cameras, the internet and more.<br><br>I've made several projects using different kinds of Arduino boards for functionality. The projects range from basic projects like Line Follower, Block Follower to even using the boards to analyze and understand the concepts of digital and analog signals.",
        heading2: "Projects",
        content2: "Some of the projects are given below:<br><br>● Various Applications of an Infrared Sensor<br>● Analyzing and understanding the concepts of digital and analog signals<br>● Line Follower Bot<br>● Obstruction Follower<br><br><img src='/assets/images/Project-Images/Robot-1.jpg'/><img src='/assets/images/Project-Images/Robot-2.jpg' style='margin-left:2vw;'/>"
    },

    {
        id: "earthquake",
        image: "/assets/images/Main-Earthquake.svg",
        title: "Earthquake Prediction Algorithm",
        byline: "Future Project | Python & R-Analysis",
        heading1: "About",
        content1: "A Machine learning project using Python and R-Analysis. It will be provided with a dataset of recent Earthquakes in the past few years. This will then try to find relevant similarities and possibly predict any future earthquakes. Although this project is wildly far-fetched, the slight possibility of predicting a natural phenomenon according to a prediction algorithm is intriguing. Incase you are up for collaborating on this project, feel free to connect with me.",
    },
    
    {
        id: "musicrec",
        image: "/assets/images/Main-MusicRec.svg",
        title: "Music Recommendation Software",
        byline: "Future Project | Python & Tensorflow",
        heading1: "About",
        content1: "A Music Recommendation System built with a million song dataset. It provides the listener a list of 5 songs based on the song they are currently listening to. This would run an algorithm and find all similar songs by filtering it down to genre, mood, year, artists and more. <br><br>Further, this algorithm could be integrated with a UI based architecture to work as a Music application.",
    }
]


let index = 0;
let length = projects.length - 1;
var toggle = localStorage.getItem("toggle");

function get()
{
    for (const key in projects) 
    {     
        document.getElementById(projects[key].id).addEventListener("click", function() {details(projects[key].id); bg(projects[key].id)}, false);       
    }
}

function details(id = "cynthia") 
{
    for (const key in projects) {
        if (id == projects[key].id) {
            index = key;
            var image = document.getElementById("main-image");
            var div = document.getElementById("project-detail");
            document.querySelectorAll('.dynamic').forEach(e => e.remove());

            image.src = projects[key].image;
            document.getElementById("title").innerHTML = projects[key].title;
            document.getElementById("byline").innerHTML = projects[key].byline;
                        
            let index_length = Object.keys(projects[key]).length;
            let head_count = ((index_length - 4)/2)
            var values = Object.values(projects[key]);

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

    if (id == projects[0].id)
    {
        document.getElementById("back").style.visibility = "hidden";
    }
    
    else if (id == projects[length].id)
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

function bg(id = "cynthia")
{
    var select = `.pane-project#` + id +` {background-color: #8D24DF; border: 5px solid white; border-radius: 0px 20px 20px 20px; outline-offset: 3px; color: white;}
                  .pane-project#` + id + ` h2 {font-weight: 600;}`

    for (const key in projects) 
    {
        if(toggle == 1)
        {
            var unselect = `.pane-project#` + projects[key].id +` {background-color: #263140; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
                            .pane-project#` + projects[key].id + ` h2 {font-weight: 100;}`  
        }

        else
        {
            var unselect = `.pane-project#` + projects[key].id +` {background-color: #fff; border: 0px solid white; border-radius: 0px 0px 0px 0px; outline-offset: 3px; color: #263140;}
                            .pane-project#` + projects[key].id + ` h2 {font-weight: 100;}`    
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
    
    bg(projects[index].id);
    details(projects[index].id);
    document.getElementById(projects[index].id).scrollIntoView(); 
}

function back()
{
    if (index != 0) 
    {
        index--;       
    }
    
    bg(projects[index].id);
    details(projects[index].id); 
    document.getElementById(projects[index].id).scrollIntoView(); 
}

window.addEventListener("load", bg("cynthia"));
window.addEventListener("load", details("cynthia"));
window.addEventListener("load", get());
window.addEventListener("keyup", function(e) {if (e.keyCode === 39){next();}});
window.addEventListener("keyup", function(e) {if (e.keyCode === 37){back();}});