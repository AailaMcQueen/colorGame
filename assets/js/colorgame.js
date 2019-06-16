var options=6;
var colors=[];
var h1=document.querySelector("h1");
var btn=document.querySelector(".refreshColors");
var easy=document.querySelector(".easy");
var hard= document.querySelector(".hard");
var selectedColor;
var alert=document.querySelector(".alert");
var colorPicked= document.querySelector(".colorPicked");
function basic(options)
{
  for(var i=0;i<options;i++)
  {
      colors[i]="rgb("+Math.floor(Math.random() * 256)+", "+ Math.floor(Math.random() * 256)+", " +Math.floor(Math.random() * 256)+")";
  };
  selectedColor=colors[Math.floor(Math.random() * options)];
  colorPicked.innerText = selectedColor;
};
basic(options);
var squares=document.querySelectorAll(".square");

for(var i=0; i<squares.length; i++){
  squares[i].style.backgroundColor=colors[i];
}
var colorPicked= document.querySelector(".colorPicked");
colorPicked.innerText = selectedColor;
for(var i=0;i<colors.length;i++){
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(String(clickedColor)==selectedColor){
      for(var j=0; j<colors.length;j++){
        squares[j].style.backgroundColor=selectedColor;
      };
      h1.style.backgroundColor=selectedColor;
      alert.innerText="Correct!!";
      btn.innerText="Play Again?";
    };
    if(String(clickedColor)!=selectedColor){
      this.style.backgroundColor="#232323";
      alert.innerText="Try Again!!";
    }
  })
};
btn.addEventListener("click", function(){
  basic(options);
  h1.style.backgroundColor="steelblue";
  alert.innerText="";
  btn.innerText="New Colors";
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
  }
});
easy.addEventListener("click", function(){
  options=3;
  h1.style.backgroundColor="steelblue";
  alert.innerText="";
  btn.innerText="New Colors";
  basic(options);
  easy.classList.add("selected");
  hard.classList.remove("selected");
  for(var i=0; i<squares.length; i++){
    if(i<3)
    {
      squares[i].style.backgroundColor=colors[i];
    }
    if(i>=3){
      squares[i].style.display="none";
    }
}

});
hard.addEventListener("click", function(){
  options=6;
  h1.style.backgroundColor="steelblue";
  alert.innerText="";
  btn.innerText="New Colors";
  basic(options);
  hard.classList.add("selected");
  easy.classList.remove("selected");
  for(var i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].style.display="block";
}});
