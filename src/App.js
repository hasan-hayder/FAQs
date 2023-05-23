import Question from "./components/Question";


function App() {
const questions = [
  {
    id: 1,
     label: 'How can I pay my bill?',
     content: 'Use our Quick Pay machines which is located in most malls and stores'
  },
  {
    id: 2,
    label: 'How can I check my prepaid balance?',
    content: 'Dial *135# or dial 135 to get the IVR'
  },
  {
    id: 3,
    label: 'How can I cancel my Home Services connection?',
    content: 'Calling 155 without the need to reach an agent by choosing the new cancellation option'
  }
]

  return (
    <Question questions={questions} />
  );
}

export default App;
