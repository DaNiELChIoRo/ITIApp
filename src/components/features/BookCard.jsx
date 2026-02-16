import React from 'react';
import '../../styles/BookCard.css';

/**
 * Book card component for quiz selections
 * @param {Object} props
 * @param {string} props.book - Book name (internal identifier)
 * @param {string} props.displayName - Localized book name to display
 * @param {boolean} props.isSelected - Whether book is selected
 * @param {boolean} props.isCorrectlyPlaced - Whether book was placed in correct position
 * @param {boolean} props.isLastPlaced - Whether this was just placed (for animation)
 * @param {number} props.selectionIndex - Order in selection (1-based)
 * @param {Function} props.onClick - Click handler
 */
const BookCard = ({ book, displayName, isSelected, isCorrectlyPlaced, isLastPlaced, selectionIndex, onClick }) => {
  const classNames = [
    'book-card',
    isSelected ? 'book-card-selected' : '',
    isCorrectlyPlaced ? 'book-card-correct' : '',
    isLastPlaced ? 'book-card-just-placed' : ''
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={isSelected}
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
