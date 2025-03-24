const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
// console.log(buttons);

buttons.forEach(function (button) {
  console.log(button);
  // EventListner is needed to listen events happening. Now from many events we want to listen 'click' event. And a function will be defined that will tell what to do when click event is captured.

  button.addEventListener('click', function (e) {
    //e is the object of event
    // console.log(e);
    console.log(e.target); //event.target refers to the specific HTML element that triggered the event
    // if(e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id
    // }
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
