const textbox=document.getElementById("textbox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelcius=document.getElementById("toCelcius");
const result=document.getElementById("result");

let temp;

function convert()
{
    if(toFahrenheit.checked)
        {
            temp=Number(textbox.value);
            temp=(temp*9/5)+32;
            result.textContent=temp+"℉";
        }
        else if(toCelcius.checked)
            {
                temp=Number(textbox.value);
                temp=(temp-32)*9/5;
                result.textContent=temp+"℃";
            }
            else
            {
                result.textContent="Select a unit";
            }
}