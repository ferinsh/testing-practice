export default function analyzeArray(arr){

    let avg;
    let min;
    let max;
    let length = arr.length;

    let TEMP = 0;
    let small = arr[0];
    let big = arr[0];

    for(let i=0; i<arr.length; i++){
        TEMP += arr[i];
        if(arr[i] >= small){
            min = small;
        }else{
            min = arr[i];
            small = min;
        }

        if(arr[i] <= big){
            max = big;
        }else{
            max = arr[i];
            big = max;
        }
    }

    avg = TEMP / arr.length;
    let objTEMP = {
        average : avg,
        min : min,
        max : max,
        length : length,
    };

    return objTEMP;
}