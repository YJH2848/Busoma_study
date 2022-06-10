let output = document.getElementById('passward')
let output2 = document.getElementById('passward2')
let output3 = document.getElementById('passward3')
let output4 = document.getElementById('passward4')
function pwd(){
    let a = Math.floor(Math.random()*4)
    switch(a){
        case 0:
            output.textContent = 'qlDLADF123!@';
            output2.textContent = 'Iwant_123!';
            output3.textContent = 'Gohome_94$';
            output4.textContent = 'zipgagoship_1!';
            break;
        case 1:
            output.textContent = 'Iwant_123!';
            output2.textContent = 'Gohome_94$';
            output3.textContent = 'zipgagoship_1!';
            output4.textContent = 'qlDLADF123!@';
            break;
        case 2:
            output.textContent = 'Gohome_94$';
            output2.textContent = 'zipgagoship_1!';
            output3.textContent = 'qlDLADF123!@';
            output4.textContent = 'Iwant_123!';
            break;
        case 3:
            output.textContent = 'zipgagoship_1!';
            output2.textContent = 'qlDLADF123!@';
            output3.textContent = 'Iwant_123!';
            output4.textContent = 'Gohome_94$';
    }
}
function t1_execCommandCopy() {
    var content = document.getElementById('passward');
      content.select();
      document.execCommand('copy');

    }
function t2_execCommandCopy() {
    var content2 = document.getElementById('passward2');
      content2.select();
      document.execCommand('copy');

    }
function t3_execCommandCopy() {
    var content3 = document.getElementById('passward3');
      content3.select();
      document.execCommand('copy');

    }
function t4_execCommandCopy() {
    var content4 = document.getElementById('passward4');
      content4.select();
      document.execCommand('copy');

    }    