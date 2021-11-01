ctx.fillStyle = "lime";
let count=0;
let random;
ctx.fillRect(canv.width/2-10,canv.height/2-10,20,20);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,canv.width,canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  snake.push({x:px,y:py});
  for(let i=0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE-10,snake[i].y*SIZE-10,SIZE-2,SIZE-2);
    if(snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
  }
  while(snake.length > tail){
    snake.shift();
  }
  if(appleX == px && appleY == py){
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
    random=Math.floor(Math.random()*3);
    if(random==2){
      tail=tail+1;
    }else if(random==1){
      tail=tail+3
    }else{
      tail=tail-2;
    }
    count=count+1;
    if(count==4){
      count=0;
    }
  }
    ctx.fillStyle = color[count];
    ctx.fillRect(appleX*SIZE,appleY*SIZE,SIZE-2,SIZE-2);
},1000/FPS);
