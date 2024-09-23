// const nums = [10,20,30];
// const last_value=nums[2] = 99
// console.log(nums);

// function getLastValue(array){
//   const lastindex=array.length-1
//   return array[lastindex]
// }
// const nums = ['hi','hello','good'];
// console.log(getLastValue(nums));


// function arrayswap(array){
//   const lastindex=array.length-1
  
//   const last_value=array[lastindex]
//   const firstindex=array[0]

//   array[0]=last_value
//   array[lastindex]=firstindex

//   return array
// }
// const nums = [1,20,22,24,5]
// const words = ['hi','hello','good']
// console.log(arrayswap(nums));
// console.log(arrayswap(words));

// i=5
// do {
// console.log(i)
// i--
// } while(i>=0)

// const array1 = [1,2,3,4,5];
// const dubbeldNumber=[];

// for(let i=0; i<array1.length; i++){
//   dubbeldNumber.push(array1[i]+1)
// }
// console.log(dubbeldNumber)

// function addOne(array){
//   const result = []
//   for(let i=0; i<array.length; i++){
//     result.push(array[i]+1)
//   }
//   return result
// }

// console.log(addOne([1,2,3]))


//  function addOne(array, array2){
//   const result = []
//    for(let i=0; i<array.length; i++){
//      const sum= array[i]+array2[i]
//      result.push(sum)
//    }
//    return result
 
//   }
//   console.log(addOne([1,2,3], [1,2,3]))


// function countPositive(array){
//   let count=0
//   let listLength=array.length
//   for(let i=0; i<listLength; i++){
//     if(array[i]>0){
//       count++
//   }
// }
// return count
// }
// console.log(countPositive([1,-3,5,-1,3,-2,1]))

// function dubbelList(array){
// const result = []
// for(let i=0; i<array.length; i++){
//   result.push(array[i]+1)
// }
// return result
// }

// console.log(dubbelList([1,2,3]))

// console.log(words.findIndex(word => word === 'search'))
// console.log(words.indexOf('search'))
//console.log(words.includes('search'))
// const words =   ['hello','world','search','good','search']
// let i=0
// while(i<words.length){
//   if(words[i] === 'search'){
//     console.log(i)
//     break
//   }
//   i++
// }


// function Findex(array, word){
//   for(let i=0; i<array.length; i++){
//     if(array[i]===word){
//       console.log(1)
//     }
//   }
//   return 0
// }
// Findex(['green','red','blue','red'], 'red')

//   function removeEgg(foods){
//     let foodcopy=foods.slice();
//     const reversefood=foodcopy.reverse();
//     let result = []
//     let firsteeg=0
//     for(let i=0; i<foods.length; i++){
//      if(foods[i] === 'egg' && firsteeg<2){
//        firsteeg++
//        continue
//     }
//     result.push(reversefood[i])
//   }
//   return result.reverse()
//  }
//   console.log(removeEgg(['egg','apple','egg','egg','ham']))
//   console.log(firsteeg)
  // console.log(foods)


// for(let i=1; i<=20; i++){
//   if(i%3==0){
//     console.log('Fizz')
//     continue
//   }else if(i%5==0){
//     console.log('Buzz')
//     continue
//   }else if(i%5==0 && i%3==0){
//     console.log('FizzBuzz')
//     continue
//   } else{
//     console.log(i)
//   }
// }

// function Findex(array, word){
//     for(let i=0; i<array.length; i++){
//       if(array[i]==array[i]){
//       console.log('True')
//       }
//     }
//   }
//   Findex(['green','red','blue','red'], 'red')




/////12-ADVANCED FUNCTIONS//////////////////////

// let add = function(){
//   console.log(2+3)
// }
// // add() // 5
// // add()

// function runTwice(fun){
//   fun()
//   fun()
// }
// runTwice(function(){
//   console.log('12B')
// })
// runTwice(add) 
// setInterval(add,2000)

// const multiply = (num,num2) => console.log(num * num2)
// multiply(2,3)

// function countPosititve(nums){
//   let count=0
//   nums.forEach((value) => {
//     if(value>0){
//       count++  
//     }
    
//   })
//   return count
// }

// console.log(countPosititve([1,-3,5]))

// function addNum(array,num){
//   return array.map( (value) => {return value + num})
// }
// console.log(addNum([1,2,3],2))

function removeEgg(foods){
  let eegremove=0
  return foods.filter( (value) => {
    if(value==='eeg' && eegremove <=2){
      eegremove++
      return false
    }
    return true
  })
}
console.log(removeEgg(['egg','apple','egg','eeg','ham']))










