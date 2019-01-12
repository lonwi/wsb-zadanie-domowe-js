// Zobacz Kod
function zobaczKod(){
    
    const kody = document.getElementsByClassName('task-code');

    for (let index = 0; index < kody.length; index++) {
        const element = kody[index];
        element.style.display = 'none';
    }

    document.addEventListener('click', function (event) {

        if (!event.target.matches('.pokaz-kod')) return;
        event.preventDefault();
        
        const button = event.target;
        const kodId = button.dataset.kod;

        const kod = document.getElementById(kodId);
        if(kod){
            if(kod.style.display === "none") {
                kod.style.display = "block";
                button.innerHTML = 'Schowaj';
            }else{
                kod.style.display = "none";
                button.innerHTML = 'Pokaż';
            }
        }
    }, false);

}
zobaczKod();
// Zadanie 1: Zdefiniuj funkcję sprawdz_z1()
function sprawdz_z1(){
    
    const input = document.getElementById('input_z1');
    const value = input.value;
    let alertMessage = "Warunek spełniony!";

    // sprawdzamy czy jest liczba i czy jest cos wpisane
    if(!isNaN(value) && value.length){
        // spradzamy czy jest mniejszy lub rowne 10
        if(value <= 10) alertMessage = "Błąd! Warunek niespełniony!";
    }else{
        alertMessage = "Błąd! Prosze wpisać liczbę! ";
    }
    // alert
    alert(alertMessage);
    return false;
}

// Zadanie 2: Zdefiniuj funkcję sprawdz_z2()
function sprawdz_z2(){
    
    const input = document.getElementById('input_z2');
    const value = input.value;
    let alertMessage;
    
    // sprawdzamy czy jest liczba
    if(!isNaN(value) && value.length){
        switch (parseInt(value)) {
            case 1:
                alertMessage = "Poniedziałek";
                break;
            case 2:
                alertMessage = "Wtorek";
                break;
            case 3:
                alertMessage = "Środa";
                break;
            case 4:
                alertMessage = "Czwartek";
                break;
            case 5:
                alertMessage = "Piątek";
                break;
            case 6:
                alertMessage = "Sobota";
                break;
            case 7:
                alertMessage = "Niedziela";
                break;            
            default:
                alertMessage = "Błędny numer dnia tygodnia!";
                break;
        }

        // Alternatywnie
        // let dniTygodnia = ['Poniedzialek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
        // let index = value -1;
        // alertMessage = dniTygodnia[index];
        // if(!alertMessage) alertMessage = 'Błędny numer dnia tygodnia!';
    }else{
        alertMessage = "Błąd! Prosze wpisać liczbę od 1 do 7!";
    }

    // alert
    alert(alertMessage);
    return false;
}

// Zadanie 3: Zdefiniuj funkcję sprawdz_cb_zad3()
function sprawdz_cb_zad3(){
    const checkbox = document.getElementById('zad_3_cb');
    const alertBox = document.getElementById('zad_3_cb_message');
    let  alertMessage;
    if(checkbox){
        if(checkbox.checked == true){
            alertMessage = "Pole zaznaczone!";
        }else{
            alertMessage = "Pole odznaczone!";
        }
    }
    if(alertBox) alertBox.innerHTML = alertMessage;
    //alert(alertMessage);
}
sprawdz_cb_zad3();

// Zadanie 4: Rozwiązywanie równania kwadratowego
function oblicz_kw(){
    let alertMessage;

    const a = parseFloat(document.getElementById('input_kw_a').value);
    const b = parseFloat(document.getElementById('input_kw_b').value);
    const c = parseFloat(document.getElementById('input_kw_c').value);

    const textarea = document.getElementById('wynik_kw');
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Współczynniki równania muszą być liczbami!'); 
        return false;
    }
    if(a == 0) {
        alertMessage = 'Współczynnik równania A nie moze równać się 0!';
    }else{
        const delta = (b*b)-(4*a*c);

        let x,x1,x2;
        
        if(delta < 0){
            alertMessage = 'Delta ujemna, brak rozwiązań!';
        }
        if(delta == 0){
            x = (-b)/(2*a);
            alertMessage = 'Delta równa 0!\nMamy 1 rozwiazanie:\nx = '+ x;
        }
        if(delta > 0){
            const pierwiastek = Math.sqrt(delta);

            x1 = (-b - pierwiastek)/(2*a)
            x2 =  (-b + pierwiastek)/(2*a)
            alertMessage = 'Delta dodatnia!\nPierwiastek to: ' + pierwiastek + '\nMamy 2 rozwiazania:\nx1 = ' + x1 + ' oraz x2 = ' + x2;
        }
    }

    textarea.value = alertMessage;

    // focus to textarea ...
    
    return false;

}

