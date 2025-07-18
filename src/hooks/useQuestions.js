import { useState, useEffect } from 'react';
import { questions } from '../lib/supabase';

export const useQuestions = (filters = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuestions();
  }, [filters]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const { data: questionsData, error } = await questions.getAll(filters);
      
      if (error) throw error;
      
      setData(questionsData || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createQuestion = async (questionData) => {
    try {
      const { data: newQuestion, error } = await questions.create(questionData);
      if (error) throw error;
      
      setData(prev => [newQuestion, ...prev]);
      return { data: newQuestion, error: null };
    } catch (err) {
      return { data: null, error: err.message };
    }
  };

  return {
    questions: data,
    loading,
    error,
    createQuestion,
    refetch: fetchQuestions
  };
};