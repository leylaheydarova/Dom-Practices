// //getElementsByName returns atribute name (not recommended for use)
// console.log(document.getElementsByName("ElementName"));

// //getElementsByTagName returns tag name (not recommended for use).
// console.log(document.getElementsByTagName("h1"));

// //getElementsByClassName
// console.log(document.getElementsByClassName("hero"));

// //getElementById
// const blueElement = document.getElementById("blue");
// blueElement.style.color = "blue";
// const redElement = document.getElementById("red");
// redElement.style.color = "red";
// const greenElement = document.getElementById("green");
// greenElement.style.color = "green";

// //querySelector returns css selectors
// const card = document.querySelector(".card");
// card.style.backgroundColor = blue;
// //querySelectorAll

//Task 1. Siyahinin ilk elementini console cixarin.
console.log(document.querySelector(".Task1List").firstElementChild);

//Task 2. Yalniz JS kodu ile deyisiklik edin. 
//Basligi silin.
document.title = ""; 
//Siyahinin sonuna metn ile yeni bir bilme "Titan RTX" elave edin.
let list = document.getElementById("Task2List");
let newItem = document.createElement('li');
newItem.textContent = "TITAN RTX";
list.appendChild(newItem);

//Task 3. Yalniz JS kodundan istifade ederek deyisiklik edin.
//basliq metni "GeForce 20 Series"-a
document.title = "GeForce 20 Series";
//fon rengi stili primary klasi olan elementler #ebebeb rengine deyisdirin
let elements = document.getElementsByClassName("primaryClass");
for (var i = 0; i < elements.length; i++ ){
    elements[i].style.color = '#ebebeb';
}

//Task 4. Siyahinin primary klasina sahib olan butun elementleri konsola cixarin
for (var i = 0; i < elements.length; i++){
    console.log(elements[i]);
}

//Task 5. Yalniz JS kodundan istifade ederek sinifleri deyisdirin.
//butun siyahi elementlerine item sinfi elave edin.
// let listElements = document.querySelectorAll('li');
// listElements.forEach(function(item) {
//     item.classList.add('item');
// });
//siyahida primary sinfi olmayan elementlere secondary sinfi elave edin
let litsItems = document.querySelectorAll('li');
litsItems.forEach(function(item){
    item.classList.add(item.classList.contains('primaryClass')?'item':'Secondary', 'item')
})
