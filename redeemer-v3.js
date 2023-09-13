const itemsData = document.getElementById('itemsData');
const subTotalBeads = document.getElementById('subTot-beads');
subTotalBeads.value=0;
const TotalBeads = document.getElementById('total-beads');
TotalBeads.value=0;
const Redeems = document.getElementById('subtotal');
const Stash = document.getElementById('stashed-items');

function sellItem(id)
{
    let price = Number(itemsData.lastElementChild.children[id].children[1].innerHTML);
    let name = itemsData.lastElementChild.children[id].children[0].innerHTML;
    for(const existingItem of Redeems.children[1].children)
    {
        if(existingItem.children[1].innerHTML === name)
        {
            let counterTd = existingItem.children[0];
            let counter = Number(counterTd.innerText.replace('x', ''));
            counter++;
            counterTd.innerText = `x${counter}`;       
            existingItem.children[2].innerHTML = `(${price*counter})`;
            UpdateSubTotal(price);
            UpdateTotalBeads(price);
            return;
        }

    }
    const newTr = document.createElement('tr');
    const counterTd = document.createElement('td');
    const itemTd = document.createElement('td');
    const priceTd = document.createElement('td');

    counterTd.innerText = 'x1';
    itemTd.innerText = name;
    priceTd.innerText = `(${price})`;

    newTr.appendChild(counterTd);
    newTr.appendChild(itemTd);
    newTr.appendChild(priceTd);
    Redeems.appendChild(newTr);
    Redeems.children[1].appendChild(newTr);
    UpdateSubTotal(price);
    UpdateTotalBeads(price);
}


function addToStash(id)
{
    let name = itemsData.lastElementChild.children[id].children[0].innerHTML;
    for(const existingItem of Redeems.children[1].children)
    {
        if(existingItem.children[1].innerHTML === name && existingItem.children[2].innerHTML ==='(STASH)')
        {
            let counterTd = existingItem.children[0];
            let counter = Number(counterTd.innerText.replace('x', ''));
            counter++;
            counterTd.innerText = `x${counter}`;       
            return;
        }
    }
    const newTr = document.createElement('tr');
    const counterTd = document.createElement('td');
    const itemTd = document.createElement('td');
    const StashTd = document.createElement('td');

    counterTd.innerText = 'x1';
    itemTd.innerText = name;
    StashTd.innerText = '(STASH)';

    newTr.appendChild(counterTd);
    newTr.appendChild(itemTd);
    newTr.appendChild(StashTd);
    Redeems.appendChild(newTr);
    Redeems.children[1].appendChild(newTr);

    TotalStashed(name);

}

function TotalStashed(name)
{
    for(const existingItem of Stash.children[1].children)
    {
        if(existingItem.children[1].innerHTML === name)
        {
            let counterTd = existingItem.children[0];
            let counter = Number(counterTd.innerText.replace('x', ''));
            counter++;
            counterTd.innerText = `x${counter}`;       
            return;
        }
    }
    const newTr = document.createElement('tr');
    const counterTd = document.createElement('td');
    const itemTd = document.createElement('td');

    counterTd.innerText = 'x1';
    itemTd.innerText = name;

    newTr.appendChild(counterTd);
    newTr.appendChild(itemTd);
    Stash.appendChild(newTr);
    Stash.children[1].appendChild(newTr);


}


function UpdateSubTotal(price)
{
    subTotalBeads.value = Number(subTotalBeads.value) + price;
}

function UpdateTotalBeads(price)
{
    TotalBeads.value = Number(TotalBeads.value) + price;
}

function ClearComment() {
    const tbody = Redeems.children[1];
    while (tbody.firstChild) 
    {
        tbody.removeChild(tbody.firstChild);
    }
    subTotalBeads.value = 0;
}