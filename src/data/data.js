import { Children } from "react"

const bookmarksData = [
    {
        id:"1",
        title:"Search",
        url:"",
        img:"folder",
        children: [
            {
                id:"1-1",
                title:"Google",
                url:"https://www.google.com/", 
                img:"https://www.google.com/favicon.ico",
                children:""
            },
            {
                id: "1-2",
                title: "Startpage",
                url:"https://startpage.com/",
                img:"https://startpage.com/favicon.ico",
                children:""
            },
            {
                id: "1-3",
                title: "DuckDuckGo",
                url:"https://duckduckgo.com/",
                img:"https://duckduckgo.com/favicon.ico",
                children:""
            },
        ]
    },
    {
        id:"2",
        title:"News",
        url:"",
        img:"folder",
        children: [
            {
                id:"2-1",
                title:"THN",
                url:"https://thehackernews.com/", 
                img:"https://thehackernews.com/favicon.ico",
                children:""
            },
            {
                id: "2-2",
                title: "EttremeTech",
                url:"https://www.extremetech.com/",
                img:"https://www.extremetech.com/favicon.ico",
                children:""
            },
            {
                id: "2-3",
                title: "HaD",
                url:"https://hackaday.com/",
                img:"https://hackaday.com/favicon.ico",
                children:""
            },
            {
                id: "2-4",
                title: "Economist",
                url:"https://www.economist.com/",
                img:"https://www.economist.com/favicon.ico",
                children:""
            },
            {
                id: "2-5",
                title: "Hacker News",
                url:"https://news.ycombinator.com/",
                img:"https://news.ycombinator.com/favicon.ico",
                children:""
            },
        ]
    },
    {
        id:"3",
        title:"Tools",
        url:"",
        img:"folder",
        children: [
            {
                id:"3-1",
                title:"Math",
                url:"", 
                img:"folder",
                children:[
                    {
                        id:"3-1-1",
                        title:"Triangle Calculator",
                        url:"https://www.calculator.net/triangle-calculator.html", 
                        img:"https://www.calculator.net/favicon.ico",
                        children:""
                    },
                    {
                        id: "3-1-2",
                        title: "Symbolab Math solver",
                        url:"https://www.symbolab.com/",
                        img:"https://www.symbolab.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "3-1-3",
                        title: "WolframAlpha Math solver",
                        url:"https://www.wolframalpha.com/",
                        img:"https://www.wolframalpha.com/favicon.ico",
                        children:""
                    },
                ]
            },
            {
                id:"3-2",
                title:"Text",
                url:"", 
                img:"folder",
                children:[
                    {
                        id: "3-2-1",
                        title: "DiffChecker",
                        url:"https://www.diffchecker.com/",
                        img:"https://www.diffchecker.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "3-2-2",
                        title: "CiteThisForMe citation maker",
                        url:"https://www.citethisforme.com",
                        img:"https://www.citethisforme.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "3-2-3",
                        title: "MyBib citation maker",
                        url:"https://www.mybib.com/",
                        img:"https://www.mybib.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "3-2-4",
                        title: "Word Counter",
                        url:"https://wordcounter.net/",
                        img:"https://wordcounter.net/favicon.ico",
                        children:""
                    },
                ]
            },
            {
                id:"3-3",
                title:"Search",
                url:"", 
                img:"folder",
                children:[
                    {
                        id: "3-3-1",
                        title: "Reddit Search",
                        url:"https://camas.github.io/reddit-search/",
                        img:"https://camas.github.io/favicon.ico",
                        children:""
                    },
                    {
                        id: "3-3-2",
                        title: "Internet Search Tips",
                        url:"https://www.gwern.net/Search",
                        img:"https://www.gwern.net/favicon.ico",
                        children:""
                    },
                    {
                        id: "3-3-3",
                        title: "MrKoll",
                        url:"https://mrkoll.se/",
                        img:"https://mrkoll.se//favicon.ico",
                        children:""
                    },
                ]
            },
            {
                id: "3-5",
                title: "Terms of Service Didn't Read",
                url:"https://tosdr.org/",
                img:"https://tosdr.org/favicon.ico",
                children:""
            },
            {
                id: "3-6",
                title: "Have I been pwned",
                url:"https://haveibeenpwned.com/",
                img:"https://haveibeenpwned.com/favicon.ico",
                children:""
            },
            {
                id: "3-7",
                title: "Archive Wayback Machine",
                url:"https://archive.org/",
                img:"https://archive.org/favicon.ico",
                children:""
            },
            {
                id: "3-8",
                title: "PNG file chunk inspector",
                url:"https://www.nayuki.io/page/png-file-chunk-inspector",
                img:"https://www.nayuki.io/favicon.ico",
                children:""
            },
        ]
    },
    {
        id:"4",
        title:"Dev",
        url:"",
        img:"folder",
        children: [
            {
                id:"4-1",
                title:"Python",
                url:"", 
                img:"folder",
                children:[
                    {
                        id:"4-1-1",
                        title:"Python Dunder Methods",
                        url:"https://levelup.gitconnected.com/python-dunder-methods-ea98ceabad15", 
                        img:"https://levelup.gitconnected.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-1-2",
                        title: "Pynguin unit test generator",
                        url:"https://github.com/se2p/pynguin",
                        img:"https://github.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-1-3",
                        title: "Nukita python compiler",
                        url:"https://github.com/Nuitka/Nuitka",
                        img:"https://github.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-1-4",
                        title: "A Concrete Introduction to Probability (using Python)",
                        url:"https://github.com/norvig/pytudes/blob/main/ipynb/Probability.ipynb",
                        img:"https://github.com/favicon.ico",
                        children:""
                    },
                ]
            },
            {
                id:"4-2",
                title:"UI",
                url:"", 
                img:"folder",
                children:[
                    {
                        id: "4-2-1",
                        title:"Tkinter",
                        url:"", 
                        img:"folder",
                        children:[
                            {
                                id: "4-2-1-1",
                                title: "Python Tkinter course",
                                url:"https://www.youtube.com/watch?v=YXPyB4XeYLA",
                                img:"https://www.youtube.com/favicon.ico",
                                children:""
                            },
                            {
                                id: "4-2-1-2",
                                title: "TkDocs python",
                                url:"https://tkdocs.com/shipman/index-2.html",
                                img:"https://tkdocs.com/favicon.ico",
                                children:""
                            },

                        ]
                    },
                    {
                        id: "4-2-2",
                        title:"TailWind CSS",
                        url:"", 
                        img:"folder",
                        children:[
                            {
                                id: "4-2-2-1",
                                title: "TailWind with React install",
                                url:"https://tailwindcss.com/docs/guides/create-react-app",
                                img:"https://tailwindcss.com/favicon.ico",
                                children:""
                            },
                            {
                                id: "4-2-2-2",
                                title: "TailWind Cheatsheet",
                                url:"https://nerdcave.com/tailwind-cheat-sheet",
                                img:"https://nerdcave.com/favicon.ico",
                                children:""
                            },

                        ]
                    },
                    {
                        id: "4-2-3",
                        title:"CSS",
                        url:"", 
                        img:"folder",
                        children:[
                            {
                                id: "4-2-3-1",
                                title: "A Complete Guide to Flexbox ",
                                url:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
                                img:"https://css-tricks.com/favicon.ico",
                                children:""
                            },
                            {
                                id: "4-2-3-2",
                                title: "Pure CSS inspiration OnlineTutorials",
                                url:"https://www.youtube.com/c/OnlineTutorials4Designers/videos",
                                img:"https://www.youtube.com/favicon.ico",
                                children:""
                            },
                            {
                                id: "4-2-3-3",
                                title: "Create custom scrollbars using CSS",
                                url:"https://www.youtube.com/watch?v=lvKK2fs6h4I",
                                img:"https://www.youtube.com/favicon.ico",
                                children:""
                            }

                        ]
                    },
                    {
                        id: "4-2-4",
                        title: "Dark Mode UI: the definitive guide",
                        url:"https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129",
                        img:"https://uxdesign.cc/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-2-5",
                        title: "MyColor.space",
                        url:"https://mycolor.space/",
                        img:"https://mycolor.space/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-2-6",
                        title: "UI Design Daily",
                        url:"https://www.uidesigndaily.com/",
                        img:"https://www.uidesigndaily.com/public/img/favicon-32x32.png",
                        children:""
                    },
                    {
                        id: "4-2-7",
                        title: "Tool.Graphics Geometric Art",
                        url:"https://tool.graphics/geometric",
                        img:"https://tool.graphics/favicon.ico",
                        children:""
                    }                    
                ]
            },
            {
                id:"4-3",
                title:"C",
                url:"", 
                img:"folder",
                children:[
                    {
                        id: "4-3-1",
                        title: "Learn C.org",
                        url:"https://www.learn-c.org/",
                        img:"https://www.learn-c.org/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-3-2",
                        title: "Tutorial spot C",
                        url:"https://www.tutorialspoint.com/cprogramming/index.htm",
                        img:"https://www.tutorialspoint.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-3-3",
                        title:"Programiz C",
                        url:"https://www.programiz.com/c-programming", 
                        img:"https://www.programiz.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-3-4",
                        title:"Compiler explorer",
                        url:"https://godbolt.org/", 
                        img:"https://godbolt.org/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-3-5",
                        title:"Data Structures - Full Course Using C and C++",
                        url:"https://www.youtube.com/watch?v=B31LgI4Y4DQ", 
                        img:"https://www.youtube.com/favicon.ico",
                        children:""
                    }
                ]
            },
            {
                id:"4-4",
                title:"Web-stack",
                url:"", 
                img:"folder",
                children:[
                    {
                        id: "4-4-1",
                        title: "UnMinify",
                        url:"https://unminify.com/",
                        img:"https://unminify.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-4-2",
                        title: "OpenMoji",
                        url:"https://openmoji.org/",
                        img:"https://openmoji.org/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-3-3",
                        title:"React Icons",
                        url:"https://react-icons.github.io/react-icons/", 
                        img:"https://react-icons.github.io/favicon.ico",
                        children:""
                    },
                ]
            },
            {
                id: "4-5",
                title:"FreeCodeCamp",
                url:"https://www.freecodecamp.org/learn/", 
                img:"https://www.freecodecamp.org/favicon.ico",
                children:""
            },
            {
                id: "4-6",
                title:"PythonTutor visualiser",
                url:"https://pythontutor.com/visualize.html#mode=edit", 
                img:"https://pythontutor.com/favicon.ico",
                children:""
            },
            {
                id:"4-7",
                title:"Practice problems",
                url:"", 
                img:"folder",
                children:[
                    {
                        id: "4-7-1",
                        title: "leetCode",
                        url:"https://leetcode.com/",
                        img:"https://leetcode.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-7-2",
                        title: "HackerRank",
                        url:"https://www.hackerrank.com/",
                        img:"https://www.hackerrank.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-7-3",
                        title:"Project Lovelace",
                        url:"https://projectlovelace.net/problems/", 
                        img:"https://projectlovelace.net/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-7-4",
                        title:"App Ideas Collection",
                        url:"https://github.com/florinpop17/app-ideas", 
                        img:"https://github.com/favicon.ico",
                        children:""
                    },
                ]
            },
            {
                id: "4-8",
                title:"Computer Science from the Bottom Up",
                url:"https://www.bottomupcs.com/", 
                img:"https://www.bottomupcs.com/favicon.ico",
                children:""
            },
            {
                id: "4-9",
                title:"The memory models that underlie programming languages",
                url:"http://canonical.org/~kragen/memory-models/", 
                img:"http://canonical.org/favicon.ico",
                children:""
            },
            {
                id: "4-10",
                title:"Data Structure Visualizations",
                url:"https://www.cs.usfca.edu/~galles/visualization/Algorithms.html", 
                img:"https://www.cs.usfca.edu/~galles/visualization/favicon.ico",
                children:""
            },
            {
                id: "4-11",
                title:"Cobol",
                url:"", 
                img:"folder",
                children:[
                    {
                        id: "4-11-1",
                        title:"Mainframe: The Complete COBOL Course From Beginner To Expert",
                        url:"https://www.udemy.com/course/mainframe-the-complete-cobol-course-from-beginner-to-expert/", 
                        img:"https://www.udemy.com/favicon.ico",
                        children:""
                    },
                ]
            },
            {
                id: "4-12",
                title:"Hosting",
                url:"", 
                img:"folder",
                children:[
                    {
                        id: "4-11-1",
                        title:"Netlify",
                        url:"https://www.netlify.com/", 
                        img:"https://www.netlify.com/favicon.ico",
                        children:""
                    },
                ]
            },
            {
                id: "4-13",
                title:"Hosting",
                url:"", 
                img:"folder",
                children:[
                    {
                        id: "4-13-1",
                        title:"Regex R",
                        url:"https://regexr.com/", 
                        img:"https://regexr.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-13-2",
                        title:"Regex Generator",
                        url:"https://regex-generator.olafneumann.org", 
                        img:"https://regex-generator.olafneumann.org/favicon.ico",
                        children:""
                    },
                ]
            },
            {
                id: "4-13",
                title:"Sam Bowne Classes",
                url:"https://samsclass.info/", 
                img:"https://samsclass.info/favicon.ico",
                children:""
            },
        ]
    },
]



export default bookmarksData;