  var task = Array(9).fill('');

  const timeVar = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  var getCurrentDay = document.querySelector('#currentDay');

  getCurrentDay.innerHTML = timeVar;

  setInterval(function currentTime() {
    var selectP = document.querySelector('#currentDay');
    var momentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');

    selectP.innerHTML = momentTime;
  }, 1000);

  function createTask() {
    var createLi = $('<li>').addClass('timeblock');
    var createTextArea = $('<textarea>').addClass('description');
    var getTextArea = $('#text-area');

    createLi.append(createTextArea)
    getTextArea.append(createLi);
  };

  function iterateTime() {
    var currentTime = moment().hours();

    $('.hour').each(function(){
      let varTime = parseInt($(this).attr('id'));

      if(varTime < currentTime) {
        $(this).addClass('past')
      } else if(varTime === currentTime) {
        $(this).removeClass('past')
        $(this).addClass('present')
      } else if(varTime > currentTime) {
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    })
  };

  function iterateTask() {
    $('.row').each(function(index) {
      $(this).children('#text-area').val(task[index])
    })
    //compare moment().hours() to .text-area's id (1pm will equual 13)
    //if statement add class to change color
    //parse from string to number 
    var timeIndex = $('.row').each(function(){
      $(this).children('#text-area') 
    .index()
    });
    console.log(timeIndex);

    iterateTime();
};

  function loadTask() {
    //turns JSON back into javascript
    task = JSON.parse(localStorage.getItem('task'))
    iterateTask();
  };

  function saveTask() {
    //saves our data as JSON. We will use the loadTask() to pull the data and revert it to javascript
    localStorage.setItem('task', JSON.stringify(task))
  };

  function addTask() {
  $('#container .saveBtn').click(function() {
    console.log($(this).siblings('textarea').val())
    var index = $(this).attr('id')-1
    task[index] = $(this).siblings('textarea').val()

    createTask()
    saveTask();
  })
  };

  loadTask();
  addTask();
