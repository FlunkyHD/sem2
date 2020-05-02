function tickets(peopleInLine){
    let money_earned = 0;
    let twentyFive = 0, fifty = 0, hundred = 0;

    for (let i = 0; i < peopleInLine.length; i++) {

        switch (peopleInLine[i]) {
            case 25:
                money_earned += 25;
                twentyFive++;
            break;

            case 50:
                money_earned += 0;
                fifty++;
                twentyFive--;
            break;

            case 100:
                money_earned -= 75;
                hundred++;
                if (fifty === 0) {
                    twentyFive -= 2;
                } else {
                    fifty--;
                }
                twentyFive--;
            break;
        
            default:
                break;
        }
        console.log("25: " + twentyFive + " 50: " + fifty + " 100: " + hundred + " EARNED: " + money_earned);
        if (twentyFive < 0 || fifty < 0 || hundred < 0) {
            return "NO";
        }
    }
    return "YES";
}


console.log(tickets([25,50,25,100,25,50,25,100,25,25,25,100,25,25,50,100,25,25,25,100]));
console.log(tickets([25,25,50,100,25,25,25,100,25,25,50,100,25,25,50,100]));