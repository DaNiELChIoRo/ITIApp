/**
 * Shuffle an array using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled copy of the array
 */
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Format a percentage score with visual indicator
 * @param {number} percentage - Score percentage (0-100)
 * @returns {string} Formatted score message
 */
export const getScoreMessage = (percentage) => {
  if (percentage === 100) return 'Perfect Score!';
  if (percentage >= 90) return 'Excellent!';
  if (percentage >= 80) return 'Great Job!';
  if (percentage >= 70) return 'Good Work!';
  if (percentage >= 60) return 'Not Bad!';
  if (percentage >= 50) return 'Keep Practicing!';
  return 'Try Again!';
};

/**
 * Get score color based on percentage
 * @param {number} percentage - Score percentage (0-100)
 * @returns {string} Color code
 */
export const getScoreColor = (percentage) => {
  if (percentage >= 90) return '#27AE60';
  if (percentage >= 70) return '#50C878';
  if (percentage >= 50) return '#F39C12';
  return '#E74C3C';
};

/**
 * Debounce function to limit execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
