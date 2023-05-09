const users = [
    { login: 'student1', password: 'password1' },
    { login: 'student2', password: 'password2' },
    { login: 'student3', password: 'password3' }
  ];
  
  function submitForm() {
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('remember');
    
    const user = users.find(u => u.login === loginInput.value && u.password === passwordInput.value);
    
    if (user) {
      // User is authenticated
      if (rememberCheckbox.checked) {
        // Save user data in local storage
        users.Add('login', user.login);
        localStorage.setItem('password', user.password);
      }
      alert('Login successful');
    } else {
      // Authentication failed
      alert('Invalid login or password');
    }
  }
  
  // If "remember me" is checked and user data is saved in local storage, pre-fill the login form
  const savedLogin = localStorage.getItem('login');
  const savedPassword = localStorage.getItem('password');
  if (savedLogin && savedPassword) {
    document.getElementById('login').value = savedLogin;
    document.getElementById('password').value = savedPassword;
    document.getElementById('remember').checked = true;
  }



// ==========================================================================
// ==========================================================================
// ==========================================================================


// $(document).ready(function() {
// 	// Пари назв предметів та url зображень
//   const subjects = [
//     {subject_name: "octopus", link: "https://i.insider.com/5aeb6e9319ee861e008b4842?width=900&format=jpeg" },
//     {subject_name: "elephant", link: "https://a-z-animals.com/media/2022/05/elephant.jpg" },
//     {subject_name: "wolf", link: "https://upload.wikimedia.org/wikipedia/commons/6/68/Eurasian_wolf_2.jpg" },
//     {subject_name: "coala", link: "https://s2.glbimg.com/vAOgLN-nCY1oDWpht3GRLAvCLh0=/0x0:2000x1500/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_7d5b9b5029304d27b7ef8a7f28b4d70f/internal_photos/bs/2021/B/J/wWNg2gTIKo765QANtYYw/gettyimages-1271836615.jpg" },
//     {subject_name: "dinosaur", link: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2022-07-13-at-3-22-31-pm-1657740173.png?crop=1.00xw:1.00xh;0,0&resize=1200:*" },
// ];

// 	// Знаходить елементи форми та результатів пошуку
// 	var searchForm = $("#search_form");
// 	var subjectInput = $("#subject_name");
// 	var resultContainer = $("#result_container");

// 	// Призначає обробник подій для форми пошуку
// 	searchForm.submit(function(event) {
// 		event.preventDefault();
// 		resultContainer.empty();

// 		var query = subjectInput.val().toLowerCase();

// 		// Пошук предмету та відображення зображення
// 		for (var i = 0; i < subjects.length; i++) {
// 			var subject = subjects[i];
// 			if (subject.subject_name.toLowerCase().indexOf(query) !== -1) {
// 				resultContainer.append("<h2>" + subject.subject_name + "</h2>");
// 				resultContainer.append("<img src='" + subject.link + "'>");
// 			}
// 		}

// 		// Якщо нічого не знайдено
// 		if (resultContainer.is(":empty")) {
// 			resultContainer.append("<p>Нічого не знайдено.</p>");
// 		}
// 	});
// });

// ==========================================================================
// ==========================================================================
// ==========================================================================


function calculate() {
  var price = document.getElementById("price").value;
  var weight = document.getElementById("weight").value;
  var insurance = document.getElementById("insurance").checked;
  var deliveryCost = 0;
  
  if ( 0<weight <=2) {
    deliveryCost += 40;
  } else if(2 < weight <=10 ){
    deliveryCost += 60;
  } else if(10 < weight <= 30){
    deliveryCost +=80;
  }
  
  if (insurance) {
    deliveryCost += price * 0.02;
  }
  
  var output = document.getElementById("output");
  output.innerHTML = "Вартість доставки: " + deliveryCost + " грн.";
}