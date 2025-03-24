// React (TypeScript) - Frontend (src/components/Task.tsx)

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Subtask {
  id: number;
  title: string;
  completed: boolean;
}

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  subtasks: Subtask[];
}

const Task: React.FC<{ task: Task; onUpdate: () => void }> = ({ task, onUpdate }) => {
  const [showSubtasks, setShowSubtasks] = useState(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/tasks/${task.id}`);
      onUpdate();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleSubtaskToggle = () => {
    setShowSubtasks(!showSubtasks);
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleSubtaskToggle}>
        {showSubtasks ? 'Hide Subtasks' : 'Show Subtasks'}
      </button>

      {showSubtasks && (
        <ul>
          {task.subtasks.map((subtask) => (
            <li key={subtask.id}>
              {subtask.title} - {subtask.completed ? 'Completed' : 'Pending'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task;