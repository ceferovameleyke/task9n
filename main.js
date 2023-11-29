
const blok1Input = document.querySelector(".blok1")
const blok2Input = document.querySelector(".blok2")
const blok3Input = document.querySelector(".blok3")
const button = document.querySelector("button")
const tbody = document.querySelector("#tbody")


button.addEventListener("click", () => {
    let input1Value = blok1Input.value;
    let input2value = blok2Input.value;
    let input3value = blok3Input.value;
    let radio = document.querySelector('input[name="jenre"]:checked')
    let radioValue = radio?.value;

    if (input1Value && input2value && input3value && radioValue) {
        tbody.innerHTML += `
        <tr style="background-color: ${input3value}">
           <td>${input1Value}</td>
           <td>${input2value}</td>
           <td>${radioValue}</td>
       </tr>
`

        blok1Input.value = ""
        blok2Input.value = ""
        blok3Input.value = ""
    }else{
        alert('Xanalari doldurun')
    }


})
