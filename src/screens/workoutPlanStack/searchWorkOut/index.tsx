import {category} from '@utils';
import {navigate} from '@services';
import React, {useState} from 'react';
import {SearchToSelect} from '@components';
import {RouteProp} from '@react-navigation/native';

interface Props {
  route: RouteProp<{
    params: {
      title?: any;
    };
  }>;
}

const SearchWorkOut = (props: Props) => {
  const {title} = props.route?.params;

  const onOpen = (item: any, index: any) => {
    if (item?.title == 'Abs') {
      navigate('AbsExercise', {title: item?.title});
    }
  };

  return (
    <>
      <SearchToSelect
        endIcon
        gradient
        title={title}
        data={category}
        onOpen={onOpen}
      />
    </>
  );
};

export default SearchWorkOut;
