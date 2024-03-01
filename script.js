let userBirth;
let userCity;
let userSport;
while (true) {
    userBirth = +prompt('Enter your year of the birth: ');
    userCity = prompt('In which city do you live: ');
    userSport = prompt('What is your favourite sport?: ');

    let has_number = false;

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let i of numbers) {
        if (userCity.includes(i) || userSport.includes(i)) {
            alert('You cannot enter numbers in this string')
            has_number = true;
            break
        }
    }

    if (!has_number) {
        break
    }
}






const dateBirth = new Date();
let dateCalc = 'Your age is ' + (dateBirth.getFullYear() - userBirth);

if (!userBirth || userBirth === 0) {
    dateCalc = "Unfortunately, you don't enter your year of the birth; "
}

let msgCountry = 'You live in the capital of';
if (userCity) {
    const userCityCheck = userCity.toLowerCase();

    switch (userCityCheck) {
        case 'kyiv':
            msgCountry += ' Ukraine';
            break
        case 'london':
            msgCountry += ' England';
            break
        case 'washington':
            msgCountry += ' USA';
            break
        default:
            msgCountry = `You live in the ${userCity} city`

    }
}
else {
    msgCountry = "Unfortunately, you don't enter the city you live in";
}


let msgSport = 'Cool! Do you want to become '
if (userSport) {

    switch (userSport) {
        case 'football':
            msgSport += 'Lionel Messi?';
            break
        case 'hockey':
            msgSport += 'Wayne Gretzky?';
            break
        case 'volleyball':
            msgSport += 'Antoine Brizard?';
            break
        default:
            msgSport = `Wish you to do your best in ${userSport}!`
    }
}
else {
    msgSport = "Unfortunately, you don't enter your favourite sport"
}



alert(`${dateCalc}. ${msgCountry}. ${msgSport}`);





