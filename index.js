function addingEventListener() {
  const input = document.getElementById('button');
  input.addEventListener('click', function() {
    alert('I was clicked!');
  });
}

//call function to attach the event listener
addingEventListener();