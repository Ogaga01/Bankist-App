/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/// //////////////////////////////////////////////
/// //////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const moveTest =movements.reduce((acc, move) => {
  return acc + move
})


/// //////////////////////////////////////////////

containerApp.classList.add('show');

const createUserName = accs => {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(acc => acc[0])
      .join('');
  });
};
createUserName(accounts);

const displayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, move) => {
    return acc + move;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const displaySummary = acc => {
  const incomeSummary = acc.movements
    .filter(move => {
      return move > 0;
    })
    .reduce((acu, move) => {
      return acu + move;
    }, 0);
  labelSumIn.textContent = `${incomeSummary}V`;

  const withdrawalSummary = acc.movements
    .filter(move => {
      return move < 0;
    })
    .reduce((acu, move) => {
      return acu + move;
    }, 0);
  labelSumOut.textContent = `${withdrawalSummary}C`;

  const interestSummary = acc.movements
    .filter(move => {
      return move > 0;
    })
    .map(move => {
      return (move * acc.interestRate) / 100;
    })
    .filter(move => {
      return move > 1;
    })
    .reduce((acc, move) => {
      return acc + move;
    }, 0);
  labelSumInterest.textContent = `${interestSummary}€`;
};

const displayMovements = (acc) => {
  acc.movements.forEach((move) => {
    const moveType = move > 0 ? 'Deposit' : 'withdrawal';

    `
    
    `
  })
}

let currentUser;

btnLogin.addEventListener('click', e => {
  e.preventDefault();

  const userName = inputLoginUsername.value;
  const pin = inputLoginPin.value;

  if (userName === '' || pin === '') {
    console.log('Invalid Credentials');
  } else {
    currentUser = accounts.find(acc => {
      return acc.userName === userName && acc.pin === Number(pin);
    });
  }
  console.log(currentUser);
});


