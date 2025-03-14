function getRandomIntInRange(min, max) {
    console.log("Min:", min, "Max:", max);
    const random = Math.random();
    console.log("Random:", random);
    const scaled = random * (max - min + 1);
    console.log("Scaled:", scaled);
    return Math.floor(scaled) + min;
  }
// return Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(getRandomIntInRange(10, 20)) ;



  function generatePassword() {
    const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const space = ' ';
    const numbers = '0123456789';
    const minLength = 10;
    const maxLength = 20;

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const type = Math.floor(Math.random()*4);
        if(type === 0){
            const randomIndex = Math.floor(Math.random() * lowerCharacters.length);
            password += lowerCharacters[randomIndex];
            
        }else if(type === 1){
            const randomIndex = Math.floor(Math.random() * upperCase.length);
            password += upperCase[randomIndex];
           
        }else if(type === 2){
            const randomIndex = Math.floor(Math.random() * symbols.length);
            password += symbols[randomIndex];
           
        }else if(type ===3){
            const randomIndex = Math.floor(Math.random() * numbers.length);
            password += numbers[randomIndex];
         
        }else{
            const randomIndex = Math.floor(Math.random() * space.length);
            password += space[randomIndex];
        }
    }

    return password;
}


console.log(generatePassword());





// function generatePassword() {
//     const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
//     const numbers = '0123456789';
//     const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

//     const minLength = 10;
//     const maxLength = 20;

//     let selectedCharacters = '';

//     // Sprawdź, które checkboxy są zaznaczone
//     if (document.getElementById('uppercase').checked) {
//         selectedCharacters += upperCase;
//     }
//     if (document.getElementById('lowercase').checked) {
//         selectedCharacters += lowerCase;
//     }
//     if (document.getElementById('numbers').checked) {
//         selectedCharacters += numbers;
//     }
//     if (document.getElementById('symbols').checked) {
//         selectedCharacters += symbols;
//     }

//     // Upewnij się, że wybrano przynajmniej jeden typ znaków
//     if (selectedCharacters === '') {
//         document.getElementById('result').textContent = 'Wybierz przynajmniej jeden typ znaków!';
//         return;
//     }

//     const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
//     let password = '';

//     // Generowanie hasła
//     for (let i = 0; i < passwordLength; i++) {
//         const randomIndex = Math.floor(Math.random() * selectedCharacters.length);
//         password += selectedCharacters[randomIndex];
//     }

//     // Wyświetlenie wyniku
//     document.getElementById('result').textContent = `Twoje hasło: ${password}`;
// }
