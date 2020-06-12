const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
        telephone: /^\d{11}$/,
        username: /^[a-z\d]{5,12}$/i,
        password: /^[\d\w@-]{8,20}$/i,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        //             yourname @ domain   .  com          ( .uk )
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
        setSuccessFor(field);
    } else {
        field.className = 'invalid';
        setErrorFor(field);
    }
}

function validateIfEmpty(field){
    const formControl = field.parentElement;
    if((field.value == '')){
        field.className = 'invisible';
        formControl.className = 'form-control default';
    } 
}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        e.preventDefault();
            validate(e.target, patterns[e.target.attributes.name.value]);
            validateIfEmpty(e.target)
    });
});

function setErrorFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


