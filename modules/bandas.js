const bandas = {
    lista: [
    {
        nombre: "Green Day",
        integrantes: 3,
        genero: "Punk",
        topCanciones: ["American Idiot", "Wake Me Up When September Ends", "Welcome to Paradise"],
        cover: "/images/bandas/1.jpg",
        id: 1,
        video: "https://www.youtube.com/embed/Ee_uujKuJMI",
    },
    {
        nombre: "Coldplay",
        integrantes: 4,
        genero: "Rock",
        topCanciones: ["The Scientist", "Clocks", "Midnight"],
        cover: "/images/bandas/2.jpg",
        id: 2,
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    }, 
    {
        nombre: "Imagine Dragons",
        integrantes: 4,
        genero: "Pop",
        topCanciones: ["Demons", "Radioactive", "Believer"],
        cover: "/images/bandas/3.jpg",
        id: 3,
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        nombre: "Keane",
        integrantes: 4,
        genero: "R&B",
        topCanciones: ["Somewhere only we know","cristal ball", "everybody is changin"],
        cover: "/images/bandas/4.jpg",
        id: 4,
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        nombre: "Daft Punk",
        integrantes: 2,
        genero: "Punk",
        topCanciones: ["Get Lucky", "One more time","Instant Crush"],
        cover: "/images/bandas/5.jpg",
        id: 5,
        video: "https://www.youtube.com/embed/FGBhQbmPwH8",
    }, 
    {
        nombre: "Duki",
        integrantes: 1 ,
        genero: "R&B" ,
        topCanciones:["Goteo", "Lebron", "Mi Chain de Roque"],
        cover: "/images/bandas/6.jpg",
        id: 6,
        video: "https://www.youtube.com/embed/8S4eLgAVpn8",
    }, 
    {
        nombre: "Arctic Monkeys",
        integrantes: 4,
        genero: "Indie",
        topCanciones: ["Do I wanna know", "R U Mine", "Snap out of it"],
        cover: "/images/bandas/7.jpg",
        id: 7,
        video: "https://www.youtube.com/embed/bpOSxM0rNPM",
    }, 
    {
        nombre: "Portugal. The man",
        integrantes: 5,
        genero: "Indie",
        topCanciones: ["Feel it still", "Live in the moment", "So young"],
        cover: "/images/bandas/8.jpg",
        id: 8,
        video: "https://www.youtube.com/embed/pBkHHoOIIn8",
    }, 
    {
        nombre: "The weeknd",
        integrantes: 1,
        genero: "Pop",
        topCanciones: ["Blinding lights", "Starboy", "In your eyes"],
        cover: "/images/bandas/9.jpg",
        id: 9,
        video: "https://www.youtube.com/embed/4NRXx6U8ABQ",
    },
    {
        nombre: "Metallica",
        integrantes: 5,
        genero: "Rock" ,
        topCanciones: ["Nothing else matters", "Enter sandman", "Master of puppets"],
        cover: "/images/bandas/10.jpg",
        id: 10,
        video: "https://www.youtube.com/embed/tAGnKpE4NCI",
    }
],
llamarId: function llamarId(id) {
  let respuesta = [];
  for (let i = 0; i < bandas.lista.length; i++) {
    const element = bandas.lista[i];
    if (id == element.id) {
      respuesta.push(element)
    }
  }
  if (respuesta.length === 0 ) {
    return "vacio"
  }
  else{
    return respuesta
  }
},

llamarGenero: function llamarGenero(genero){
  let respuesta = [];
  for (let i = 0; i < bandas.lista.length; i++) {
    const element = bandas.lista[i];
    if (genero == element.genero) {
      respuesta.push(element)
    }
  }
  if (respuesta.length === 0 ) {
    return "vacio"
  }
  else{
    return respuesta
  }
}};


module.exports = bandas; 