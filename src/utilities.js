import moment from "moment";

export const isPInValid = (pin) => {
    if (pin.length !== 15) {
        return false;
    }
    if (pin.charAt(0) !== 'J' || pin.charAt(1) !== 'N') {
        return false;
    }
    if (pin.charAt(2) !== '-' || pin.charAt(7) !== '-' || pin.charAt(12) !== '-') {
        return false;
    }

    if (calcLetter(pin.substring(3, 7)) !== pin.charAt(13)) {
        return false;
    }

    if (calcLetter(pin.substring(8, 12)) !== pin.charAt(14)) {
        return false;
    }
    return true
}

export const isTimeValid = () => {
    const currTime = parseInt(moment().format('HH'))
    return (9 <= currTime && currTime < 19)
}

const calcLetter = (str) => {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
        let number = Number(str.charAt(i))
        if (isNaN(number)) {
            return null;
        }
        if (number % 2 === 0) {
            total += number
        } else {
            let tmpNumber = number * 2
            if (tmpNumber > 9) {
                total += Math.floor(tmpNumber / 10) + tmpNumber % 10
            }
            else {
                total += tmpNumber
            }
        }
    }
    return String.fromCharCode(total + 65)
}