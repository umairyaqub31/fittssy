import {FlatList, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useTheme} from '@react-navigation/native';
import {HistoryHeader, PrimaryButton} from '@components';
import {Text} from '@components';
import {RF, SCREEN_HEIGHT, SCREEN_WIDTH} from '@theme';
const ProgressOverview = () => {
  const [selected, setSelected] = useState('');
  const [screenToShow, setScreenToShow] = useState('calendar');
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const theme: any = useTheme();
  const colors = theme.colors;
  const styles = useStyles(colors);

  const handleDayPress = (day: any) => {
    console.log('selected day', day);
    setSelected(day.dateString);
    setScreenToShow('list');
  };

  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: 20}}>
        <HistoryHeader title={'History'} />
      </View>

      {screenToShow == 'calendar' ? (
        <View style={{flex: 1}}>
          <Calendar
            // onDayPress={day => {
            //   setSelected(day.dateString);
            // }}
            style={{width: '100%'}}
            headerStyle={{width: '100%'}}
            // hideExtraDays
            theme={styles.calendarTheme}
            onDayPress={day => handleDayPress(day)}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                // selectedDotColor: 'orange',
              },
              '2024-02-11': {marked: true, dotColor: '#9E46C7'},
              //   '2024-02-02': {marked: true},
            }}
          />

          <View style={[styles.footerContainer, styles.row]}>
            <View style={styles.row}>
              <View style={[styles.footerDot, {backgroundColor: '#FF534A'}]} />
              <Text style={styles.footerText} size={12} regular>
                Progress Photos
              </Text>
            </View>
            <View style={styles.row}>
              <View style={[styles.footerDot, {backgroundColor: '#FEBE1A'}]} />
              <Text style={styles.footerText} size={12} regular>
                Notes
              </Text>
            </View>

            <View style={styles.row}>
              <View style={[styles.footerDot, {backgroundColor: '#9E46C7'}]} />
              <Text style={styles.footerText} size={12} regular>
                Body Logs
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={{flex: 1, paddingHorizontal: RF(15), marginTop: 10}}>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <PrimaryButton
              width={166}
              height={45}
              f_Size={RF(17)}
              f_Weight={'500'}
              title={'Export'}
              bgColor={colors.primary}
              textColor={colors.white}
              // onPress={() => navigate('GetInformation', '')}
            />
            <PrimaryButton
              width={166}
              height={45}
              f_Size={RF(17)}
              f_Weight={'500'}
              title={'Import'}
              bgColor={colors.primary}
              textColor={colors.white}
              // onPress={() => navigate('GetInformation', '')}
            />
          </View>
          <View
            style={[styles.row, {justifyContent: 'center', marginBottom: 20}]}>
            <Text style={styles.dateText} size={18} regular>
              {selected}
            </Text>
          </View>

          <View style={{flex: 1}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              // refreshControl={
              //   <RefreshControl
              //     enabled={true}
              //     colors={['#9Bd35A', '#689F38']}
              //     refreshing={refreshing}
              //     onRefresh={handleRefresh}
              //   />
              // }
              data={[1, 2, 3, 4, 5]}
              // ListEmptyComponent={
              //   loading ? null : <EmptyList description={'No data found'} />
              // }
              renderItem={({item, index}) => (
                <ListItem
                  selectedItemIndex={selectedItemIndex}
                  setSelectedItemIndex={setSelectedItemIndex}
                  colors={colors}
                  item={item}
                  index={index}
                  styles={styles}
                  //   handleAccept={handleAccept}
                  //   handleReject={handleReject}
                  //   acceptLoading={acceptLoading}
                  //   rejectLoading={rejectLoading}
                />
              )}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ProgressOverview;

const ListItem = (props: any) => {
  const {colors, item, index, styles, selectedItemIndex} = props;
  return (
    <View style={styles.listItemContainer}>
      <View style={[styles.row, {marginBottom: 4}]}>
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={12}
          thin>
          Training:{' '}
        </Text>
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={14}
          medium>
          00:40:08{' '}
        </Text>
        <View
          style={[
            styles.verticleLine,
            {
              backgroundColor:
                index == selectedItemIndex ? colors.primary : colors.grayText,
            },
          ]}
        />

        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={12}
          thin>
          {' '}
          Actual:{' '}
        </Text>
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={14}
          medium>
          00:13:12{' '}
        </Text>
        <View
          style={[
            styles.verticleLine,
            {
              backgroundColor:
                index == selectedItemIndex ? colors.primary : colors.grayText,
            },
          ]}
        />
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={12}
          thin>
          {' '}
          Rest:{' '}
        </Text>
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={14}
          medium>
          00:27:59{' '}
        </Text>
      </View>

      <View style={[styles.row]}>
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={12}
          thin>
          Idle:{' '}
        </Text>
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={14}
          medium>
          00:00:00{' '}
        </Text>
        <View
          style={[
            styles.verticleLine,
            {
              backgroundColor:
                index == selectedItemIndex ? colors.primary : colors.grayText,
            },
          ]}
        />

        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={12}
          thin>
          {' '}
          Complete:{' '}
        </Text>
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={14}
          medium>
          8{' '}
        </Text>
        <View
          style={[
            styles.verticleLine,
            {
              backgroundColor:
                index == selectedItemIndex ? colors.primary : colors.grayText,
            },
          ]}
        />
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={12}
          thin>
          {' '}
          Weight:{' '}
        </Text>
        <Text
          style={{
            color: index == selectedItemIndex ? colors.primary : colors.text,
          }}
          size={14}
          medium>
          6896.0 kg{' '}
        </Text>
      </View>

      <View style={styles.lineStyle} />

      <Text
        style={{
          color: index == selectedItemIndex ? colors.primary : colors.text,
        }}
        size={18}
        semiBold>
        Workout 2
      </Text>
    </View>
  );
};

const useStyles = (colors: any) =>
  StyleSheet.create({
    calendarTheme: {
      //   contentStyle: {backgroundColor: 'yellow'},
      backgroundColor: '#ffffff',
      calendarBackground: '#ffffff',
      arrowColor: '#000',
      //   textSectionTitleColor: '#b6c1cd',
      selectedDayBackgroundColor: colors.primary,
      selectedDayTextColor: '#ffffff',
      todayTextColor: '#00adf5',
      dayTextColor: '#2d4150',
      dotStyle: {width: 8, height: 8, borderRadius: 4},
    },
    footerContainer: {
      marginTop: 8,
      paddingHorizontal: 22,
      justifyContent: 'space-between',
    },
    row: {flexDirection: 'row', alignItems: 'center'},
    footerDot: {
      height: 12,
      width: 12,
      borderRadius: 6,
      marginRight: 6,
    },
    footerText: {
      color: colors.grayText,
    },
    dateText: {
      color: colors.text,
    },
    listItemContainer: {
      height: RF(105),
      backgroundColor: colors.card,
      marginBottom: 20,
      borderRadius: 16,
      padding: 10,
    },
    verticleLine: {
      height: '65%',
      width: 1,
      //   backgroundColor: '#909090',
    },
    lineStyle: {
      borderBottomColor: 'gray',
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginVertical: 10,
    },
  });
