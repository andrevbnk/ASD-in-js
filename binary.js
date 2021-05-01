//Бинарный поиск, сложность O(log(n))

/*Напоминалка:
log(n) - это когда мы делим массив пополам
n - обычный проход в цикле
2n - два обычный проход
n^3 - цикл в цикле в цикле
*/
const arr = [1,2,3,4,5,6,7,8,9];

const binarySearch = (arr,item)=>{
    let [start,end,position] = [0,arr.length,-1];
    let flag = false;
    let mid;
    while(flag === false && start<=end){
        mid = Math.floor((start + end)/2);
        if(item>arr[mid]){
            start = mid+1;
            continue;
        }
        if(item<arr[mid]){
            end = mid-1;
            continue;
        }
        if(arr[mid] === item){
            flag = true;
            position = mid;
        }

    }

    return position;
    
}

console.log(binarySearch(arr,8));