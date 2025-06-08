

function teste() {
    var veneno1 = slc_Veneno1.value
    var veneno2 = slc_Veneno2.value
    var veneno3 = slc_Veneno3.value


    console.log(veneno1, veneno2, veneno3)
}

    // window.addEventListener('load', function Audio(){
    //     {
    //         var audio = document.getElementById('musica_tema');
    //         audio.volume = 0.1
    //         // Tenta iniciar o áudio automaticamente
    //         audio.play().catch(function(error) {
    //             // Caso o navegador bloqueie, informa ao usuário que um clique é necessário
    //             console.log("A reprodução automática foi bloqueada. Clique em qualquer lugar para iniciar o áudio.");
                
    //             document.addEventListener('click', function() {
    //                 audio.play();
    //             }, { once: true });
    //         });
    //     }
    // })


        
   



function side(){
    if (div_side.style.display == "none" || div_side.style.display == "")
        {div_side.style.display = "flex"; 
            btn_side.style.position = "sticky";
            btn_side.style.height = "40px";
            
        } 

    else {div_side.style.display = "none";
        btn_side.style.position = "fixed";
        btn_side.style.top = "0px";
        btn_side.style.left = "0px";
        }

    // var audio = document.getElementById('musica_tema');
    //         audio.volume = 0.1
    //         // Tenta iniciar o áudio automaticamente
    //         audio.play().catch(function(error) {
    //              // Caso o navegador bloqueie, informa ao usuário que um clique é necessário
    //              console.log("A reprodução automática foi bloqueada. Clique em qualquer lugar para iniciar o áudio.");
                
                
    //                 audio.play();
    //             }, { once: true });
          
}

function aleatorio(){
    var numero_alt = Math.random()


    var veneno1 = Math.floor(((numero_alt * 3)+1))
    
    var veneno2 = Math.floor(((numero_alt * 6)+1))

    var veneno3 = Math.floor(((numero_alt * 7)+1))
    
    var smt1 = ""

    var smt2 = ""
    var smt3 = ""

    // veneno 1

    if (veneno1 == 1){smt1 = "Cone de 6M"}
    else if( veneno1 == 2){smt1 = "Golpe em alcance Curto"}
    else if (veneno1 == 3) {smt1 = "Alcance toque"}
    

    if     (veneno2 == 1){smt2 = "O alvo recebe 1 ação padrão adicional em seu turno."}
    else if(veneno2 == 2){smt2 = "o alvo recebe 1d6 de perda de pv a cada 2 pms gastos"}
    else if(veneno2 == 3){smt2 = "O alvo faz um teste de fort (cd atributo mental a escolha ) se falhar ficar exausto por 1 rodada se passar fica fraco por 1 rodada"}
    else if(veneno2 == 4){smt2 = "O alvo recebe +2d4 de dano de acido a cada 1 PMs gasto"}
    else if(veneno2 == 5){smt2 = "O alvo recebe +1d8+3 de dano de fogo a cada 2PM gasto"}
    else if(veneno2 == 6){smt2 = "Cura 1d8+1 PVs por PM gasto"}



    if      (veneno3 == 1){smt3= "Cura 1d4 PMs"}
    else if (veneno3 == 2){smt3= "Cura efeitos negativos que estejam te afetando"}
    else if (veneno3 == 3){smt3 = "Recebe regeneração rapida igual ao nivel por 1d3 rodadas"}
    else if (veneno3 == 4){smt3 = "O alvo recebe 1 ação padrão adicional em seu turno."}
    else if (veneno3 == 5){smt3 = "Cura 1d8+1 PVs por PM gasto"}
    else if (veneno3 == 6){smt3 = "Recebe 1d40 de dano"}
    else if (veneno3 == 7){smt3 = "Fica fatigado"}
    


    div_alerta.innerHTML = `<span class="alerta">Alcance: ${smt1}<br>
    Efeito 1:${smt2}<br>
    Efeito 2:<span id="censura" class="censura" onclick="descenssurar()">${smt3}</span></span>
    `

    console.log (numero_alt, veneno2, veneno3)
}


function descenssurar(){censura.classList.toggle('semcensura')

}