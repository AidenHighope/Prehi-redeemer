const ItemPriceElement = document.getElementsByClassName("price");
const TotalBeads = document.getElementsById("total-beads-line");
TotalBeads.value = 0;
const SubTotal = document.getElementById("subtotal");
SubTotal.value = 0;
const ItemName = document.getElementsByClassName("itemName");
const RedeemedItem = document.getElementById("redeemedItem")

function SellItem()
{
    const ItemPriceTxt = ItemPriceElement[0].textContent;
    const ItemPrice = parseInt(ItemPriceTxt);
    let soldItemName = ItemName[0].textContent;
    
    for(const existingItem in RedeemedItem.children)
    {
        if(existingItem.children[1].innerHTML === soldItemName)
        {
            let itemCounter = Number(existingItem.children[0].innerHTML);
            existingItem.children[0].innerHTML = itemCounter +1;
            UpdateSubTotal(ItemPrice);
            UpdateTotal(ItemPrice);
            return;
        }
    }


    const AddTr = document.createElement('tr');
    const CountTd = document.createElement('td');
    const ItemTd = document.createElement('td');
    const PriceTd = document.createElement('td');

    CountTd.innerText = 1;
    ItemTd.innerText = ItemName;
    PriceTd.innerText = ItemPrice;

    AddTr.appendChild(countTd);
    AddTr.appendChild(ItemTd);
    AddTr.appendChild(PriceTd);

    SubTotal.children[1].appendChild(newTr);
     UpdateTotal(ItemPrice);
     UpdateSubTotal(ItemPrice);   
}


function UpdateTotal(price)
{
    TotalBeads.value = Number(TotalBeads.value) + price;
}
function UpdateSubTotal(price)
{
    SubTotal.value = Number(SubTotal.value) + price;
}

function ClearSubtotal()
{
    SubTotal.value = 0;
}