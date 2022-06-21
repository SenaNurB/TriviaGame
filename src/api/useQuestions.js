import {useQuery} from 'react-query';
import axios from 'axios';

function useQuestions(category, difficulty) {
  return useQuery('questions', async () => {
    const {data} = await axios.get();
    return data;
  });
}

export default useQuestions;
