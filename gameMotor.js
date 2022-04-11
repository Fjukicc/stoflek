
import {PlayingCards} from './PlayingCards';

//ALWAYS RANDOM CARD

export function gameMotor(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 2,3,4.... playing decks


//What card?
export function whatCard(num, cardDeck){
    if(cardDeck[num].karta==='sedmica'){
        return 'popi guc'
    }
    else if(cardDeck[num].karta==='osmica'){
        return 'popi dva guca'
    }
    else if(cardDeck[num].karta==='devetka'){
        return 'popi tri guca'
        
    }
    else if(cardDeck[num].karta==='desetka'){
        return 'ponisti pravilo'
        
    }
    else if(cardDeck[num].karta==='decko'){
        return 'palac u zrak ko zadni guc'
    }
    else if(cardDeck[num].karta==='dama'){
        return 'pitaj tko ti odgovori pije guc'
        
    }
    else if(cardDeck[num].karta==='kralj'){
        return 'svi brojevi djeljivi s 7 kaze se stoflek ko sjebe pije guc'
    }
    else if(cardDeck[num].karta==='as'){
        return 'zadaj pravilo nekome'
    }
    else{
        console.log('error');
    }
}
