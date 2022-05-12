//Apenas se cargue la pagina
window.onload = function () {
  const canvas4 = document.querySelectorAll(".linea");
  for (let i = 0; i < canvas4.length; i++) {
    if (canvas4[i] && canvas4[i].getContext) {
      let ctx = canvas4[i].getContext("2d");
      if (ctx) {
        //Manzana
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255, 0, 0)";
        ctx.beginPath();
        //Primera linea
        ctx.moveTo(0, 100);
        ctx.lineTo(200, 70);
        //Flecha1
        ctx.moveTo(200, 70);
        ctx.lineTo(195, 55);
        //Flecha2
        ctx.moveTo(200, 70);
        ctx.lineTo(195, 85);
        //Segunda linea
        ctx.moveTo(0, 100);
        ctx.lineTo(200, 150);
        //Flecha1
        ctx.moveTo(200, 150);
        ctx.lineTo(195, 135);
        //Flecha2
        ctx.moveTo(200, 150);
        ctx.lineTo(195, 165);
        //Tercera linea
        ctx.moveTo(0, 100);
        ctx.lineTo(200, 240);
        //Flecha1
        ctx.moveTo(200, 240);
        ctx.lineTo(195, 250);
        //Flecha2
        ctx.moveTo(200, 240);
        ctx.lineTo(195, 225);
        ctx.stroke();
        //Pera
        ctx.strokeStyle = "rgb(0, 255, 0)";
        ctx.beginPath();
        //Primera linea
        ctx.moveTo(0, 200);
        ctx.lineTo(200, 80);
        //Flecha1
        ctx.moveTo(200, 80);
        ctx.lineTo(195, 95);
        //Flecha2
        ctx.moveTo(200, 80);
        ctx.lineTo(195, 65);
        //Segunda linea
        ctx.moveTo(0, 200);
        ctx.lineTo(200, 170);
        //Flecha1
        ctx.moveTo(200, 170);
        ctx.lineTo(195, 185);
        //Flecha2
        ctx.moveTo(200, 170);
        ctx.lineTo(195, 155);
        //Tercera linea
        ctx.moveTo(0, 200);
        ctx.lineTo(200, 250);
        //Flecha1
        ctx.moveTo(200, 250);
        ctx.lineTo(195, 265);
        //Flecha2
        ctx.moveTo(200, 250);
        ctx.lineTo(195, 235);
        ctx.stroke();
      }
    }
  }
  const canvas5 = document.getElementById("linea5");
  if (canvas5 && canvas5.getContext) {
    let ctx = canvas5.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(255,255,0)";
      ctx.beginPath();
      //Primera Linea
      ctx.moveTo(0, 20);
      ctx.lineTo(200, 20);
      //Flechas
      ctx.moveTo(200, 20);
      ctx.lineTo(195, 35);
      ctx.moveTo(200, 20);
      ctx.lineTo(195, 5);
      ctx.stroke();
      //Segunda Linea
      ctx.strokeStyle = "rgb(255,150,150)";
      ctx.beginPath();
      ctx.moveTo(0, 120);
      ctx.lineTo(200, 600);
      //Flechas
      ctx.moveTo(200, 600);
      ctx.lineTo(175, 600);
      ctx.moveTo(200, 600);
      ctx.lineTo(200, 575);
      ctx.stroke();
      //Tercera Linea
      ctx.strokeStyle = "rgb(255,0,0)";
      ctx.beginPath();
      ctx.moveTo(0, 220);
      ctx.lineTo(200, 220);
      //Flechas
      ctx.moveTo(200, 220);
      ctx.lineTo(195, 235);
      ctx.moveTo(200, 220);
      ctx.lineTo(195, 205);
      ctx.stroke();
      //Cuarta linea
      ctx.strokeStyle = "rgb(0,0,255)";
      ctx.beginPath();
      ctx.moveTo(0, 320);
      ctx.lineTo(200, 320);
      //Flechas
      ctx.moveTo(200, 320);
      ctx.lineTo(195, 335);
      ctx.moveTo(200, 320);
      ctx.lineTo(195, 305);
      ctx.stroke();
      //Quinta Linea
      ctx.strokeStyle = "rgb(240,100,200)";
      ctx.beginPath();
      ctx.moveTo(0, 420);
      ctx.lineTo(200, 420);
      //Flechas
      ctx.moveTo(200, 420);
      ctx.lineTo(195, 435);
      ctx.moveTo(200, 420);
      ctx.lineTo(195, 405);
      ctx.stroke();
      //Sexta Linea
      ctx.strokeStyle = "rgb(100,100,100)";
      ctx.beginPath();
      ctx.moveTo(0, 520);
      ctx.lineTo(200, 520);
      //Flechas
      ctx.moveTo(200, 520);
      ctx.lineTo(195, 535);
      ctx.moveTo(200, 520);
      ctx.lineTo(195, 505);
      ctx.stroke();
      //Septima Linea
      ctx.strokeStyle = "rgb(255,0,0)";
      ctx.beginPath();
      ctx.moveTo(0, 600);
      ctx.lineTo(200, 120);
      //Flechas
      ctx.moveTo(200, 120);
      ctx.lineTo(175, 120);
      ctx.moveTo(200, 120);
      ctx.lineTo(200, 145);
      ctx.stroke();
    }
  }
  const canvas6 = document.getElementById("linea6");
  if (canvas6 && canvas6.getContext) {
    let ctx = canvas6.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2;
      //Primera Linea
      ctx.strokeStyle = "rgb(0,0,255)";
      ctx.beginPath();
      ctx.moveTo(0, 50);
      ctx.lineTo(200, 50);
      //Flechas
      ctx.moveTo(199, 50);
      ctx.lineTo(195, 60);
      ctx.moveTo(199, 50);
      ctx.lineTo(195, 40);
      //Segunda Linea
      ctx.moveTo(0, 150);
      ctx.lineTo(200, 150);
      //Flechas
      ctx.moveTo(199, 150);
      ctx.lineTo(195, 160);
      ctx.moveTo(199, 150);
      ctx.lineTo(195, 140);
      //Tercera Linea
      ctx.moveTo(0, 250);
      ctx.lineTo(200, 250);
      //Flechas
      ctx.moveTo(199, 250);
      ctx.lineTo(195, 260);
      ctx.moveTo(199, 250);
      ctx.lineTo(195, 240);
      //Cuarta Linea
      ctx.moveTo(0, 350);
      ctx.lineTo(200, 350);
      //Flechas
      ctx.moveTo(199, 350);
      ctx.lineTo(195, 360);
      ctx.moveTo(199, 350);
      ctx.lineTo(195, 340);
      //Quinta Linea
      ctx.moveTo(0, 450);
      ctx.lineTo(200, 450);
      //Flechas
      ctx.moveTo(199, 450);
      ctx.lineTo(195, 460);
      ctx.moveTo(199, 450);
      ctx.lineTo(195, 440);

      ctx.stroke();
    }
  }
};
