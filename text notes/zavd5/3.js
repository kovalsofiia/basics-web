//Задача 4. Створити функцію, яка випадковим чиномвиводить на екран одне із зображень (шляхи до зображень передаються у функцію як аргументи)  
function showRandomImage(...images) {
    // Генеруємо випадковий індекс в межах довжини масиву переданих зображень(посилання)
    const randomIndex = Math.floor(Math.random() * images.length);
  
    // Вибір зображення з масиву за випадковим індексом
    const image = images[randomIndex];
  
    // Створення елементу img і встановлення йому властивості src
    const img = document.createElement("img");
    img.src = image;
  
    // Додавання елементу img на сторінку
    document.body.appendChild(img);
  }
  
  // Виведення фото на сторінці
  showRandomImage("https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");