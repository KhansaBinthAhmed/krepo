// function myinfo(){
//     alert("hello world")
//     document.write("i am a student")
// }
// function hello(){
//     document.write("my name is anusha")
// }
// function amongus(){
//     document.write("exploring click event on image")
// }
// function flower(){
//     document.write("Reading is my hobby")
// }
// document.write("<br/>")
// var ary=[10,20,30,40,50,60]
// document.write(ary+"<br/>")
// document.write(ary[3]);

// var ary=[10,"anusha","shahzad",3.14,true,null,'A']
// for(var a=0; a<=6; a++){
//     document.write(ary [a]+"<br/>")
// }
// const number=[1,2,3,4,5];
// let i=0
// while(i<number.length){
//     document.write(number[i]);
//     i++
// }
var student=[
    ["tehreem",22,"female","2001F1"],
    ["Maaz",20,"male","2201F1"],
    ["fatima",25,"female","2301S1"],
    ["Arhama",21,"female","2006C1"],
    ["Saad",22,"male","2402E1"],
]
for (var a=0; a<=4; a++){
    for(var b=0; b<=3; b++){
        document.write(student[a][b]+" ");
    }
    document.write("<br/>")
}
const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
let row=0;
while(row<matrix.length){
    let col=0
    while(col<matrix[row].length){
        document.write(matrix[row][col])
        col++
    }
    row++
}
var a=["Ayesha",23,"female","2001F1"]

document.write(a+"<br/>")

a[0]="Unzila";
document.write("array update <br/>")
document.write(a+"<br/>")
document.write("array deleted <br/>")
delete a[3];
document.write(a+"<br/>")
document.write("array sort <br/>")

var b=["maaz","Anum","farah","saad"]
b.sort();
document.write("array sort <br/>")
document.write(b+"<br/>")
document.write("array reversed <br/>")
b.reversed();
document.write(b+"<br/>")