console.log("======================");
console.log("1. Об’єкт “Бухгалтерія” (Код, ПІБ; посада; заробітна плата; кількість дітей; стаж).");
console.log("======================");
function FinanceDepartment(code, name, position, salary, children, experience) {
    this.code = code;
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.children = children;
    this.experience = experience;
  
    this.showInfo = function() {
      console.log(`Код: ${this.code}, ПІБ: ${this.name}, Посада: ${this.position}, Заробітна плата: ${this.salary}, Кількість дітей: ${this.children}, Стаж: ${this.experience}`);
    };
  }
  
  let fin1 = new FinanceDepartment(1, "Іванов Іван Іванович", "головний бухгалтер", 10000, 2, 5);
  let fin2 = new FinanceDepartment(2, "Петров Петро Петрович", "бухгалтер", 8000, 1, 3);
  let fin3 = new FinanceDepartment(3, "Сидорова Ольга Вікторівна", "бухгалтер", 8500, 0, 2);
  
  fin1.showInfo();
  fin2.showInfo();
  fin3.showInfo();
  console.log("======================");





console.log("======================");
console.log("7. Об’єкт “АЗС” (Код, адреса, фірма-власник, запаси бензину вказаних марок, наприклад А-98, А-92, А-95 (у літрах) та ціни одного літру пального кожної марки).");   
console.log("======================");
  function GasStation(code, address, owner, gasLeftAmount){
    this.code = code;
    this.address = address;
    this.owner = owner;
    this.gasLeftAmount = gasLeftAmount;
    this.prices = {
        'Diesel': 46.00,
        'A-92': 42.00,
        'A-95': 49.00
    };
    this.showInfoGas = function(){
        console.log(`Код: ${this.code}, адреса: ${this.address}, фірма-власник: ${this.owner}, Запаси дизель: ${this.gasLeftAmount['Diesel']} л / ціна: ${this.prices['Diesel']}, Запаси бензину A-92: ${this.gasLeftAmount['A-92']} л // ціна: ${this.prices['A-92']}, Запаси бензину A-95: ${this.gasLeftAmount['A-95']} л / ціна: ${this.prices['A-95']}`);
    }
  }


  let azs1 = new GasStation('001', 'вул. Легоцького, 25', 'ОККО', {
    'Diesel': 5000,
    'A-95': 7000,
    'A-92': 8000
  });
  
  let azs2 = new GasStation('002', 'вул. Володимирська, 123', 'WOG', {
    'Diesel': 3000,
    'A-95': 6000,
    'A-92': 9000
  });
  let azs3 = new GasStation('003', 'вул. Капушанська, 103', 'UkrNafta', {
    'Diesel': 4000,
    'A-95': 8000,
    'A-92': 3000
})
  azs1.showInfoGas();
  azs2.showInfoGas();
  azs3.showInfoGas();

console.log("======================");
console.log("======================");


console.log(" 9.  Об’єкт “Аукціон” (Код, назва лота, дата початку торгів, дата завершення торгів, стартова ціна, кінцева ціна).");
  function Lottery(code, nameOfLot, dateStart, dateFinish, startPrice, finishPrice){
    this.code = code;
    this.nameOfLot = nameOfLot;
    this.dateStart = dateStart;
    this.dateFinish = dateFinish;
    this.startPrice = startPrice;
    this.finishPrice = finishPrice;

    this.showInfoLottery = function(){
        console.log(`Код: ${this.code}, назва лота: ${this.nameOfLot}, дата початку торгів: ${this.dateStart}, дата завершення торгів: ${this.dateFinish}, стартова ціна: ${this.startPrice}, кінцева ціна: ${this.finishPrice}`);
    }
  }

  let lot1 = new Lottery('01', 'Картина', '4.05.23', '15.05.23', 700, 3000);
  let lot2 = new Lottery('02', 'Подорож', '4.05.23', '21.05.23', 700, 3000);
  let lot3 = new Lottery('03', 'Ваза', '4.05.23', '18.05.23', 700, 3000);


  lot1.showInfoLottery();
  lot2.showInfoLottery();
  lot3.showInfoLottery();

 