import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const ReviewsContext = createContext();
const BASE_URL = "http://localhost:9000/reviews";

function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  const value = useMemo(() => {
    return {
      reviews,
      error,
      isLoading,
    };
  }, [reviews, error, isLoading]);

  return (
    <ReviewsContext.Provider
      value={value}
    >
      {children}
    </ReviewsContext.Provider>
  );
}

function useReviews() {
  const context = useContext(ReviewsContext);
  if (context === undefined)
    throw new Error("You Are Using The Context Out Of The Provider 😐.");
  return context;
}

export { ReviewsProvider, useReviews };
