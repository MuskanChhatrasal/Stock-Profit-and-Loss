const intialPrice = document.getElementById('intial_price')
const Quantity = document.getElementById('quantity')
const currentPrice = document.getElementById('current_price')
const submitBtn = document.getElementById('submit_button')
const Output = document.getElementById('result_section')



submitBtn.addEventListener("click",calculator);

function calculateProfitandLoss(IP,Q,CP){
    if(CP < IP){
        var loss = (IP - CP)*Q;
        loss = showTillTwoDecimal(loss);
        var lossPercent = ((IP-CP)/IP)*100;
        lossPercent = showTillTwoDecimal(lossPercent);
        var message = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercent}% `;
        colorOfText = "#000000";
        showMessage(message,colorOfText);

    }
    else if(CP > IP){
        var profit = (CP - IP)*Q;
        profit = showTillTwoDecimal(profit);
        var profitPercent = ((CP - IP)/IP)*100;
        profitPercent = showTillTwoDecimal(profitPercent);
        var message = `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPercent}%`;
        colorOfText = "#000000";
        showMessage(message,colorOfText);
    }
    else {
        var message = `No pain No gain and no gain no pain`;
        colorOfText = "#000000";
        showMessage(message,colorOfText);
    }
}

function calculator(){
    var IP = Number(intialPrice.value);
    var Q = Number(Quantity.value);
    var CP = Number(currentPrice.value);
    if(IP == 0  || Q == 0 || CP == 0){
        message = "Please Enter all required fields";
        colorOfText = "#000000";
        showMessage(message,colorOfText);
    }
    else if(IP < 0  || Q < 0 || CP < 0){
        message = "Please Enter positive values only";
        colorOfText = "#000000";
        showMessage(message,colorOfText);
    }
    else{
        calculateProfitandLoss(IP,Q,CP);
    }
    
}

function showMessage(message,colorOfText){
    Output.style.color = colorOfText;
    Output.innerHTML = message;
}


function showTillTwoDecimal(x){
    return Number.parseFloat(x).toFixed(2);
}
