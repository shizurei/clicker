
// VARS
let clicker =  {
    clicks: 0,
    clickAmt: 1,
    cps: 0
};
 
let clicks = clicker["clicks"];
let clickAmt = clicker["clickAmt"];
let cps =  clicker["cps"];

let clickCounter = document.getElementById("clickCount");
let clickAmtCounter = document.getElementById("clickAmt");
let cpsCounter = document.getElementById("cpsCount");

const clickName = "Cash: $"
const clickAmtName = "Click Amount: "


// FUNCTIONS

function clickFunc(){
    clicks += clickAmt;

    clickCounter.innerHTML = clickName + Math.floor(clicks);
    clickAmtCounter.innerHTML = clickAmtName + clickAmt;
}

function clickUpgrade(reward, price){
    if(clicks >= price){
        clicks -= price;
        clickAmt += reward;

        clickCounter.innerHTML = clickName + Math.floor(clicks);
        clickAmtCounter.innerHTML = clickAmtName + clickAmt;
    }
}

function autoClickUpgrade(reward, price){
    if(clicks >= price){
        clicks -= price;
        cps += reward;
        clickCounter.innerHTML = clickName + Math.floor(clicks);
        cpsCounter.innerHTML = "CPS: " + cps;
    }
}

function autoClick(){
    setInterval(() => {
        clicks += cps;
        clickCounter.innerHTML = clickName + Math.floor(clicks);
    }, 1000)
}
