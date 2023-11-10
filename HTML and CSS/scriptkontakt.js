function validateForm() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var atLeastOneChecked = false;

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            atLeastOneChecked = true;
        }
    });

    if (atLeastOneChecked) {
        document.getElementById('myForm').submit();
    } else {
        alert('Please select at least one option.');
    }
}
