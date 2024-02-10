import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {BackHeader, Search} from '@components';

interface Props {
  data?: any;
  title?: any;
  endIcon?: any;
}

const SearchToSelect = (props: Props) => {
  const {title, endIcon, data} = props;
  const [search, setSearch] = useState<any>(false);

  const onSubmitEditing = () => {};

  return (
    <>
      <BackHeader title={title} endIcon={endIcon} />
      <Search onSubmitEditing={onSubmitEditing} />
      {search && (
        <FlatList
          data={data}
          renderItem={() => {
            return <View></View>;
          }}
        />
      )}
    </>
  );
};

export default SearchToSelect;
