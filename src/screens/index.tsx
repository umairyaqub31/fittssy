import GetStarted from './getStarted';
import GetInformation from './authScreens/getInformation';
import Home from './homeTab/home';
import Login from './authScreens/login';
import Register from './authScreens/createAccount';
import ForgotPassword from './authScreens/forgotPassword';
import VerificatioOTP from './authScreens/verificationOTP';
import ExerciseOfDay from './homeTab/exersiceOfDay';
import PreviousExercise from './homeTab/previousExercise';

//...............Create Workout...........................//
// import Overview from './creatWorkoutTab/overview';
import MyPlans from './workoutPlanStack/myPlans';
import CreateNew from './workoutPlanStack/createNew';
import Exercise from './workoutPlanStack/exercise/overview';
import WorkOut from './workoutPlanStack/overview';
import SearchExercise from './workoutPlanStack/exercise/searchExercise';
import SearchWorkOut from './workoutPlanStack/searchWorkOut';
import AbsExercise from './workoutPlanStack/absExercise';
import NewWorkOut from './workoutPlanStack/newWorkout';
import EditWorkOut from './workoutPlanStack/EditWorkOut';
import StartWorkOut from './workoutPlanStack/startWorkOut';
import BuildWorkout from './workoutPlanStack/buildWorkout';

//..............Progress....................//
import ProgressOverview from './progressStack';
import WorkoutDetail from './progressStack/workoutDetail';
import WorkoutLogs from './progressStack/workoutDetail/logs';
import WorkoutNotes from './progressStack/workoutDetail/notes';
import WorkoutBody from './progressStack/workoutDetail/body';
import WorkoutPhotos from './progressStack/workoutDetail/photos';

//..............Insight....................//
import InsightOverview from './insightsStack';
import CurrentPlan from './insightsStack/currentPlan';
import WorkoutPlanDetail from './insightsStack/workoutPlanDetail';

import PlanDetailGraph from './insightsStack/planDetailGraph';

//................Profile.............//
import ProfileOverview from './profileStack';
import EditProfile from './profileStack/editProfile';
import PrivacyPolicy from './profileStack/policy';
import Settings from './profileStack/settings';
import UnitMeasure from './profileStack/settings/unitsMeasure';
import Notification from './profileStack/settings/notification';
import AppMode from './profileStack/settings/appMode';
import ThirdParty from './profileStack/settings/thirdParty';

export {
  GetStarted,
  Home,
  Login,
  Register,
  ForgotPassword,
  VerificatioOTP,
  CreateNew,
  Exercise,
  SearchExercise,
  GetInformation,
  WorkOut,
  SearchWorkOut,
  ExerciseOfDay,
  PreviousExercise,
  //................Progress.............//
  ProgressOverview,
  WorkoutDetail,
  WorkoutLogs,
  WorkoutNotes,
  WorkoutBody,
  WorkoutPhotos,

  // Workout,
  AbsExercise,
  NewWorkOut,
  EditWorkOut,
  StartWorkOut,
  MyPlans,
  BuildWorkout,

  //................Insight.............//
  InsightOverview,
  CurrentPlan,
  WorkoutPlanDetail,
  PlanDetailGraph,

  //................Profile.............//
  ProfileOverview,
  EditProfile,
  PrivacyPolicy,
  Settings,
  UnitMeasure,
  Notification,
  AppMode,
  ThirdParty,
};
