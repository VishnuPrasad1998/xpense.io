const hea = document.querySelector("#headin");
const inputsub = document.querySelector("#ip2");
const inputele = document.querySelector("#ip");
const expenseTable = document.querySelector("#expenseTable");


let totalExpense = 0;

hea.textContent = `Total: ${totalExpense} `;

const allExpense = [];


function addExpense(){
  const expenseItem = {};
  const tm = inputele.value;
  const td = inputsub.value;

  const exp = parseInt(tm)

  expenseItem.desc = td;
  expenseItem.amount = tm;
  expenseItem.moment = new Date();
  allExpense.push(expenseItem)



  totalExpense+=exp
  hea.textContent = `Total: ${totalExpense} `;

  renderList(allExpense);
}

const element = document.querySelector("#btnSelector");

element.addEventListener("click", addExpense, false);

function getDateSring(moment)
{
  return moment.toLocaleDateString('en-US', { year:'numeric',month:'long' ,day:'numeric'})
}

function deleteItem(dateValue) {
  const newArr = [];

  for(let i=0; i<allExpense.length; i++) {
    if (allExpense[i].moment.valueOf() !== dateValue){
      newArr.push(allExpense[i]);
    }
  }
  renderList(newArr);

}

function renderList(arrOfList){
  const allExpensehtml = arrOfList.map(expense => createListItem(expense));
  const joinedall = allExpensehtml.join("");
  expenseTable.innerHTML = joinedall;
}

function createListItem({ desc, amount, moment }){
  return `
  <li class="list-group-item list-group-item-dark list-group-item-action d-flex justify-content-between">
            <div class="d-flex flex-column">
              <b>${desc}</b>
              <small>${getDateSring(moment)}</small>
            </div>
            <div>
              <span class="px-5">
                <b>₹${amount}</b>
              </span>
              <button type="button" class="btn btn-outline-danger btn-sm"
              onclick="deleteItem(${moment.valueOf()})"
              >
                <i class="fa fa-trash" style="font-size:20px;color:black;"></i>
              </button>
            </div>
          </li>`
}
