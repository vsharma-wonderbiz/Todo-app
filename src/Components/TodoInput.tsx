// TodoInput.tsx
import React, { useState } from 'react';

type Props = {
  onAddTask: (task: string) => void;
};

const MAX_LENGTH = 20;

const TodoInput = ({ onAddTask }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > MAX_LENGTH) {
      setError(`Task cannot exceed ${MAX_LENGTH} characters.`);
    } else {
      setError('');
      setInputValue(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    if (inputValue.length > MAX_LENGTH) {
      setError(`Task cannot exceed ${MAX_LENGTH} characters.`);
      return;
    }
    onAddTask(inputValue);
    setInputValue('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      style={{padding:"10px"}}
        type="text"
        placeholder="Enter task"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default TodoInput;
