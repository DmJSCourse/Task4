arr2 = [1, 0, 4, false, false, 'yes', true, undefined, null, 1, 2, 3, undefined, 4, false, 1, true, null, 'yes', 'no', 'yes', 1, 2, 3, 'no', 'yes', 1, 'yes'];

function toUniqueArr(internal_array) {
    for (var i = 0; i < internal_array.length; i++) {
        if (typeof internal_array[i] === "object") {
            if (internal_array[i] === null) { } else { console.log('Массив содержит объект по индексу ', i, 'и не может быть обработан согласно задания.'); return false; }
        }
    }

    for (var i = 0; i < internal_array.length; i++) {
        var checkForSameValue = internal_array.includes(internal_array[i], i + 1);
        while (internal_array.includes(internal_array[i], i + 1) === true) { internal_array.splice(i, 1) };
    }
}

toUniqueArr(arr2);
console.log('Oбработанный массив :', arr2);

var submitButton = document.getElementById('button');
submitButton.addEventListener('click', submitFunc);

function submitFunc() {
    var firstname = document.getElementById('f_name').value;
    var lastname = document.getElementById('l_name').value;
    var email = document.getElementById('usermail').value;

    if (firstname.length < 5) {
        alert('First name is too short');
        document.getElementById('f_name').value = '';
    }
    else if (lastname.length < 5) {
        alert('Last name is too short');
        document.getElementById('l_name').value = '';
    }
    else if (email.length < 5) {
        alert('Email is too short');
        document.getElementById('usermail').value = '';
    }
    else {
        alert('Success!');

        var user = {
            firstName: firstname,
            lastName: lastname,
            email: email
        }
        console.log(user);
    }
}