
//lunchお茶 まわる, Lunchにならない

/*
let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function () {
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
}
*/



//場所の名前は入れ替わる、lunchのときスピンしない
/*
function toggleDivs() {
    var divA = document.getElementById('sectionA');
    var divB = document.getElementById('sectionB');
    var toggleSwitch = document.querySelector('input[type="checkbox"]');
    var label = document.querySelector('.switch span');

    // Check if the checkbox is checked
    if (toggleSwitch.checked) {
        divA.style.display = 'none';
        divB.style.display = 'block';
    } else {
        divA.style.display = 'block';
        divB.style.display = 'none';
    }
}

let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);

spinBtn.onclick = function () {
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
}
*/

function toggleDivs() {
    var divA = document.getElementById('sectionA');
    var divB = document.getElementById('sectionB');
    var toggleSwitch = document.querySelector('input[type="checkbox"]');
    var label = document.querySelector('.switch span');

    // Check if the checkbox is checked
    if (toggleSwitch.checked) {
        divA.style.display = 'none';
        divB.style.display = 'block';
    } else {
        divA.style.display = 'block';
        divB.style.display = 'none';
    }

    // Enable or disable the spin button based on the toggle switch
    var spinBtn = document.querySelector('.spinBtn');
    spinBtn.disabled = toggleSwitch.checked; // Disable the button when the switch is on

    // Update the value variable for spinning
    value = Math.ceil(Math.random() * 3600);
}

let wheel = document.querySelector('.wheel');
let value = Math.ceil(Math.random() * 3600);

document.querySelector('.spinBtn').onclick = function () {
    wheel.style.transform = 'rotate(' + value + 'deg)';
    value += Math.ceil(Math.random() * 3600);
};
