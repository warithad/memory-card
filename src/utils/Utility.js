
const shuffle =(array)=>{
    for(let i = 0; i < array.length; i++){
        array = swap(array, i, Math.floor(Math.random() * array.length));
    }

    return array;
}

const swap =(array, first, second)=>{
    const temp = array[first];
    array[first] = array[second];
    array[second] = temp;
    
    return array;
}

const capitalizeFirstLetter=(word)=>{
    const firstLetter = word.charAt(0);
    return word.replace(firstLetter, firstLetter.toUpperCase());
}

export {shuffle, capitalizeFirstLetter};