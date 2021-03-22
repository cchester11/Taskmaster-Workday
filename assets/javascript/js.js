  var task = [];

  var textAreaTotal = [6];

  for(i = 0; i < textAreaTotal.length; i++) {
        function makeTask(){
        var createTask = document.createElement('textarea')
        var getUl = document.querySelector('#textarea')
        getUl.appendChild(createTask)
        }

        
        function saveTask(){
        localStorage.setItem('task', JSON.stringify(task));
        };

        function addTask(){
          document.getElementById('1').addEventListener("click", function() {
            makeTask()
            saveTasks() 
            })
        }

        while (textAreaTotal <= 6) {
          addTask();
        }
    }

