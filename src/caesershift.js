export default function cShift(str) {
    let temp = [];
    for(let i = 0; i < str.length; i++){
        let charCode = str[i].charCodeAt(0);
        temp[i] = String.fromCharCode(charCode + 2);
        if(charCode === 121){
            temp[i] = String.fromCharCode(97);
        }
        if(charCode === 122){
            temp[i] = String.fromCharCode(98);
        }
        if(charCode === 89){
            temp[i] = String.fromCharCode(65);
        }
        if(charCode === 90){
            temp[i] = String.fromCharCode(66);
        }
    }
    temp = temp.join('');
    return temp;
}

