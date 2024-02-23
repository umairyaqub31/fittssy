import React from 'react';
import {SearchToSelect} from '@components';
import {RouteProp} from '@react-navigation/native';
import {category} from '@utils';
import {navigationRef} from '@services';

interface Props {
  route: RouteProp<{
    params: {
      title?: any;
      data?: any;
      updateState: (type: any, value: any) => void;
    };
  }>;
}

const SearchExercise = (props: Props) => {
  const {title, data, updateState} = props.route?.params;
  const onOpen = (item: any, index: any) => {
    // console.log('ttt....', title);
    updateState(title, item.title);
    navigationRef.current.goBack();
  };

  return (
    <>
      <SearchToSelect title={title} gradient data={data} onOpen={onOpen} />
    </>
  );
};

export default SearchExercise;
