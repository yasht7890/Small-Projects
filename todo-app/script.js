
const addBtn = document.getElementById('add-btn');
    const textInput = document.querySelector('.text-input');
    const todoList = document.getElementById('todo-items');

    const addTask = () => {
      const value = textInput.value.trim();
      if (!value) return;

      const li = document.createElement('li');
      li.className = 'list';
      li.innerHTML = `
        ${value}
        <button class="btn">Delete</button>
      `;

      li.querySelector('.btn').addEventListener('click', () => {
        li.remove();
      });

      todoList.appendChild(li);
      textInput.value = '';
      textInput.focus();
    };

    addBtn.addEventListener('click', addTask);

    textInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });

