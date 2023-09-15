const itemsData = document.getElementById('itemsData');
const TotalBeads = document.getElementById('total-beads');
const Redeems = document.getElementById('subtotal');
const Stash = document.getElementById('stashed-items');
const stashedItems = {};
const sellItems = {};
const Subtotal = document.getElementById('subtotal-beads');


//#region Sell&Stash
function sellItem(id)
{
    let price = Number(itemsData.lastElementChild.children[id].children[1].innerHTML);
    let name = itemsData.lastElementChild.children[id].children[0].innerHTML;
    
      for(const existingItem of Redeems.children[1].children)
      {
          if(existingItem.children[2].innerHTML === name && existingItem.children[3].innerHTML !='(STASH)')
          {
              let counterTd = existingItem.children[1];
              let counter = Number(counterTd.innerText);
              counter++;
              counterTd.innerText = counter;
              existingItem.children[3].innerHTML = `(${price*counter})`;       
              UpdateSubTotal(price);
              UpdateTotalBeads(price);
              return;
          }
      }
    

    const newTr = document.createElement('tr');
    const counterTd = document.createElement('td');
    const itemTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const xTd = document.createElement('td');

    xTd.innerText = 'x';
    counterTd.innerText = 1;
    itemTd.innerText = name;
    priceTd.innerText = `(${price})`;

    newTr.appendChild(xTd);
    newTr.appendChild(counterTd);
    newTr.appendChild(itemTd);
    newTr.appendChild(priceTd);
    Redeems.appendChild(newTr);
    Redeems.children[1].appendChild(newTr);
    UpdateSubTotal(price);
    UpdateTotalBeads(price);
}

function addToStashRedeem(id)
{
    let name = itemsData.lastElementChild.children[id].children[0].innerHTML;

    for(const existingItem of Redeems.children[1].children)
    {
        if(existingItem.children[2].innerHTML === name && existingItem.children[3].innerHTML ==='(STASH)')
        {
            let counterTd = existingItem.children[1];
            let counter = Number(counterTd.innerText);
            counter++;
            counterTd.innerText = counter;       
            return;
        }
    }
    const newTr = document.createElement('tr');
    const counterTd = document.createElement('td');
    const itemTd = document.createElement('td');
    const StashTd = document.createElement('td');
    const xTd = document.createElement('td');

    xTd.innerText = 'x';
    counterTd.innerText = 1;
    itemTd.innerText = name;
    StashTd.innerText = '(STASH)';

    newTr.appendChild(xTd);
    newTr.appendChild(counterTd);
    newTr.appendChild(itemTd);
    newTr.appendChild(StashTd);
    Redeems.appendChild(newTr);
    Redeems.children[1].appendChild(newTr);

    

}


function addToStash(id) {
  let name = itemsData.lastElementChild.children[id].children[0].innerHTML;

  if (stashedItems[name]) {
    stashedItems[name]++;
  } else {
    stashedItems[name] = 1;
  }

  updateTotalStashedItems();
}

function updateTotalStashedItems() {
  const totalStashedTable = document.getElementById('stashed-items').children[1];

  totalStashedTable.innerHTML = '';

  for (const name in stashedItems) {
    const newTr = document.createElement('tr');
    const counterTd = document.createElement('td');
    const itemTd = document.createElement('td');

    counterTd.innerText = `x${stashedItems[name]}`;
    itemTd.innerText = name;

    newTr.appendChild(counterTd);
    newTr.appendChild(itemTd);
    totalStashedTable.appendChild(newTr);
  }
 
}


function UpdateSubTotal(price)
{
    Subtotal.innerHTML=Number(Subtotal.innerHTML) + price
}



function UpdateTotalBeads(price)
{
    TotalBeads.innerHTML = Number(TotalBeads.innerHTML) + price;
}

function ClearComment() {
    const tbody = Redeems.children[1];
    while (tbody.firstChild) 
    {
        tbody.removeChild(tbody.firstChild);
    }
    Subtotal.innerHTML = 0;
}
//#endregion

//#region utilities
function toggleItems(category) {
    //add new category here vvv
    const allItems = document.querySelectorAll('.hunting, .fishing, .discovery, .foraging, .telt, .companions, .event, .tack, .cosmetic, .breeding, .geno, .misc, .calendar, .reveal, .trait');
    const itemsToShow = document.querySelectorAll(`.${category}`);
  
    // Hide all items
    allItems.forEach(item => {
      item.classList.add('hide');
    });
  
    // Show items in the selected category
    itemsToShow.forEach(item => {
      item.classList.remove('hide');
    });
  }

  function sortTable() {
    var rows, switching, i, x, y, shouldSwitch;
    
    switching = true;

    while (switching) {
      switching = false;
      rows = Stash.rows;

      for (i = 0; i < rows.length; i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  //#endregion