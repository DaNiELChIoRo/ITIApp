import { useLocalStorage } from './useLocalStorage';
import { useCallback } from 'react';

/**
 * Custom hook for managing quiz statistics
 * @returns {Object} Stats and methods to update them
 */
export const useStats = () => {
  const [stats, setStats] = useLocalStorage('itiapp-stats', {
    totalAttempts: 0,
    bestScore: 0,
    averageScore: 0,
    totalCorrect: 0,
    lastAttemptDate: null
  });

  /**
   * Update stats with a new quiz result
   */
  const updateStats = useCallback((score) => {
    setStats(prevStats => {
      const newTotalAttempts = prevStats.totalAttempts + 1;
      const newTotalCorrect = prevStats.totalCorrect + score.correct;
      const newAverageScore = Math.round((newTotalCorrect / (newTotalAttempts * score.total)) * 100);

      return {
        totalAttempts: newTotalAttempts,
        bestScore: Math.max(prevStats.bestScore, score.percentage),
        averageScore: newAverageScore,
        totalCorrect: newTotalCorrect,
        lastAttemptDate: new Date().toISOString()
      };
    });
  }, [setStats]);

  /**
   * Reset all stats
   */
  const resetStats = useCallback(() => {
    setStats({
      totalAttempts: 0,
      bestScore: 0,
      averageScore: 0,
      totalCorrect: 0,
      lastAttemptDate: null
    });
  }, [setStats]);

  return {
    stats,
    updateStats,
    resetStats
  };
};
