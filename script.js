
document.body.style.backgroundColor = "lightblue"; 
var tup = [];
var dis = [];
var on_off = 'pause';
var action;
var steam = 'nosteam'

function myFunction(a) {
    if (on_off === 'pause'){
        tup.push(a.toLowerCase());
        dis.push(a);
        alert(dis);
        button.style.color = 'green';
        document.body.appendChild(button);
    }
}

let buttonCount = 0;
let buttonCount1 = 0;
let buttonCount2 = 0;
let buttonCount3 = 0;
let buttonCount4 = 0;

function createInactiveButtons() {
    const text = ["Water Temp", "Water Level", "Spin Speed", "Time Limit", "Soap Level"];
    for (let i = 0; i < 5; i++) {
        let inactiveButton = document.createElement('button');
        inactiveButton.innerHTML = text[i];
        inactiveButton.style.padding = '25px 35px';
        inactiveButton.style.backgroundColor = '#fbf2ac';
        inactiveButton.style.color = 'black';
        inactiveButton.style.fontSize='15px'
        inactiveButton.style.border = 'none';
        inactiveButton.style.borderRadius = '100px';
        inactiveButton.style.cursor = 'not-allowed';
        inactiveButton.style.position = 'absolute';
        inactiveButton.style.top = '50px';
        inactiveButton.style.left = (100 + (i * 180)) + 'px';
        inactiveButton.style.width = '150px';
        inactiveButton.style.overflow = 'hidden';
        inactiveButton.style.whiteSpace = 'nowrap';
        inactiveButton.style.textOverflow = 'period';
        document.body.appendChild(inactiveButton);
    }
}

function createSideButtons() {
    let greenButton = document.createElement('button');
    greenButton.innerHTML = 'Start';
    greenButton.style.padding = '65px 35px';
    greenButton.style.backgroundColor = 'green';
    greenButton.style.color = 'white';
    greenButton.style.border = 'none';
    greenButton.style.borderRadius = '100000px';
    greenButton.style.cursor = 'pointer';
    greenButton.style.position = 'absolute';
    greenButton.style.top = '200px';
    greenButton.style.left = '1000px';
    greenButton.style.width = '150px';
    greenButton.style.overflow = 'hidden';
    greenButton.style.whiteSpace = 'nowrap';
    greenButton.style.textOverflow = 'ellipsis';
    greenButton.addEventListener('click', function () {
        if (dis.length>=5) {
           if (on_off === "start"){
             alert("Already Started")
           }

           else{
            on_off = 'start'
            alert("Starting")
           }
             
        }
    });
    document.body.appendChild(greenButton);

    let redButton = document.createElement('button');
    redButton.innerHTML = 'Pause';
    redButton.style.padding = '65px 35px';
    redButton.style.backgroundColor = 'red';
    redButton.style.color = 'white';
    redButton.style.border = 'none';
    redButton.style.borderRadius = '100000px';
    redButton.style.cursor = 'pointer';
    redButton.style.position = 'absolute';
    redButton.style.top = '400px';
    redButton.style.left = '1000px';
    redButton.style.width = '150px';
    redButton.style.overflow = 'hidden';
    redButton.style.whiteSpace = 'nowrap';
    redButton.style.textOverflow = 'ellipsis';
    redButton.addEventListener('click', function () {
        if (on_off === 'start') {
            alert('Pausing');
            on_off = 'pause';
        }
        else {
            return;
        }
    });
    document.body.appendChild(redButton);
}

function bbcreate(b) {
    if (tup.length >= 1) {
        return;
    } else {
        let button = document.createElement('button');
        button.innerHTML = b;
        button.style.padding = '25px 35px';
        button.style.backgroundColor = '#000000';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.position = 'absolute';
        button.style.top = (150 + (buttonCount * 80)) + 'px';
        button.style.left = '100px';
        button.style.width = '150px';
        button.style.overflow = 'hidden';
        button.style.whiteSpace = 'nowrap';
        button.style.textOverflow = 'ellipsis';
        button.addEventListener('click', function () {
            if (tup.length < 1) {
                myFunction(b);
            }
        });
        document.body.appendChild(button);
        buttonCount++;
    }
}

function temp() {
    bbcreate('Cold');
    bbcreate('Normal');
    bbcreate('Warm');
    bbcreate('Hot');
    bbcreate('Extra Hot');
}

function bbcreate1(b) {
    if (tup.length >= 2) {
        return;
    } else {
        let button = document.createElement('button');
        button.innerHTML = b;
        button.style.padding = '25px 35px';
        button.style.backgroundColor = '#000000';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.position = 'absolute';
        button.style.top = (150 + (buttonCount1 * 80)) + 'px';
        button.style.left = '280px';
        button.style.width = '150px';
        button.style.overflow = 'hidden';
        button.style.whiteSpace = 'nowrap';
        button.style.textOverflow = 'ellipsis';
        button.addEventListener('click', function () {
            if (tup.length < 2 && tup.length > 0) {
                myFunction(b);
            }
        });
        document.body.appendChild(button);
        buttonCount1++;
    }
}

