const songs = [
    {
        id:'1',
        songName:` Alan Walker <br>
        <div class="subtitle">Toronto</div>`,
        poster: "./Images/1.jpg"
    },
    {
        id:'2',
        songName:` Alan Walker<br>
        <div class="subtitle">Alberta</div>`,
        poster: "./Images/2.jpg"
    },
    {
        id:"3",
        songName: `The Cartoon's <br><div class="subtitle">Barrie</div>`,
        poster: "./Images/3.jpg",
    },
    {
        id:"4",
        songName: `Warriyo - Mortals <br><div class="subtitle">North York</div>`,
        poster: "./Images/4.jpg",
    },
    {
        id:"5",
        songName: `Ertugrul Gazi <br><div class="subtitle">York</div>`,
        poster: "./Images/5.jpeg",
    },
    {
        id:"6",
        songName: `Electronic Music <br><div class="subtitle">Mississauga</div>`,
        poster: "./Images/6.jpg",
    },
    {
        id:"7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Toronto</div>`,
        poster: "./Images/7.jpg",
    },
    {
        id:"8",
        songName: `Neha Kakker <br><div class="subtitle"B>arrie</div>`,
        poster: "./Images/8.jpeg",
    },
    {
        id:"9",
        songName: `Dilber <br><div class="subtitle">Brampton</div>`,
        poster: "./Images/9.jpg",
    },
    {
        id:"10",
        songName: `Duniya <br><div class="subtitle">Etobicoke</div>`,
        poster: "./Images/10.jpeg",
    },
    {
        id:"11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Brampton</div>`,
        poster: "./Images/11.jpeg",
    },
    {
        id:"12",
        songName: `Putt Jatt Da <br><div class="subtitle">Scarborough</div>`,
        poster: "./Images/12.jpg",
    },
    {
        id:"13",
        songName: `Baarishein <br><div class="subtitle">Scarborough</div>`,
        poster: "./Images/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle"> Mississauga</div>`,
        poster: "./Images/14.jpg",
    },
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Toronto</div>`,
        poster: "./Images/15.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})
