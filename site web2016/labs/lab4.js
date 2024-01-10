document.addEventListener('DOMContentLoaded', function () {
    var addTaskButtons = document.querySelectorAll('.add-task-btn');

    addTaskButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var parentDay = button.closest('.day');

            var inputField = parentDay.querySelector('.new-task-input');
            if (!inputField) return;

            var taskText = inputField.value;

            if (taskText.trim() === '') {
                alert('Введіть текст задачі.');
                return;
            }

            var newTask = document.createElement('div');
            newTask.classList.add('task');

            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            var taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            var deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-task-btn');
            deleteButton.textContent = 'Видалити';

            newTask.appendChild(checkbox);
            newTask.appendChild(taskSpan);
            newTask.appendChild(deleteButton);

            parentDay.appendChild(newTask);

            inputField.value = '';
        });
    });

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-task-btn')) {
            event.target.closest('.task').remove();
        }
    });
});
