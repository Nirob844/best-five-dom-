const playersNameArr = [];

function displayPlayerName(players) {
    // append players & set condition only 5 player
    if (players.length < 6) {
        const tableBody = document.getElementById('displayName');
        tableBody.innerHTML = "";
        for (i = 0; i < players.length; i++) {
            const name = playersNameArr[i].playerName;
            const tr = document.createElement("tr");
            tr.innerHTML = `
                    <th scope="row">${i + 1}</th>
                    <td>${name}</td>
                `

            tableBody.appendChild(tr)
        }
    } else {
        let err = alert('You can select only 5 Players')
        return err;
    }
    calculation();
}
function calculation() {
    document.getElementById('calculate').addEventListener('click', function () {
        //calculate player expense
        let perPlayerExpense = document.getElementById('perPlayer').value;
        let perPlayerString = parseFloat(perPlayerExpense);
        const calTotal = perPlayerString * i;
        if (isNaN(calTotal)) {
            return alert('Enter Valid Input')
        }
        let displayTotal = document.getElementById('playerExpenses');
        let total = displayTotal.innerText;
        displayTotal.innerText = calTotal;

        //calculate total expense
        document.getElementById('cal-total').addEventListener('click', function () {
            let managerExpense = document.getElementById('managerExpenseInput').value;
            let coachExpense = document.getElementById('coachExpenseInput').value;
            let calTotalExpenses = parseFloat(managerExpense) + parseFloat(coachExpense) + parseFloat(calTotal);
            if (isNaN(calTotalExpenses)) {
                return alert('Enter Valid Input')
            }
            let displayTotalExpense = document.getElementById('totalExpenses')
            let totalexp = displayTotalExpense.innerText;
            displayTotalExpense.innerText = calTotalExpenses;
        })
    })
}
function selectPlayers(player) {
    const playerName = player.parentNode.children[0].innerText;
    const playerObj = {
        playerName: playerName,
    };
    player.disabled = true;
    playersNameArr.push(playerObj)
    displayPlayerName(playersNameArr)
}