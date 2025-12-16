let dateOfBirth = document.getElementById('dob')
let cacBtn = document.getElementById('calculateBtn')
let result = document.getElementById('result')


cacBtn.addEventListener('click',function(){
    let userDate = dateOfBirth.value
    let neWdate = new Date()

    let birthDate = new Date(userDate)
    let today = new Date();


    let years = today.getFullYear() -  birthDate.getFullYear();

    let months = today.getMonth() -  birthDate.getMonth();

    let days = today.getDate() - birthDate.getDate();



    if(days < 0){
        months--
        days += 30;
    }
    if( months < 0){
        years--
        months += 12;

    }


    
    result.innerText =
      `Aap ${years} saal, ${months} mahine aur ${days} din purane ho`
})