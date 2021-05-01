// Cложность алгоритма O(n*2)

/*Напоминалка:
log(n) - это когда мы делим массив пополам
n - обычный проход в цикле
2n - два обычный проход
n^3 - цикл в цикле в цикле
*/


const arr = [4,9,2,7,9,5,2,7,0];

function quickSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let pivo = Math.floor(arr.length/2);
    let less = arr.filter(elem=>elem<arr[pivo]);
    let greater = arr.filter(elem=>elem>arr[pivo]);

    return [...quickSort(less), arr[pivo],...quickSort(greater)];
}

console.log(quickSort(arr));