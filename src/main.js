//creating a list of tasks
class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description) {
    const newTask = new Task(title, description);
    this.tasks.push(newTask);
  }

  deleteTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    } else {
      console.log('Нет пункта под таким номером');
    }
  }

  editTodoTask(index, newTitle) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].editTitle(newTitle);
    } else {
      console.log('Нет пункта под таким номером');
    }
  }

  editTaskDescription(index, newDescription) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].editDescription(newDescription);
    } else {
      console.log('Нет пункта под таким номером');
    }
  }

  markTaskDone(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].markDone();
    } else {
      console.log('Нет пункта под таким номером');
    }
  }

  markTaskUndone(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].markUndone();
    } else {
      console.log('Нет пункта под таким номером');
    }
  }

  getTaskInfo(index) {
    if (index >= 0 && index < this.tasks.length) {
      return this.tasks[index].getInfo();
    } else {
      console.log('Нет пункта под таким номером');
    }
  }
  getAlltasks() {
    return this.tasks.map(todo => todo.getInfo());
  }
  getTotalCount() {
    return this.tasks.length;
  }
  getIncompleteCount() {
    return this.tasks.filter(todo => !todo.completed).length;
  }


  //поиск по таскам
  sortTodosByStatus() {
    return this.tasks.slice().sort((a, b) => a.completed - b.completed).map(task => task.getInfo());
  }
  sortTodosByCreatedDate() {
    return this.tasks.slice().sort((a, b) => a.createdDate - b.createdDate).map(task => task.getInfo());
  }
  sortTodosByModifiedDate() {
    return this.tasks.slice().sort((a, b) => a.modifiedDate - b.modifiedDate).map(task => task.getInfo());
  }

}

//creating a task for the list
class Task {
  constructor(title, description) {
    if (!title || !description) {
      console.log('Необходимо указать название и описание пункта');
    }
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdDate = new Date();
    this.modifiedDate = new Date();
  }

  editTitle(newTitle) {
    if (!newTitle) {
      console.log('Необходимо указать название');
    }
    this.title = newTitle;
    this.modifiedDate = new Date();
  }

  editDescription(newDescription) {
    if (!newDescription) {
      console.log('Необходимо указать описание');
    }
    this.description = newDescription;
    this.modifiedDate = new Date();
  }

  markDone() {
    this.completed = true;
    this.modifiedDate = new Date();
  }

  markUndone() {
    this.completed = false;
    this.modifiedDate = new Date();
  }

  getInfo() {
    return {
      title: this.title,
      description: this.description,
      completed: this.completed,
      dateOfCreation: this.createdDate,
      dateOfMod: this.modifiedDate,
    };
  }
}



const todoList = new TodoList();
todoList.addTask('Сделать домашку!', 'три просрочки на Хилель');
todoList.addTask('Придумать отмазку', 'придумать отмазку, почему не сделал домашку на Хилель');

console.log('Все задания из списка', todoList.getAlltasks());
console.log('Общее число тасок', todoList.getTotalCount());
console.log('Число не сделанніх', todoList.getIncompleteCount());

todoList.markTaskDone(0);

todoList.editTodoTask(1, 'Ещё быстре надо');
todoList.editTaskDescription(1, 'Доделать и срочно');

console.log(todoList.getTaskInfo(0));

console.log('Todos sorted by created date:', todoList.sortTodosByCreatedDate());

console.log('Todos sorted by modified date:', todoList.sortTodosByModifiedDate());

console.log('Todos sorted by status:', todoList.sortTodosByStatus());

todoList.editTodoTask(1, 'Ещё быстре надо!!!!');
console.log('Todos sorted by modified date:', todoList.sortTodosByModifiedDate());