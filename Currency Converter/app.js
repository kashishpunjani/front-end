const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button")

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")



// for (CurrCode in countryList){
//     console.log(CurrCode , countryList[CurrCode]);      // CurrCode = currency code ,  countryList[CurrCode] = country code
// }

for (let select of dropdowns){                                   //1.
    for (CurrCode in countryList){
        newOption = document.createElement("option");
        newOption.innerText = CurrCode;
        newOption.value = CurrCode;
        if(select.name == "from" && CurrCode == "USD"){
            newOption.selected = "selected"
        }
        else if(select.name == "to" && CurrCode == "INR"){
            newOption.selected = "selected"
        }
        select.append(newOption);   //country ki list thi usko phle indivisual option k andar convert kr rhe h phle fir select ke andar un option ko add jr rhe h 
    }
    select.addEventListener("change" , (evt)=>{
        updateflag(evt.target);
    });
}


const updateExchangeRate = async() =>{                              //2................... // this is last process but we want to update this so we paste this from last to the middle      
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    // console.log(amtval);
    if (amtval === "" || amtval < 1){
        amtval = 1;
        amount.value = "1";
    };
    // console.log(fromCurr.value , toCurr.value);
    const URL = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL)     // to access this we make our function async so we............... functtion async
    let data = await response.json();
    let rate =  data[toCurr.value.toLowerCase()]
    // console.log(rate , amount);
    let finalamount = amtval * rate;
    msg.innerText = `${amtval}  ${fromCurr.value} = ${finalamount} ${toCurr.value}`;
}


const updateflag = (element) =>{                                     //2...................
    let CurrCode = element.value;
    // console.log(CurrCode);
    let countryCode = countryList[CurrCode];     //currency code se country code le kr arhe h yha  , countryCode will be diffrent for each other  for INR countryCode will be IN , USD = US

    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    
    let img = element.parentElement.querySelector("img")
    img.src = newsrc;
}



btn.addEventListener("click" , (evt) => {                             //3...................
    evt.preventDefault();
    updateExchangeRate();
});


window.document.addEventListener("load" , () =>{                      //5...................
    updateExchangeRate();
})