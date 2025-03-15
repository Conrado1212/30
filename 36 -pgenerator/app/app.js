function getRandomIntInRange(min, max) {
    console.log("Min:", min, "Max:", max);
    const random = Math.random();
    console.log("Random:", random);
    const ddd = random * (max - min + 1);
    console.log("Scaled:", ddd);
    return Math.floor(ddd) + min;
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
          id:'numbers', set:'0123456789'
      }
      ];
   
    const minLength = 10;
    const maxLength = 20;

    //zmienna dla dancyh znakow
    let characters = '';

      options.forEach(option =>{
          if(document.getElementById(option.id).checked){
              characters+= option.set;
          }
      })

    if(characters === ''){
        document.getElementById('password').value = 'Check one of checkboxes!';
        document.getElementById('password').classList.add('error');
         return;
    }

    const passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let password = '';
    //tworzenie password
    for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            const char = characters[randomIndex];
            if(document.getElementById('duplicates').checked){
              if(!password.includes(char)){
                password += char;
              }else{
                i--;  //jesli znak instieje 
              }
              
            }else{
              password +=char  //bez checboxa duplikatow 
            }
           

    }

    document.getElementById('password').value = password;
}

function copy(){
 const password = document.getElementById('password');
 if(!password){
   console.error('Nie ma elemetnu password');
   return
 }
 const passwordText = password.textContent || password.value;
  navigator.clipboard.writeText(passwordText)
  .then(()=>{
    console.log('Copy succesfully');
  })
  .catch(e =>{
    console.error(e,'Wywrotka podczas kopiowania ')
  })
}
//console.log(generatePassword());