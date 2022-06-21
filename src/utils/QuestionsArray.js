import base64 from 'react-native-base64';

const questionArray = questions => {
  const questionsArr = questions.results.map((item, index) => {
    const options = item.incorrect_answers.map(answer => {
      return base64.decode(answer);
    });
    options.push(base64.decode(item.correct_answer));

    const question = {
      question: base64.decode(item.question),
      options: options.sort(),
      correct_option: base64.decode(item.correct_answer),
    };
    return question;
  });
  return questionsArr;
};

export default questionArray;
