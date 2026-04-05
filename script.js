let profiles = [

    { name: "Rahul Sharma", headline: "Software Engineer", connections: "500+ connections", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Rahul Patil", headline: "Data Analyst", connections: "300 connections", img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Rahul Verma", headline: "Web Developer", connections: "400 connections", img: "https://randomuser.me/api/portraits/men/3.jpg" },
    
    { name: "Amit Sharma", headline: "UI Designer", connections: "450 connections", img: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Amit Patil", headline: "Backend Developer", connections: "350 connections", img: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Amit Verma", headline: "Frontend Developer", connections: "600+ connections", img: "https://randomuser.me/api/portraits/men/6.jpg" },
    
    { name: "Priya Sharma", headline: "UX Designer", connections: "500 connections", img: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Priya Patil", headline: "Product Designer", connections: "300 connections", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Priya Verma", headline: "Graphic Designer", connections: "400 connections", img: "https://randomuser.me/api/portraits/women/3.jpg" },
    
    { name: "Neha Sharma", headline: "HR Manager", connections: "450 connections", img: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Neha Patil", headline: "Marketing Specialist", connections: "350 connections", img: "https://randomuser.me/api/portraits/women/5.jpg" },
    { name: "Neha Verma", headline: "Content Writer", connections: "600+ connections", img: "https://randomuser.me/api/portraits/women/6.jpg" }
    
    ];
    
    function searchProfile(){
    
    let input = document.getElementById("search").value.toLowerCase();
    let result = document.getElementById("result");
    let suggestions = document.getElementById("suggestions");
    
    result.innerHTML = "";
    suggestions.innerHTML = "";
    
    if(input === ""){
    return;
    }
    
    let found = false;
    
    profiles.forEach(p => {
    
    if(p.name.toLowerCase().startsWith(input)){
    
    found = true;
    
    suggestions.innerHTML += `<div onclick="selectProfile('${p.name}')">${p.name}</div>`;
    
    result.innerHTML += `
    <div class="card">
    <img src="${p.img}">
    <div>
    <h3>${p.name}</h3>
    <p>${p.headline}</p>
    <p>${p.connections}</p>
    </div>
    </div>
    `;
    
    }
    });
    
    if(!found){
    result.innerHTML = `<p class="no-result">No profiles found</p>`;
    }
    }
    
    function selectProfile(name){
    document.getElementById("search").value = name;
    document.getElementById("suggestions").innerHTML = "";
    searchProfile();
    }