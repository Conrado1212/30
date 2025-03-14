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
      const options =[{
          id: 'lowerCase', set: 'abcdefghijklmnopqrstuvwxyz' 
      },
      {
        id: 'upperCase', set: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
      },
      {
        id: 'symbols', set: '!@#$%^&*()_+[]{}|;:,.<>?' 
      },
      {
        id: 'space', set: ' ' 
      },
      {
          od:'numbers', set:'0123456789'
      }
      ];
   
    const minLength = 10;
    const maxLength = 20;

    //zmienan dla dancyh znakow
    let characters = '';

      options.forEach(option =>{
          if(document.getElementById(option.id).checked){
              characters+= option.set;
          }
      })

    if(characters === ''){
        document.getElementById('password').textContent = 'Check one of checkboxes bitches!';
         return;
    }

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];

    }

    document.getElementById('password]').textContent = `${password}`;
}


console.log(generatePassword());