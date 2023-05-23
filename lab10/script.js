// Отримання даних з API
fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  .then(response => response.json())
  .then(data => {
    // Отримання курсу валют зі зворотнього об'єкту даних
    const currencyRates = data;
    
    // Отримання таблиці
    const table = document.getElementById('currency-table');
    
    // Прохід циклом foreach по курсах валют та додавання нових рядків до таблиці
    currencyRates.forEach(rate => {
      const currency = rate.cc;
      const price = rate.rate;
      
      const row = table.insertRow(-1);
      const currencyCell = row.insertCell(0);
      const priceCell = row.insertCell(1);
      
      currencyCell.textContent = currency;
      priceCell.textContent = price;
    });
  })
  .catch(error => {
    console.log('Виникла помилка при отриманні даних:', error);
  });

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = 'Date is ' + mm + '/' + dd + '/' + yyyy;
document.write(today);