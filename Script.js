document.getElementById('add').addEventListener('click', function() {
    var name = document.getElementById('input').value;
    var email = document.getElementById('mail').value;
    // var pass=sridhar@gmail.com

    if (name && email  ) {
        // Create a new list item
        var para= document.createElement('p');
        para.textContent = `NAME: ${name},  EMAIL:${email}`;
        

        // Append the new item to the contact list
        document.getElementById('contactList').appendChild(para);

        // Clear the input fields
        document.getElementById('input').value = '';
        document.getElementById('mail').value = '';
    } else {
        alert('Please enter both name and email address.');
    }
});

