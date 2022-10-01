function input(val) {
  document.getElementById("input").value += val;
}

//function that evaluates the digit and return result
function solve() {
  let x = document.getElementById("input").value;
  // let flag=0;
  // pattern = ["*","+", "/", "-","%","0","1","2", "3", "4", "5", "6", "7", "8", "9"] ;
  // for(let i=0;i<x.length; i++ ){
  //   if (!(x[i] in pattern)){
  //     flag++;
  //     break;
  //   }
  // }
  // if (flag==1){
  //   alert("Only numerical values accepted!!!");
  //   clr();
  // }
  // else{
    let y = eval(x);
    document.getElementById("result").value = y;
  
}
function fun(){
  alert("feature coming soon");
}

//function that clear the display
function clr() {
  document.getElementById("result").value = "";
  document.getElementById("input").value = ""
}

document.addEventListener('keyup', (event) => {
  var name = event.key;
  if (name === 'Enter') {
    solve();
    console.log("test")
  }
}, false);
