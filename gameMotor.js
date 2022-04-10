
//ALWAYS RANDOM CARD

export function gameMotor(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2,3,4.... playing decks
