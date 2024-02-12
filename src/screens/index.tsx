import GetStarted from './getStarted';
import GetInformation from './authScreens/getInformation';
import Home from './homeTab/home';
import Login from './authScreens/login';
import Register from './authScreens/createAccount';

//...............Create Workout...........................//
// import Overview from './creatWorkoutTab/overview';
import CreateNew from './workoutPlanStack/createNew';
import Exercise from './workoutPlanStack/exercise/overview';
import WorkOut from './workoutPlanStack/overview';
import SearchExercise from './workoutPlanStack/exercise/searchExercise';
import SearchWorkOut from './workoutPlanStack/searchWorkOut';
import AbsExercise from './workoutPlanStack/absExercise';
import NewWorkOut from './workoutPlanStack/newWorkout';
import EditWorkOut from './workoutPlanStack/EditWorkOut';
import StartWorkOut from './workoutPlanStack/startWorkOut';

//..............Progress....................//
import ProgressOverview from './progressStack';
import WorkoutDetail from './progressStack/workoutDetail';
import WorkoutLogs from './progressStack/workoutDetail/logs';
import WorkoutNotes from './progressStack/workoutDetail/notes';
import WorkoutBody from './progressStack/workoutDetail/body';
import WorkoutPhotos from './progressStack/workoutDetail/photos';

//..............Insight....................//
import InsightOverview from './insightsStack';

//................Insight.............//
import ProfileOverview from './profileStack';

export {
  GetStarted,
  Home,
  Login,
  Register,
  CreateNew,
  Exercise,
  SearchExercise,
  GetInformation,
  WorkOut,
  SearchWorkOut,

  //................Progress.............//
  ProgressOverview,
  WorkoutDetail,
  WorkoutLogs,
  WorkoutNotes,
  WorkoutBody,
  WorkoutPhotos,

  // Overview,
  AbsExercise,
  NewWorkOut,
  EditWorkOut,
  StartWorkOut,

  //................Insight.............//
  InsightOverview,

  //................Profile.............//
  ProfileOverview,
};
