var open=0;
var displ;


function mostrar(){
    if(open==0){ 
        displ=document.getElementById('form1').style.display;
        document.getElementById('form1').style.display= 'block';
        document.getElementById('planeta1').style.transform= 'scale(1.5,1.5)';

        document.getElementById('planeta2').style.display= 'none';
        document.getElementById('planeta3').style.display= 'none';
        document.getElementById('planeta4').style.display= 'none';
        document.getElementById('planeta5').style.display= 'none';

        open=1;
    }
    else{alert("primero debe cerrar las ventana emergentes")}
   
  }

  function ocultar(){
    document.getElementById('form1').style.display= 'none';
    
    document.getElementById('planeta2').style.display= displ;
    document.getElementById('planeta3').style.display= displ;
    document.getElementById('planeta4').style.display= displ;
    document.getElementById('planeta5').style.display= displ;
    document.getElementById('planeta1').style.transform= 'scale(1,1)';

    open=0;
  }

  function mostrar2(){
    if(open==0){
      displ=document.getElementById('form2').style.display;
      document.getElementById('form2').style.display= 'block';
      document.getElementById('planeta2').style.transform= 'scale(1.5,1.5)';

      document.getElementById('planeta1').style.display= 'none';
      document.getElementById('planeta3').style.display= 'none';
      document.getElementById('planeta4').style.display= 'none';
      document.getElementById('planeta5').style.display= 'none';
    }
    else{alert("primero debe cerrar las ventana emergentes")}
  
  }

  function ocultar2(){
    document.getElementById('form2').style.display= 'none';
    
    document.getElementById('planeta1').style.display= displ;
    document.getElementById('planeta3').style.display= displ;
    document.getElementById('planeta4').style.display= displ;
    document.getElementById('planeta5').style.display= displ;
    document.getElementById('planeta2').style.transform= 'scale(1,1)';
    open=0;
  }

  function mostrar3(){
    if(open==0){
      displ=document.getElementById('form3').style.display;
      document.getElementById('form3').style.display= 'block';
      document.getElementById('planeta3').style.transform= 'scale(1.5,1.5)';

      document.getElementById('planeta1').style.display= 'none';
      document.getElementById('planeta2').style.display= 'none';
      document.getElementById('planeta4').style.display= 'none';
      document.getElementById('planeta5').style.display= 'none';
      open=1;
    }
    else{alert("primero debe cerrar las ventana emergentes")}
  
  }

  function ocultar3(){
    document.getElementById('form3').style.display= 'none';
    
    document.getElementById('planeta1').style.display= displ;
    document.getElementById('planeta2').style.display= displ;
    document.getElementById('planeta4').style.display= displ;
    document.getElementById('planeta5').style.display= displ;
    document.getElementById('planeta3').style.transform= 'scale(1,1)';
    open=0;
  }

  function mostrar4(){
    if(open==0){
      displ=document.getElementById('form4').style.display;
      document.getElementById('form4').style.display= 'block';
      document.getElementById('planeta4').style.transform= 'scale(1.5,1.5)';

      document.getElementById('planeta1').style.display= 'none';
      document.getElementById('planeta2').style.display= 'none';
      document.getElementById('planeta3').style.display= 'none';
      document.getElementById('planeta5').style.display= 'none';
      open=1;
    }
    else{alert("primero debe cerrar las ventana emergentes")}
  
  }

  function ocultar4(){
    document.getElementById('form4').style.display= 'none';
    document.getElementById('planeta1').style.display= displ;
    document.getElementById('planeta2').style.display= displ;
    document.getElementById('planeta3').style.display= displ;
    document.getElementById('planeta5').style.display= displ;
    document.getElementById('planeta4').style.transform= 'scale(1,1)';
    open=0;
  }
  function mostrar5(){
    if(open==0){
      displ=document.getElementById('form5').style.display;
      document.getElementById('form5').style.display= 'block';
      document.getElementById('planeta5').style.transform= 'scale(1.5,1.5)';

      document.getElementById('planeta1').style.display= 'none';
      document.getElementById('planeta2').style.display= 'none';
      document.getElementById('planeta3').style.display= 'none';
      document.getElementById('planeta4').style.display= 'none';
      open=1;
    }
    else{alert("primero debe cerrar las ventana emergentes")}
  
  }

  function ocultar5(){
    document.getElementById('form5').style.display= 'none';
    document.getElementById('planeta1').style.display= displ;
    document.getElementById('planeta2').style.display= displ;
    document.getElementById('planeta3').style.display= displ;
    document.getElementById('planeta4').style.display= displ;
    document.getElementById('planeta5').style.transform= 'scale(1,1)';
    open=0;
  }