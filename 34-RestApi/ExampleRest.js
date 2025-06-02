// importowanie modulu express dzieki ktoremu mozna wywolywac wszelkie metody 
const express = require("express");

//port na ktorym dziala nasza apka 
const port = process.env.PORT || 3001;


//utworzenie instanci aplkikacji
const app = express();

//tworzeni endpoint get ktory zwrca przykladowo randoma liczbe 

app.get(`/numbers`, (req,res) =>{
   const random =  Math.floor(Math.random() * 10);
   //res.status(200) Ustawiamy kod statusu HTTP odpowiedzi na 200, co oznacza, że zapytanie zostało obsłużone poprawnie.
   res.status(200).json({
    //res.json({ number: random }); Funkcja json() wysyła odpowiedź w formacie JSON. W tym przypadku przesyłany jest obiekt, który zawiera jeden klucz "number" z wartością wynikową przechowywaną w zmiennej random.
       number: random
   })
})




// app.listen(port, "0.0.0.0", () => {
//     console.log(`App working at http://localhost:${port} and http://192.168.0.50:${port}`);
// });

//Metoda app.listen() w Express.js uruchamia serwer, który zaczyna nasłuchiwać żądań HTTP na określonym porcie.
///Pierwszy argument, port, to numer portu, na którym aplikacja ma nasłuchiwać. Może być on zdefiniowany np. jako const port = process.env.PORT || 3000.
//"0.0.0.0", umożliwiamy dostęp do aplikacji zarówno z poziomu localhost, jak i z innych urządzeń w sieci (np. za pomocą adresu IP przypisanego do maszyny).
//allback – Funkcja wywoływana po uruchomieniu serwera:

// Trzeci argument to funkcja zwrotna (callback), która wykonuje się, gdy serwer został już uruchomiony i zaczął nasłuchiwać.

// W tej funkcji używamy console.log(), aby wypisać komunikat do konsoli.

// Komunikat informuje, że aplikacja działa, podając dwa adresy:

// http://localhost:${port} – adres do którego można się odwołać z tej samej maszyny,

// http://192.168.0.50:${port} – przykładowy adres w sieci LAN, za pomocą którego aplikacja może być dostępna dla innych urządzeń w tej samej sieci.
app.listen(port, () => {
    console.log(`App working at http://localhost:${port}`);
  });