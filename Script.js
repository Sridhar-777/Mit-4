document.getElementById('add').addEventListener('click', function() {
    var name = document.getElementById('input').value;
    var email = document.getElementById('mail').value;

    // var pass=sridhar@gmail.com

    if (name && email  ) {
        // Create a new list item
        var para= document.createElement('p');
        var btn=document.createElement('button')
        para.textContent = `NAME: ${name},  EMAIL:${email}`;
        btn.innerHTML="delete"
        

        // Append the new item to the contact list
        document.getElementById('contactList').appendChild(para);
        contactList.appendChild(btn)

        // Clear the input fields
        document.getElementById('input').value = '';
        document.getElementById('mail').value = '';
    } else {
        alert('Please enter both name and email address.');
    }
});



