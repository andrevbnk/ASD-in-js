// Cложность алгоритма O(n*2)

/*Напоминалка:
log(n) - это когда мы делим массив пополам
n - обычный проход в цикле
2n - два обычный проход
n^3 - цикл в цикле в цикле
*/

const arr = [4,9,2,7,9,5,2,7,0,2,6,2,8,7,8,1,9];

function bubleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]];
            }
        }

    }
    return arr;
}

console.log(bubleSort(arr));