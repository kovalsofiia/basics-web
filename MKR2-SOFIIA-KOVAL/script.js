// Використовуючи JS, HTML та СSS створити:

// • Об’єкт для зберігання даних про фільм (Id, назва, режисер, виконавець головної
// ролі, URL-трейлеру, рік випуску, касові збори).
class Movie{
    constructor(id, title,director,main_actor,URL_trailer,year,income){
        this.id = id;
        this.title = title;
        this.director = director;
        this.main_actor = main_actor;
        this.URL_trailer = URL_trailer;
        this.year = year;
        this.income = income;
    }
}
// • На основі об’єкту фільму створити новий об’єкт, який перевизначає метод
// toString().
let MovieTs = Object.create(Movie);
MovieTs.toString = function (){
    return `Id: ${this.id} Title: ${this.name} Trailer: ${this.url}`
}
// • Об’єкт для зберігання даних про колекцію фільмів, цей об’єкт повинен містити
// конструктор та метод для знаходження фільмів в яких грає вказаний виконавець.
class Movies_Collection{
    constructor(){
        this.movies_saved = [];
    } 
    
    getBy_main_actor(main_actor){
        let res_array = [];
        for(let movie of this.movies_saved){
            if(movie.main_actor == main_actor){
                res_array.push(movie);
            }
        }
        return res_array;
    }
    addMovies(movies_Array){
        for(let movie of movies_Array){
            this.movies_saved.push(movie);
        }
    }
}
let Cinema = new Movies_Collection();

let movie_gray_man = new Movie(
    1,"The Gray Man", "Anthony Russo", "Ryan Gosling", "https://youtu.be/BmllggGO4pM", 2022, "$454,023"
);
let movie_drive = new Movie(
    2, "Drive", "Nicolas Winding Refn", "Ryan Gosling", "https://youtu.be/KBiOF3y1W0Y", 2011, "	$81.4 million"
);
let movie_blade_runner = new Movie(
3,"Blade Runner 2049", "Denis Villeneuve", "Harrison Ford", "https://youtu.be/gCcx85zbxz4", 2017, "$267.5 million"
);
let movie_lalaland = new Movie(
4,"La La Land", "Damien Chazelle", "Ryan Gosling", "https://youtu.be/0pdqf4P9MB8", 2016, "$447.4 million"
);
let movie_all_good = new Movie(
    5,"All Good Things", "Andrew Jarecki", "Ryan Gosling", "https://youtu.be/Ca6hW4J7Jeo", 2010, "$1.8 million" 
);

let add_array = [movie_gray_man, movie_drive, movie_blade_runner, movie_lalaland, movie_all_good];
Cinema.addMovies(add_array);

let PublishMoviesToHTML = function (cinema_name){
    document.querySelector(".film_holder").innerHTML = "";
    for(let movie of cinema_name.movies_saved){
        document.querySelector(".film_holder").innerHTML +=`<table>
        <tr>
        <th>Код</th>
        <th>Назва</th>  
        <th>Режисер</th>      
        <th>Посилання на трейлер</th>
        <th>Прибутки</th>
        <th>Рік випуску</th>
        </tr>
        <tr>
        <td> ${movie.id}</td>
        <td>${movie.title}</td>    
        <td>${movie.director}</td>
        <td><a href="${movie.URL_trailer}">Movie trailer</a></td>
        <td>${movie.income}</td>
        <td>${movie.year}</td>
        
        </tr>
        </table>
        </div>`
    }
}



// • Відобразити дані про фільми в яких грає вказаний виконавець на сторінці.
document.querySelector("#search_btn").addEventListener("click", ()=>{
    let res =  Cinema.getBy_main_actor(document.querySelector("#search_form").value);
    let r = document.querySelector(".found_holder")
    r.innerHTML = "";
    for(let movie of res){
        r.innerHTML += `<h1>Result</h1> <br><table>
        <tr>
        <th>Код</th>
        <th>Назва</th>  
        <th>Режисер</th>      
        <th>Посилання на трейлер</th>
        <th>Прибутки</th>
        <th>Рік випуску</th>
        </tr>
        <tr>
        <td> ${movie.id}</td>
        <td>${movie.title}</td>    
        <td>${movie.director}</td>
        <td><a href="${movie.URL_trailer}">Movie trailer</a></td>
        <td>${movie.income}</td>
        <td>${movie.year}</td>
        
        </tr>
        </table>
        </div>`;
    }
})


PublishMoviesToHTML(Cinema);


