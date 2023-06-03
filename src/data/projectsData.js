import fitwork from './../assets/image/projects/fitwork.png';
import searchprofile from './../assets/image/projects/searchprofile.png';
import hangman from './../assets/image/projects/hangman.png';
import converter from './../assets/image/projects/converter.png';
import portefolio from './../assets/image/projects/portefolio.png';
import weatherapp from './../assets/image/projects/weatherapp.png';
import store from './../assets/image/projects/store.png';
import maplante from './../assets/image/projects/plants.png';
import statistics from './../assets/image/projects/statistics.png';

const projectsData = 
    [
        {
            "id": 1,
            "title": "Fit Work",
            "link": "https://fitwork-app.netlify.app/",
            "repo": "https://github.com/LeaBani/fit-work-front",
            "image": fitwork,
            "description": "This project was realized in Team (5 people). This application is about the best practise at work to maintain a good health.",
            tags: ["ReactJS", "Redux", "Sass", "Bootstrap", "NodeJS", "Sqitch", "PostgreSQL", "Express", "Heroku", "eslint"],
            "main": true
        },
        {
            "id": 2,
            "title": "GitHub Research",
            "link": "https://trouve-ton-profil-github.netlify.app/",
            "repo": "https://github.com/LeaBani/Trouve-ton-profil-GitHub",
            "image": searchprofile,
            "description": "This browser was created during my apprenticeship. You can research any GitHub profile with a key word.",
            tags: ["ReactJS", "Semantic UI", "API"],
            "main": false
        },
        {
            "id": 3,
            "title": "Converter",
            "link": "https://github.com/LeaBani/converter",
            "repo": "https://github.com/LeaBani/converter",
            "image": converter,
            "description": "The converter permitted me to discover the OOPS. With this app, you can convert any avaiable currency.",
            tags: ["ReactJS","Prop-types","POO"],
            "main": false
        },
        {
            "id": 4,
            "title": "My portfolio",
            "link": "https://leabani-portfolio.netlify.app/",
            "repo": "https://github.com/LeaBani/my-portefolio",
            "image": portefolio,
            "description": "This Web App that you are currently visiting is my homemade portfolio.",
            tags: ["ReactJS", "Bootstrap","Framer Motion","EmailJS"],
            "main": false
        },
        {
            "id": 5,
            "title": "Hangman",
            "link": "https://github.com/LeaBani/hangman-ts",
            "repo": "https://github.com/LeaBani/hangman-ts",
            "image": hangman,
            "description": "This project has been done to discover TypeScript with ReactJS. ",
            tags: ["ReactJS","TypeScript","Vite" ],
            "main": false
        },
        {
            "id": 6,
            "title": "Weather App",
            "link": "https://github.com/LeaBani/weather-app",
            "repo": "https://github.com/LeaBani/weather-app",
            "image": weatherapp,
            "description": "With this app, I've discovered Angular. I've been using TypeScript and an external API to collect the weather information.",
            tags: ["Angular", "TypeScript","CSS","POO"],
            "main": false
        },
        {
            "id": 7,
            "title": "Online Store",
            "link": "https://github.com/LeaBani/store-angular",
            "repo": "https://github.com/LeaBani/store-angular",
            "image": store,
            "description": "In order to learn to use a secure payment tool, I've used the Stripe API in this project. I've build a fake online store.",
            tags: ["Angular","TypeScript","Tailwind","POO","Stripe","NodeJS","Express", "API"],
            "main": false
        },
        {
            "id": 8,
            "title": "Statistics",
            "link": "https://github.com/LeaBani/statistics-with-recharts",
            "repo": "https://github.com/LeaBani/statistics-with-recharts",
            "image": statistics,
            "description": "This is a dashboard with the Youtube API. Each visitor can visualize the Most Popular Videos of his region.",
            tags: ["ReactJS","RechartsJS","Tailwind","Youtube API"],
            "main": true
        },
        {
            "id": 9,
            "title": "Maplante",
            "link": "https://github.com/florine89/Plant-front",
            "repo": "https://github.com/florine89/Plant-front",
            "image": maplante,
            "description": "This project is a collaborative work. This fullstack App should be an exchange platform for Plants lovers.",
            tags: ["NextJS","NextAuth","TypeScript","Tailwind","Trefle API","Prisma","PostgreSQL" ],
            "main": true
        }
        
    ];
    
export default projectsData;




