// Ничего особенного самый обычный проход в цикле, сложность O(n)

/*Напоминалка:
log(n) - это когда мы делим массив пополам
n - обычный проход в цикле
2n - два обычный проход
n^3 - цикл в цикле в цикле
*/


const arr = [1,8,4,2,7,9,5,0,9,5,2];


function linearySearch(arr,item){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==item){
            return item
        }
    }
    return false;
}
console.log(linearySearch(arr,65));