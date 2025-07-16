import { useState } from 'react';
import { sendEmail } from '../api/contact';

export const useContact = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitContact = async (contactData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      await sendEmail(contactData);
      setSuccess(true);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    loading,
    error,
    success,
    submitContact,
    resetForm
  };
}; 