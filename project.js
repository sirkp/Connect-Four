var player1Color = 'rgb(32, 108, 232)'
var player2Color = 'rgb(237, 9, 58)'
var defaultColor = 'rgb(93, 96, 99)'
var color
var circles = $('td')
var column
var turn=1
var heading = $('h1')
var heading2 = $('h2')
var table = $('table')

function getColor(cl) {
  return circles.eq(cl).css('background-color')
}

function changeColor(){
  var cl= column+35
  var i=6

  while(i--){
    if(getColor(cl)===defaultColor){
      circles.eq(cl).css('background-color',color)
      break
    }
    cl-=7
  }
}

function horizontalWin(){
  for(var i=0;i<=35;i+=7){
    for(var k=0;k<4;k++){
      var j=k+i
      //console.log(i+ " "+j+" "+getColor(j)+ " " +getColor(j+1)+" "+getColor(j+2)+" "+ getColor(j+4))
      if(getColor(j)==getColor(j+1)&& getColor(j)==getColor(j+2)&& getColor(j)==getColor(j+3) && getColor(j)!=defaultColor)
     return true
    }
  }
  return false
}

function verticalWin(){
	for(var i=0;i<7;i++){
      for(var j=i;j<=(i+14);j+=7){
		     //console.log(i+' '+j+' '+getColor(j)+' '+getColor(j+7)+' '+getColor(j+14)+' '+getColor(j+21))
         if(getColor(j)==getColor(j+7) && getColor(j)==getColor(j+14) && getColor(j)==getColor(j+21) && getColor(j)!=defaultColor)
         return true
       }
     }
      return false
}

function checkWin(){
  if(verticalWin())
  return true
  else if(horizontalWin())
  return true
  else
  return false
}


//game
$('td').click(function() {
    column = $(this).index()
    //
    // if(noWin()){
    //   alert('Nobody wins')
    // }

    if (turn==1){
      color=player2Color
      turn =2;
    }
    else {
    color=player1Color
    turn =1
    }

    changeColor(color)

    //console.log(horizontalWin()+' '+verticalWin())
       if(checkWin()){
         if(turn==2)
         heading.text('First Player Win')
         else
           heading.text('Second Player Win')

           table.fadeOut(3000)
           heading2.text("Refreh to play again")
      }
  })
