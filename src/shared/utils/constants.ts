export const demo = [{title: 'demo'}];
import AsyncStorage from '@react-native-async-storage/async-storage';

let isDarkThemeEnabled = false;

export function setIsDarkModeEnabled(isEnabled: boolean) {
  isDarkThemeEnabled = isEnabled;
}

export function getIsDarkModeEnabled() {
  return isDarkThemeEnabled;
}

export async function getDataFromUserDefaults(key: any) {
  try {
    let item = await AsyncStorage.getItem(key);
    if (item !== null) {
      return item;
    }
  } catch (error) {
    console.log('Error saving data' + error);
  }

  return undefined;
}

export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    {length: (stop - start) / step + 1},
    (value, index) => start + index * step,
  );

export const list = [
  {title: 'Existing Workout Plan', index: 0},
  {title: 'New Workout Plan', index: 1},
  {title: 'New Workout', index: 2},
];

export const goal = [
  {title: 'Maintaining', index: 0},
  {title: 'Bulking', index: 1},
  {title: 'Cutting', index: 2},
];

export const plan = [
  {
    label: 'Bulking: 3 Days',
    index: 0,
    description: 'Benji 3 Day Plan',
    status: 'Current',
  },
  {
    label: 'Bulking: 3 Days',
    index: 1,
    description: 'pmegyes’s 3 Day Plan',
    status: 'Switch',
  },
  {
    label: 'Bulking: 4 Days',
    index: 2,
    description: '5day PPL Plan',
    status: 'Switch',
  },
];

export const data = [
  {id: 0, heading: 'Gym', desc: 'With strength training equipment'},
  {id: 1, heading: 'Home', desc: 'With minimal heavy equipment'},
];
export const data2 = [
  {
    id: 0,
    heading: 'Beginner',
    desc: 'New to lifting weights & unfamiliar with most exercises',
  },
  {
    id: 1,
    heading: 'Intermediate',
    desc: 'Familiar with most exercises & comfortable working out',
  },
  {
    id: 2,
    heading: 'Advanced',
    desc: 'Experienced with training & will often help out friends who are just starting',
  },
];

export const data3 = [
  {
    id: 0,
    heading: 'Maintaining',
    desc: 'Staying healthy & having good cardiovascular health',
  },
  {
    id: 1,
    heading: 'Bulking',
    desc: 'Focus on gaining muscle size building strength',
  },
  {
    id: 2,
    heading: 'Cutting',
    desc: 'Focus on losing body fat or lose weight in general',
  },
];
export const data4 = [
  {
    id: 0,
    heading: 'I’ll Create My Own Workout',
    desc: 'I already have a workout plan.',
  },
  {
    id: 1,
    heading: 'Help me Find A New Workout',
    desc: 'Match me with the perfect workout plan.',
  },
];
export const data5 = [
  {
    id: 0,
    heading: '1 to 2',
  },
  {
    id: 1,
    heading: '3',
  },
  {
    id: 2,
    heading: '4',
  },
  {
    id: 3,
    heading: '5 or more',
  },
];
export const data6 = [
  {
    id: 0,
    cat: 'General',
    days: '3 days',
    heading: 'Classic Bodybuilding Routine',
  },
  {
    id: 1,
    cat: 'Bulking',
    days: '4 days',
    heading: 'Spark Your Testosterone',
  },
  {
    id: 2,
    cat: 'Bulking',
    days: '3 days',
    heading: 'Rest/Pause Training Program',
  },
];

export const category = [
  {title: 'Abs'},
  {title: 'Back'},
  {title: 'Biceps'},
  {title: 'Cardio'},
  {title: 'Chest'},
  {title: 'Legs'},
  {title: 'Shoulders'},
  {title: 'Triceps'},
  {title: 'Other'},
];

export const typeData = [
  {title: 'Weight and Reps'},
  {title: 'Distance and Time'},
  {title: 'Weight and Distance'},
  {title: 'Weight and Time'},
  {title: 'Reps and Distance'},
  {title: 'Reps and Time'},
  {title: 'Weight'},
];

export const WeightUnit = [
  {title: 'Default (kgs)'},
  {title: 'Metric (kgs)'},
  {title: 'Imperial (lbs)'},
];

export const abs = [
  {title: 'Ab-Wheel Rollout'},
  {title: 'Cable Crunch'},
  {title: 'Crunch'},
  {title: 'Decline Crunch'},
  {title: 'Dragon Flag'},
  {title: 'Plank'},
  {title: 'Side Plank'},
];

export const currentPlanData = [
  {
    id: 0,
    day: 'Day 1',
    title: 'Benji Chest-Back',
    dayColor: 'rgba(36, 145, 255, 1)',
    dayCardColor: 'rgba(36, 145, 255, 0.14)',
  },
  {
    id: 2,
    title: 'Benji Legs-Abs',
    day: 'Day 2',
    dayColor: 'rgba(54, 216, 170, 1)',
    dayCardColor: 'rgba(54, 216, 170, 0.14)',
  },
  {
    id: 3,
    title: 'Benji Arms',
    day: 'Day 3',
    dayColor: 'rgba(255, 191, 113, 1)',
    dayCardColor: 'rgba(255, 189, 113, 0.14)',
  },
];

export const settingsData = [
  {
    id: 0,
    title: 'Default Units of Measure',
    screen: 'UnitMeasure',
  },
  {
    id: 2,
    title: 'Notifications',
    screen: 'Notification',
  },
  {
    id: 3,
    title: 'App Mode',
    screen: 'AppMode',
  },
  {
    id: 4,
    title: 'Connect 3rd Party',
    screen: 'ThirdParty',
  },
];

export const detailData = [
  {
    id: 0,
    name: 'Crunch',
  },
  {
    id: 1,
    name: 'Lateral Stretch',
  },
  {
    id: 2,
    name: 'Cross-Legged Forward Fold',
  },
  {
    id: 3,
    name: 'Toe Touchers',
  },
];
export const profileData = [
  {id: 0, title: 'Edit Profile', screen: 'EditProfile'},
  {id: 1, title: 'Privacy Policy', screen: 'PrivacyPolicy'},
  {id: 2, title: 'Settings', screen: 'Settings'},
];
export const planData = [
  {
    id: 0,
    title: 'Donation',
    desc: 'Pay as much you like',
    price: '0.00',
    perplan: ' / one off',
  },
  {
    id: 1,
    title: 'Monthly',
    desc: 'Pay monthly, cancel any time',
    price: '9.99',
    perplan: ' / m',
  },
  {
    id: 2,
    title: 'Yearly',
    desc: 'Pay for a full year',
    price: '99.99',
    perplan: ' / y',
  },
  {
    id: 3,
    title: 'Lifetime Supporter',
    desc: 'All future features included',
    price: '249.99',
    perplan: ' / y',
  },
];
export const cardData = [{id: 1}, {id: 2}];
export const paymentMethod = [
  {id: 0, title: 'Apple Pay'},
  {id: 1, title: 'Google Pay'},
  {id: 2, title: 'Bank Pay'},
];
