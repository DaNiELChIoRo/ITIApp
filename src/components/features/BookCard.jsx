import React from 'react';
import '../../styles/BookCard.css';

/**
 * Book card component for quiz selections
 * @param {Object} props
 * @param {string} props.book - Book name (internal identifier)
 * @param {string} props.displayName - Localized book name to display
 * @param {boolean} props.isSelected - Whether book is selected
 * @param {number} props.selectionIndex - Order in selection (1-based)
 * @param {Function} props.onClick - Click handler
 */
const BookCard = ({ book, displayName, isSelected, selectionIndex, onClick }) => {
  return (
    <div
      className={`book-card ${isSelected ? 'book-card-selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={isSelected ? -1 : 0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      aria-pressed={isSelected}
    >
      <div className="book-card-content">
        <span className="book-name">{displayName || book}</span>
        {isSelected && (
          <div className="selection-badge">
            {selectionIndex}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
