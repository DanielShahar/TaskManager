import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onUpdate={fetchTasks} />
      ))}
    </div>
  );
};

export default TaskList;