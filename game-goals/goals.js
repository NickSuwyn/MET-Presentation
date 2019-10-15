let coins = 0;
let goals = [
  {
    goal: 'Find a food bank.',
    coins: 3,
    id: 0
  },
  {
    goal: 'Meet with a friend',
    coins: 2,
    id: 1
  },
  {
    goal: 'Meet with a friend',
    coins: 2,
    id: 2
  }
];

let goalWorth = 100 / goals.length;

let completedGoals = [];

$('#coins').html(coins);

drawTables();
calcProgressValue();

function drawTables() {
  goals.forEach((goal) => {
    $('#goalsBody').append(
      `
      <tr>
        <td>
          ${goal.goal}
        </td>
        <td>
          ${goal.coins}
        </td>
        <td>
          <button class="btn btn-primary" onclick="completeGoal(${goal.id})">Complete</button>
        </td>
      </tr>
      `
    );
  });

  completedGoals.forEach((goal) => {
    $('#completedBody').append(
      `
      <tr>
        <td>
          ${goal.goal}
        </td>
        <td>
          ${goal.coins}
        </td>
      </tr>
      `
    );
  });
}


function completeGoal(id) {
  for (i in goals) {
    if (goals[i].id == id) {
      coins += goals[i].coins;
      $('#coins').html(coins);
      completedGoals.push(goals.splice(i, 1)[0]);
    }
  }
  $('#goalsBody').empty();
  $('#completedBody').empty();
  drawTables();
  calcProgressValue();
}

function calcProgressValue() {
  let value = completedGoals.length * goalWorth;
  console.log(value);
  $('#bar').attr('style', 'width: ' + value + '%');
}

