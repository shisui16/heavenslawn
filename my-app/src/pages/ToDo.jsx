
import Layout from '../components/Layout';

import { useState, useEffect } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem('tasks')) || []);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask('');
  };

  const toggleTask = index => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <Layout>
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>
      <div className="flex space-x-2 mb-4">
        <input
          className="border px-2 py-1"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="New task"
        />
        <button onClick={addTask} className="bg-green-500 text-white px-4 py-1">Add</button>
      </div>
      <ul>
        {tasks.map((task, idx) => (
          <li
            key={idx}
            className={`py-1 cursor-pointer ${task.done ? 'line-through text-gray-400' : ''}`}
            onClick={() => toggleTask(idx)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  </Layout>
  );
};

export default Todo;
