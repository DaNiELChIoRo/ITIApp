import React from 'react';
import '../../styles/BookCard.css';

/**
 * Book card component for quiz selections
 * Single click selects or deselects.
 */
const BookCard = ({ book, displayName, isSelected, isCorrectlyPlaced, isLastPlaced, selectionIndex, onClick, onDeselect }) => {
  const classNames = [
    'book-card',
    isSelected ? 'book-card-selected' : '',
    isCorrectlyPlaced ? 'book-card-correct' : '',
    isLastPlaced ? 'book-card-just-placed' : ''
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (isSelected && onDeselect) {
      onDeselect();
    } else if (!isSelected) {
      onClick();
    }
  };

  return (
    <button
      className={classNames}
      onClick={handleClick}
      aria-pressed={isSelected}
    >
      <div className="book-card-content">
        <span className="book-name">{displayName || book}</span>
        {isSelected && (
          <div className={`selection-badge ${isCorrectlyPlaced ? 'selection-badge-correct' : ''}`}>
            {selectionIndex}
          </div>
        )}
      </div>
    </button>
  );
};

export default BookCard;
