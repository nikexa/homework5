// // 1. ჯამი: შექმენი ფუნქცია, რომელიც მასივის რიცხვების ჯამს გამოთვლის
// // reduce-ის გამოყენებით.

let number=[1,2,34,5,6]
let result=0
let result1=number.reduce((num,i)=>{
    num+=i
    return num
})
console.log(result1);


// // 2. უმაღლესი რიცხვი: დაწერე ფუნქცია, რომელიც მასივში ყველაზე 
// მაღალ რიცხვს პოულობს reduce-ის გამოყენებით.
let number1=[2,3,4,5,6,7]
let findmax=number1.reduce((num,i)=>{
    return num>i?num:i
})
console.log(findmax);


// // 4. სტრიქონების გაერთიანება: დაწერე ფუნქცია, რომელიც მასივში 
// არსებული სტრიქონების გაერთიანებას ახდენს ერთ სტრიქონად.
let word=["nika","gio","valei"]
let gaertianeba=word.reduce((word,i)=>word+i)
console.log(gaertianeba);

// // 5. რიცხვების გამრავლება: შექმენი ფუნქცია, რომელიც მასივში 
// არსებული რიცხვების გამრავლებას ახდენს reduce-ის მეშვეობით.
let number2=[2,3,4]
let gamravleba=number2.reduce((num,i)=>{
    num=num*i
    return num
})
console.log(gamravleba);


// // 7. რიცხვების სხვაობა: დაწერე ფუნქცია, რომელიც მასივში არსებული 
// რიცხვების სხვაობას გამოთვლის reduce-ის გამოყენებით.
let number3=[10,3,4,5]
let gamokleba=number3.reduce((num,i)=>{
    num=num-i
    return num
})
console.log(gamokleba);



// // 8. ორმაგი მნიშვნელობები: შექმენი ფუნქცია, რომელიც მასივის 
// თითოეულ რიცხვს გაამრავლებს ორით map-ის გამოყენებით.
let number4=[2,3,4,5]
let gamravleba2=number4.map((num)=>num*2)
console.log(gamravleba2);



// // 9. სტრიქონების შეცვლა: გქონდეს სტრიქონების მასივი. 
// დაწერე ფუნქცია, რომელიც თითოეულ სტრიქონს პატარა ასოებით 
// გადააქცევს map-ის გამოყენებით.

let names=["NIKA","GIO","VALERI"]
let dname=names.map((name)=>name.toLowerCase())
console.log(dname);

// // 11. DOM მანიპულაცია: შექმენი HTML ელემენტების მასივი.
//  map-ის გამოყენებით თითოეულ ელემენტზე დამატებული ტექსტი ჩაწერე.
let html=["nika","gio","valeri"]
html.map((name)=>{
    let p=document.createElement("p")
    p.textContent=name
    document.body.appendChild(p)
})


// // 12. რიცხვების კვადრატები: დაწერე ფუნქცია, რომელიც მასივში 
// არსებულ თითოეულ რიცხვს კვადრატში გაამრავლებს map-ის გამოყენებით.
let number5=[3,4,5,6]
let kvardrati=number5.map((num)=>num*num)
console.log(kvardrati);


// // 13. DOM ელემენტების აღება: დაწერე ფუნქცია, რომელიც forEach-ის
//  გამოყენებით თითოეულ HTML ელემენტს ტექსტს მიუმატებს.

// // 14. ქულების ზრდა: გქონდეს სტუდენტების მასივი, სადაც
//  თითოეულ სტუდენტს აქვს ქულა. forEach-ის მეშვეობით თითოეულ 
//  ქულას დაუმატე 5 ქულა.



// // 16. რიცხვების შებრუნება: დაწერე ფუნქცია, რომელიც for ციკლის 
// გამოყენებით შებრუნებულ რიგითობით დააბრუნებს მასივს.
let arr=[1,2,3,4,5]
let reversedArr=[]
for (let i = arr.length; i >= 0; i--) {
    reversedArr.push(arr[i]);  // Push elements in reverse order
  }
  
  
  
 console.log(reversedArr);
 



// // 17. DOM-ის შექმნა: შექმენი HTML დივ ელემენტები მასივიდან და
//  ჩასვი ისინი გვერდზე for-ის გამოყენებით.
let div=["dvsdv","sdvsdv","sdvsdv"]
for(let i=0;i<div.length;i++){
    let p=document.createElement("P")
    p.textContent=div[i]
    document.body.appendChild(p)
}


// // 18. ცხრილის გამოტანა: გქონდეს რიცხვების მასივი, for-ის გამოყენებით
//  გამოიტანე თითოეული რიცხვის განმრავლების ცხრილი.
let arr1=[3,4,5,6,7]
for(let i=0;i<arr1.length;i++){
    for(let j=1;j<=10;j++){
        console.log(`${arr1[i]}x${j}=${arr1[i]*j}`);
        
    }
}

// // 19. რიცხვების ფილტრაცია: დაწერე ფუნქცია, რომელიც filter-ის 
// გამოყენებით დააბრუნებს მხოლოდ იმ რიცხვებს, რომლებიც 10-ზე მეტია.
let arr3=[3,4,5,45,67,89]
let meti=arr3.filter((num)=>num>10)
console.log(meti);



// // 20. DOM ელემენტების ფილტრაცია: გქონდეს HTML ელემენტების მასივი.
//  filter-ის გამოყენებით დააბრუნე მხოლოდ ის ელემენტები, რომელთაც 
//  აქვთ კონკრეტული CSS კლასი.
