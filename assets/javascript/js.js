  var task = Array(9).fill('');

  function createTask() {
    var createLi = $('<li>').addClass('timeblock');
    var createTextArea = $('<textarea>').addClass('description');
    var getTextArea = $('#text-area');

    createLi.append(createTextArea)
    getTextArea.append(createLi);
  }

  function iterateTask() {
    $('.row').each(function(index){
      $(this).children('#text-area').val(task[index])
    //compare moment().hours() to .text-area's id (1pm will equual 13)
    //if statement add class to change color
    //parse from string to number 
    })
  }

  function loadTask() {
    task = JSON.parse(localStorage.getItem('task'))
    iterateTask();
  }

  function saveTask() {
    localStorage.setItem('task', JSON.stringify(task))
  }

  function addTask() {
  $('#container .saveBtn').click(function() {
    console.log($(this).siblings('textarea').val())
    var index = $(this).attr('id')-1
    task[index] = $(this).siblings('textarea').val()

    createTask()
    saveTask();
  })
  }

  loadTask();
  addTask();

