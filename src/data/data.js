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
                ]
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
                        title: "Dark Mode UI: the definitive guide",
                        url:"https://uxdesign.cc/dark-mode-ui-design-the-definitive-guide-part-1-color-53dcfaea5129",
                        img:"https://uxdesign.cc/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-2-2",
                        title: "MyColor.space",
                        url:"https://mycolor.space/",
                        img:"https://mycolor.space/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-2-3",
                        title: "MyBib citation maker",
                        url:"https://www.mybib.com/",
                        img:"https://www.mybib.com/favicon.ico",
                        children:""
                    },
                    {
                        id: "4-2-4",
                        title:"Tkinter",
                        url:"", 
                        img:"folder",
                        children:[
                            {
                                id: "4-2-4-1",
                                title: "Python Tkinter course",
                                url:"https://www.youtube.com/watch?v=YXPyB4XeYLA",
                                img:"https://www.youtube.com/favicon.ico",
                                children:""
                            },
                            {
                                id: "4-2-4-2",
                                title: "TkDocs python",
                                url:"https://tkdocs.com/shipman/index-2.html",
                                img:"https://tkdocs.com/favicon.ico",
                                children:""
                            },

                        ]
                    }
                    
                ]
            },
        ]
    },
]



export default bookmarksData;