function level() {
    bbcreate1('No Water');
    bbcreate1('1/3');
    bbcreate1('1/2');
    bbcreate1('2/3');
    bbcreate1('Max');
}

function bbcreate2(b) {
    if (tup.length >= 3) {
        return;
    } else {
        let button = document.createElement('button');
        button.innerHTML = b;
        button.style.padding = '25px 35px';
        button.style.backgroundColor = '#000000';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.position = 'absolute';
        button.style.top = (150 + (buttonCount2 * 80)) + 'px';
        button.style.left = '460px';
        button.style.width = '150px';
        button.style.overflow = 'hidden';
        button.style.whiteSpace = 'nowrap';
        button.style.textOverflow = 'ellipsis';
        button.addEventListener('click', function () {
            if (tup.length < 3 && tup.length > 1) {
                myFunction(b);
            }
        });
        document.body.appendChild(button);
        buttonCount2++;
    }
}

function spin() {
    bbcreate2('No Spin');
    bbcreate2('Low Speed');
    bbcreate2('Med Speed');
    bbcreate2('High Speed');
    bbcreate2('Extra High');
}

function bbcreate3(b) {
    if (tup.length >= 4) {
        return;
    } else {
        let button = document.createElement('button');
        button.innerHTML = b;
        button.style.padding = '25px 35px';
        button.style.backgroundColor = '#000000';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.position = 'absolute';
        button.style.top = (150 + (buttonCount3 * 80)) + 'px';
        button.style.left = '640px';
        button.style.width = '150px';
        button.style.overflow = 'hidden';
        button.style.whiteSpace = 'nowrap';
        button.style.textOverflow = 'ellipsis';
        button.addEventListener('click', function () {
            if (tup.length < 4 && tup.length > 2) {
                myFunction(b);
            }
        });
        document.body.appendChild(button);
        buttonCount3++;
    }
}

function time() {
    bbcreate3('15 Min');
    bbcreate3('30 Min');
    bbcreate3('1 Hrs');
    bbcreate3('1.5 Hrs');
    bbcreate3('2 Hrs');
}

function bbcreate4(b) {
    if (tup.length >= 5) {
        return;
    } else {
        let button = document.createElement('button');
        button.innerHTML = b;
        button.style.padding = '25px 35px';
        button.style.backgroundColor = '#000000';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.position = 'absolute';
        button.style.top = (150 + (buttonCount4 * 80)) + 'px';
        button.style.left = '820px';
        button.style.width = '150px';
        button.style.overflow = 'hidden';
        button.style.whiteSpace = 'nowrap';
        button.style.textOverflow = 'period';
        button.addEventListener('click', function () {
            if (tup.length < 5 && tup.length > 3) {
                myFunction(b);
            }
        });
        document.body.appendChild(button);
        buttonCount4++;
    }
}

function soap() {
    bbcreate4('No Soap');
    bbcreate4('Some Soap');
    bbcreate4('Med Soap');
    bbcreate4('Max Soap');
    bbcreate4('Bleach/Vinegar')

}

function createButtoneer() {
    let inactiveButton = document.createElement('button');
    inactiveButton.innerHTML = 'Aarav + Rishik Washing Machine!';
    inactiveButton.style.padding = '55px 35px';
    inactiveButton.style.fontSize='50px'
    inactiveButton.style.backgroundColor = 'lightblue';
    inactiveButton.style.color = 'black';
    inactiveButton.style.border = 'none';
    inactiveButton.style.borderRadius = '50px';
    inactiveButton.style.cursor = 'not-allowed';
    inactiveButton.style.position = 'absolute';
    inactiveButton.style.top = '550px';
    inactiveButton.style.left = '0px';
    inactiveButton.style.width = '950px';
    inactiveButton.style.overflow = 'hidden';
    inactiveButton.style.whiteSpace = 'nowrap';
    inactiveButton.style.textOverflow = 'ellipsis';
    document.body.appendChild(inactiveButton);
    }

function createSteam(b) {
        if (tup.length >= 5) {
            return;
        } else {
            let button = document.createElement('button');
            button.innerHTML = b;
            button.style.padding = '30px 30px';
            button.style.backgroundColor = 'white';
            button.innerHTML = 'Steam On/Off';
            button.style.fontSize='15px'
            button.style.color = 'black';
            button.style.border = 'none';
            button.style.borderRadius = '5px';
            button.style.cursor = 'pointer';
            button.style.position = 'absolute';
            button.style.top = "50px";
            button.style.left = '1000px';
            button.style.width = '150px';
            button.style.overflow = 'hidden';
            button.style.whiteSpace = 'nowrap';
            button.style.textOverflow = 'period';
            button.addEventListener('click', function () {
                if (steam=="nosteam") {
                    steam="steam"
                    alert("Steam turned on")
                }
                else {
                    steam="nosteam"
                    alert("Steam turned off")
                }
            });
            document.body.appendChild(button);
        }
    }
    


function button() {
    createInactiveButtons();
    createSideButtons();
    temp();
    level();
    spin();
    time();
    soap();
    createButtoneer();
    createSteam();
}

button();
