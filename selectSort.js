// Cложность алгоритма O(n*2)

/*Напоминалка:
log(n) - это когда мы делим массив пополам
n - обычный проход в цикле
2n - два обычный проход
n^3 - цикл в цикле в цикле
*/


const arr = [4,9,2,7,9,5,2,7,0,2,6,2,8,7,8,1,9];

function selectSort(arr){
    for(let i = 0; i < arr.length; i++){
        let indexMin = i;
        for(let j= i+1; j < arr.length; j++){
            if(arr[j] < arr[indexMin]){
                indexMin=j;
            }
        }

        [arr[i],arr[indexMin]] = [arr[indexMin],arr[i]];
    }
    return arr;
}

console.log(selectSort(arr));