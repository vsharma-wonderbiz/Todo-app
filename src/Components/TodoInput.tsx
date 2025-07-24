// TodoInput.tsx
import React, { useState } from 'react';

type Props = {
  onAddTask: (task: string) => void;
};

const TodoInput = ({ onAddTask }: Props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue); // send to parent
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;
