
function calcular() 
            {
                let seleccion=document.getElementById("categoria").value;
                let cantidad=document.getElementById("cantidad").value;
                let total=0;

                if (cantidad<0)
                {
                    alert("error no se pudo procesar la transaccion debe comprar al menos una entrada")
                }

                if (seleccion==1)
                {
                    total=cantidad*200 - cantidad*200*0.8;
                }
                if (seleccion==2)
                {
                    total=cantidad*200 - cantidad*200*0.5;
                } 
                if (seleccion==3)
                {
                    total=cantidad*200 - cantidad*200*0.15;
                }
                

                
                document.getElementById("total").value=total;

            
            }
            document.getElementById("boton").onclick=function(){
            calcular();
            }
