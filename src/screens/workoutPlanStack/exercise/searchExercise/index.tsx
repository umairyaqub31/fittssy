import React from 'react';
import {SearchToSelect} from '@components';
import {RouteProp} from '@react-navigation/native';

interface Props {
  route: RouteProp<{
    params: {
      title?: any;
    };
  }>;
}

const SearchExercise = (props: Props) => {
  const {title} = props.route?.params;

  return (
    <>
      <SearchToSelect title={title} />
    </>
  );
};

export default SearchExercise;
