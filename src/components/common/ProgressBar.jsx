import React from 'react';
import '../../styles/ProgressBar.css';

/**
 * Progress bar component
 * @param {Object} props
 * @param {number} props.progress - Progress percentage (0-100)
 * @param {string} props.color - Progress bar color
 */
const ProgressBar = ({ progress = 0, color = '#4A90E2' }) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{
          width: `${clampedProgress}%`,
          backgroundColor: color
        }}
      />
    </div>
  );
};

export default ProgressBar;
