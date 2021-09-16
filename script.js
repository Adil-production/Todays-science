
   window.addEventListener('load', function () {
    document.getElementById("loading").style.display = "none";
    document.getElementById("all").style.display = "block";
    document.getElementById("nav").style.display = "block";

  })

    var API = 'https://api.nasa.gov/planetary/apod?api_key=5LEPXoSG69ti0yLNcsvA2gKjt4V5oxnlzak5Vey0';
    
    
    getData(API)
    
    async function getData(url) {
        const res = await fetch(url)
        const data = await res.json()
       
        console.log(data)
        document.querySelector("#all #main #card #card-body #title").innerHTML = data.title;
        document.querySelector("#all #main #card #img").src = data.url;
        document.querySelector("#all #main #card #publish").innerHTML = data.date;
        document.querySelector("#all #img2").src = data.url;
       document.querySelector("#all #article #exp").innerHTML = data.explanation;
    }
    function exp(){
        document.querySelector("#all #main").style.display = "none";
        document.getElementById("article").style.display = "block";
        document.getElementById("back").style.display = "inline-block";
    }
    function back(){
        document.querySelector("#all #main").style.display = "block";
        document.getElementById("article").style.display = "none";
        document.getElementById("back").style.display = "none";
    }

  
    
   

