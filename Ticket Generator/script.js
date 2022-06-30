let set01Ticket = document.getElementById('set01Ticket');
let set02Ticket = document.getElementById('set02Ticket');
let set03Ticket = document.getElementById('set03Ticket');
let set04Ticket = document.getElementById('set04Ticket');

//Random Numbers and Letters:
//Letters
let string01 = Math.floor(Math.random()*26);
let string02 = Math.floor(Math.random()*26);


//Numbers
let int01 = Math.floor(Math.random()*9);
let int02 = Math.floor(Math.random()*9);


switch(string01){
    case 0:
        string01='a';
    break;
    case 1:
        string01='b';
    break;
    case 2:
        string01='c';
    break;
    case 3:
        string01='d';
    break;
    case 4:
        string01='e';
    break;
    case 5:
        string01='f';
    break; 
    case 6:
        string01='g';
    break;
    case 7:
        string01='h';
    break;
    case 8:
        string01='i';
    break;
    case 9:
        string01='j';
    break;
    case 10:
        string01='k';
    break;
    case 11:
        string01='l';
    break; 
    case 12:
        string01='m';
    break; 
    case 13:
        string01='n';
    break;
    case 14:
        string01='o';
    break;
    case 15:
        string01='p';
    break;
    case 16:
        string01='q';
    break;
    case 17:
        string01='r';
    break;
    case 18:
        string01='s';
    break; 
    case 19:
        string01='t';
    break;
    case 20:
        string01='u';
    break; 
    case 21:
        string01='v';
    break; 
    case 22:
        string01='w';
    break;
    case 23:
        string01='x';
    break;
    case 24:
        string01='y';
    break;
    case 25:
        string01='z';
    break;
    default:
        string01='eh?'
    break;
}
switch(string02){
    case 0:
        string02='a';
    break;
    case 1:
        string02='b';
    break;
    case 2:
        string02='c';
    break;
    case 3:
        string02='d';
    break;
    case 4:
        string02='e';
    break;
    case 5:
        string02='f';
    break; 
    case 6:
        string02='g';
    break;
    case 7:
        string02='h';
    break;
    case 8:
        string02='i';
    break;
    case 9:
        string02='j';
    break;
    case 10:
        string02='k';
    break;
    case 11:
        string02='l';
    break; 
    case 12:
        string02='m';
    break; 
    case 13:
        string02='n';
    break;
    case 14:
        string02='o';
    break;
    case 15:
        string02='p';
    break;
    case 16:
        string02='q';
    break;
    case 17:
        string02='r';
    break;
    case 18:
        string02='s';
    break; 
    case 19:
        string02='t';
    break;
    case 20:
        string02='u';
    break; 
    case 21:
        string02='v';
    break; 
    case 22:
        string02='w';
    break;
    case 23:
        string02='x';
    break;
    case 24:
        string02='y';
    break;
    case 25:
        string02='z';
    break;
    default:
        string02='eh?'
    break;
}


//Display Ticket codes:
function showTicket(){
    set01Ticket.innerHTML = string01+int01+string02+int02
}