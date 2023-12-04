import { useState } from 'react';
import './App.css';
import GoalList from './components/goal-list/GoalList';
import NewGoal from './components/new-goal/NewGoal';

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' }
  ]);

  const addNewHandler = (newGoal) => {
    setCourseGoals(oldState => oldState.concat(newGoal));
  };

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
}

export default App;
