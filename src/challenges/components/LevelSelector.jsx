import React from 'react';

const levels = [
  { value: 'beginner', label: 'مبتدئ' },
  { value: 'intermediate', label: 'متوسط' },
  { value: 'advanced', label: 'متقدم' }
];

const LevelSelector = ({ selected, onSelect }) => (
  <div className="flex gap-2 mb-4">
    {levels.map(level => (
      <button
        key={level.value}
        className={`btn btn-sm ${selected === level.value ? 'btn-primary' : 'btn-secondary'}`}
        onClick={() => onSelect(level.value)}
      >
        {level.label}
      </button>
    ))}
  </div>
);

export default LevelSelector; 