// Zadanie 5: Zadanie dla chętnych
//https://www.w3schools.com/js/js_validation.asp

function wyslijWiadomosc () {
    validateForm ();
    const messageBox = document.getElementById('form-validate-message');
    const notValid = document.getElementsByClassName('not-valid');
    let notValidElements = [];
    messageBox.innerHTML = '';

    Array.from(notValid).forEach( (e) => {
        if(e) notValidElements.push(e);  
    });

    if(notValidElements.length){
        messageBox.innerHTML = '<div class="form-alert-warning">Proszę o poprawne wypełnienie wszystkich pól zaznaczonych na czerwono.</div>';
    }else{
        messageBox.innerHTML = '<div class="form-alert-success">Dziękujemy! Wiadomość została wysłana poprawnie.</div>';
        alert('Dziękujemy! Wiadomość została wysłana poprawnie.');
    }
    
    return false;
}
function validateForm () {
    
    const required = document.getElementsByClassName('validate-required');
    const email = document.getElementsByClassName('validate-email');
    const day = document.getElementsByClassName('validate-day');
    const month = document.getElementsByClassName('validate-month');
    const year = document.getElementsByClassName('validate-year');

    Array.from(required).forEach( (element) => {
        validateFormRequired(element);
    });

    Array.from(email).forEach( (element) => {  
        validateFormEmail(element);
    });

    Array.from(day).forEach( (element) => {  
        validateFormDay(element);
    });

    Array.from(month).forEach( (element) => {  
        validateFormMonth(element);
    });

    Array.from(year).forEach( (element) => {  
        validateFormYear(element);
    });
}
function validateFormListner () {
    
    const required = document.getElementsByClassName('validate-required');
    const email = document.getElementsByClassName('validate-email');
    const day = document.getElementsByClassName('validate-day');
    const month = document.getElementsByClassName('validate-month');
    const year = document.getElementsByClassName('validate-year');

    Array.from(required).forEach( (element) => {
        element.addEventListener('input', () => {
            validateFormRequired(element);
        });
    });

    Array.from(email).forEach( (element) => {
        element.addEventListener('input', () => { 
            validateFormEmail(element);
        });
    });

    Array.from(day).forEach( (element) => {
        element.addEventListener('input', () => { 
            validateFormDay(element);
        });
    });

    Array.from(month).forEach( (element) => {
        element.addEventListener('input', () => { 
            validateFormMonth(element);
        });
    });

    Array.from(year).forEach( (element) => {
        element.addEventListener('input', () => { 
            validateFormYear(element);
        });
    });
}
validateFormListner();

function validateFormRequired(element){
    if(!element) return false;
    if(element.value){
        element.classList.remove('not-valid');
    }else{
        element.classList.add('not-valid');
    }
}

function validateFormEmail(element) {
    const emailRegex = re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!element) return false;
    if(element.value && emailRegex.test(String(element.value).toLowerCase()) ){
        element.classList.remove('not-valid');
    }else{
        element.classList.add('not-valid');
    }
}

function validateFormDay(element){
    if(!element) return false;
    const value = element.value;

    if(value && !isNaN(value) && value > 0 && value < 31 ){
        element.classList.remove('not-valid');
    }else{
        element.classList.add('not-valid');
    }
}

function validateFormMonth(element){
    if(!element) return false;
    const value = element.value;
    if(value && !isNaN(value) && value > 0 && value < 12 ){
        element.classList.remove('not-valid');
    }else{
        element.classList.add('not-valid');
    }
}

function validateFormYear(element){
    if(!element) return false;
    const value = element.value;
    const currentYear = new Date().getFullYear();
    if(value && !isNaN(value) && value > currentYear - 120 && value < currentYear ){
        element.classList.remove('not-valid');
    }else{
        element.classList.add('not-valid');
    }
}