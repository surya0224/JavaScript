// let js="amazing";
//       if (js==="amazing"){
//         alert("User is amazing");
//       }


// const day=prompt("Enter the datr");

// console.log(day)


// switch(day){
//     case'mon':
//         alert("hhoo");
//         break
//     case 'tue':
//         alert('ttt');
//         break
//     case 'wed':
//         alert('ii');
//         break
//     case 'thurs':
//         alert('ghgj')
//         break
//     case 'fri':
//         alert("fgfgf")
//         break
//     case 'sat':
//         alert(
//            'jjhjh'
//         );
//         break
//     // default:
//     //     alert("boyhing");
// }


// function add2numbers(a,b){
//    return a+b; 
// }



// const dd2numbers=function (a,b){
//     return a+b
// };


// const calcyear=(a,b)=>
// {return a+b};

// console.log(dd2numbers(1,5), add2numbers(2,5),calcyear(5,5));



// const arr=new Array(1,2,3,4,5)
// arr.push(5)
// arr.unshift(8)
// arr.shift()
// arr.pop()
// console.log(arr,arr.length)





const jonas={
    firstName:"surya",
    lastName:"aaa",
    birthYear:1998,
    job:"Teacher",
    friends:["fdsf","sdfds","sdfdsf"],
    hasDriverLicense:true,
    calcAge:function (){
        // console.log(this)
        if (!this.age){
            // console.log()
            this.age=2037-this.birthYear;

        }
        return this.age
    }
}
console.table(jonas)


// console.log(jonas.calcAge(),jonas["calcAge"]());





// for (let i=0;i<=10;i++){
//     console.log(i)
// }

const arr=new Array(1,2,3,4,5,6,{});


// for (i=arr.length-1;i>=0;i--){
//     console.log(arr[i],typeof arr[i]);
// }
// let i=0;

// while (i<=arr.length-1){
//     console.log(arr[i]);
//     i++;
// }


let dice=0

while (dice!=6){
    dice=Math.trunc(Math.random()*6)+1
    console.log(dice)
}