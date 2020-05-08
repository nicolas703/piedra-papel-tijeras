alert("Bienvenido al juego.");



let generateOption = () => {

        let option = ['piedra','papel','tijeras','lagarto', 'spock'];

        let optionRa = Math.floor(Math.random() * option.length);

   return option[optionRa];
};
let usuario = prompt(' Debe elegir: piedra, papel, tijeras, lagarto o spock');
 let computadora= generateOption()
 let result ='0';

if (usuario =='piedra' && computadora == 'lagarto'){
    result=('Piedra aplasta lagarto. Ganaste.')
}else if (usuario == 'piedra' && computadora == 'tijeras'){
    result=('piedra aplasta tijeras, Ganaste')
}else if (usuario == 'tijeras' && computadora == 'papel'){
    result=('tijeras cortan papel. Ganaste')
}else if (usuario == 'papel' && computadora == 'piedra'){
    result=('papel tapa piedra. Ganaste')
}else if (usuario == 'lagarto' && computadora == 'spock'){
    result=('lagarto envenena spock. Ganaste')
}else if (usuario == 'spock' && computadora == 'tijeras'){
    result=('spock rompe tijeras. Ganaste')
}else if (usuario == 'tijeras' && computadora == 'lagarto'){
    result=('tijeras decapitan lagarto. Ganaste')
}else if (usuario == 'lagarto' && computadora == 'papel'){
    result=('lagarto devora papel. Ganaste')
}else if (usuario == 'papel' && computadora == 'spock'){
    result=('papel desautoriza spock. Ganaste')
}else if (usuario == 'spock' && computadora == 'piedra'){
    result=('spock vaporiza pidra. Ganaste')
}else if (usuario == 'tijeras' && computadora == 'piedra'){
    result=('piedra aplasta a tijeras. Has perdido, vuelve a intentar')
}else if (usuario == 'piedra' && computadora == 'spock'){
    result=('spock vaporiza piedra. Has perdido, vuelve a intentar')
}else if (usuario == 'spock' && computadora == 'papel'){
    result=('papel desautoriza spock. Has perdido, vuelve a intentar')
}else if (usuario == 'papel' && computadora == 'lagarto'){
    result=('lagarto devora papel. Has perdido, vuelve a intentar')
}else if (usuario == 'lagarto' && computadora == 'tijeras'){
    result=('tijeras decapitan lagarto. Has perdido, vuelve a intentar')
}else if (usuario == 'tijeras' && computadora == 'spock'){
    result=('spock rompe tijeras. Has perdido, vuelve a intentar')
}else if (usuario == 'spock' && computadora == 'lagarto'){
    result=('lagarto envenena spock. Has perdido, vuelve a intentar')
}else if (usuario == 'lagarto' && computadora == 'piedra'){
    result=('piedra aplasta a lagarto. Has perdido, vuelve a intentar')
}else if (usuario == 'piedra' && computadora == 'papel'){
    result=('papel tapa a piedra. Has perdido, vuelve a intentar')
}else if (usuario == 'papel' && computadora == 'tijeras'){
    result=('tijeras cortan papel. Has perdido, vuelve a intentar')
}else if (usuario == 'papel' && computadora == 'papel'){
    result=('Empate')
}else if (usuario == 'piedra' && computadora == 'piedra'){
    result=('Empate')
}else if (usuario == 'tijeras' && computadora == 'tijeras'){
    result=('Empate')
}else if (usuario == 'spock' && computadora == 'spock'){
    result=('Empate')
}else if (usuario == 'lagarto' && computadora == 'lagarto'){
    result=('Empate')
}else{
    result= ('Jugada no valida')
}

console.log('has elegido: ' + usuario + ' y computadora eligio: ' + computadora)

console.log(result);



