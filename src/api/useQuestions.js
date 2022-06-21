import {useQuery} from 'react-query';
import axios from 'axios';

async function fetchQuestions(category, difficulty) {
  const {data} = await axios.get(
    `&category=${category}&difficulty=${difficulty}`,
  );
  return data;
}

function useQuestions(category, difficulty) {
  return useQuery('questions', () => fetchQuestions(category, difficulty));
}

export default useQuestions;
