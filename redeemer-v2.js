const itemsData = document.getElementById('itemsData');
const subTotalBeads = document.getElementById('subTot-beads');
subTotalBeads.value=0;
const TotalBeads = document.getElementById('total-beads');
TotalBeads.value=0;
const Redeems = document.getElementById('subtotal');



function sellItem(id) {
    let price = Number(itemsData.children[id].children[1].innerHTML);
    let name = itemsData.children[id].children[0];

    for (const existingItem of Redeems.children) {
        if (existingItem.children[1].innerHTML === name.textContent) {
            let counter = Number(existingItem.children[0].innerHTML);
            existingItem.children[0].innerHTML = counter + 1;
            UpdateSubTotal(price);
            UpdateTotalBeads(price);
            return;
        }
    }

    const newTr = document.createElement('tr');
    const counterTd = document.createElement('td');
    const itemTd = document.createElement('td');
    const priceTd = document.createElement('td');

    counterTd.innerText = 1;
    itemTd.innerText = name.textContent;
    priceTd.innerText = price;

    newTr.appendChild(counterTd);
    newTr.appendChild(itemTd);
    newTr.appendChild(priceTd);
    Redeems.appendChild(newTr);
    UpdateSubTotal(price);
    UpdateTotalBeads(price);
}


function UpdateSubTotal(price)
{
    subTotalBeads.value = Number(subTotalBeads.value) + price;
}

function UpdateTotalBeads(price)
{
    TotalBeads.value = Number(TotalBeads.value) + price;
}