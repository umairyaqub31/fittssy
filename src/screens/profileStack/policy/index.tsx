import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {BackHeader, Text, Wrapper} from '@components';
import {margin} from '@theme';
import {useTheme} from '@react-navigation/native';

const PrivacyPolicy = ({navigation}: any) => {
  const theme: any = useTheme();
  const colors = theme.colors;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Wrapper isTop>
        <BackHeader
          title={'Privacy Policy'}
          startIcon
          navigation={navigation}
        />
        <Text style={margin.top_24} semiBold>
          Lorem ipsum dolor sit amet
        </Text>
        <Text style={margin.top_16} medium color={colors.grayText}>
          Consectetur adipiscing elit. Natoque phasellus lobortis mattis cursus
          faucibus hac proin risus. Turpis phasellus massa ullamcorper volutpat.
          Ornare commodo non integer fermentum nisi, morbi id. Vel tortor mauris
          feugiat amet, maecenas facilisis risus, in faucibus. Vestibulum
          ullamcorper fames eget enim diam fames faucibus duis ac. Aliquam non
          tellus semper in dignissim nascetur venenatis lacus.
        </Text>
        <Text style={margin.top_16} medium color={colors.grayText}>
          Lectus vel non varius interdum vel tellus sed mattis. Sit laoreet
          auctor arcu mauris tincidunt sociis tristique pharetra neque. Aliquam
          pharetra elementum nisl sapien. Erat nisl morbi eu dolor in. Sapien ut
          lacus dui libero morbi tristique.
        </Text>
        <Text style={margin.top_16} medium color={colors.grayText}>
          Sit praesent mi, dolor, magna in pellentesque sollicitudin odio sed.
          Sit nibh aliquam enim ipsum lectus sem fermentum congue velit. Purus
          habitant odio in morbi aliquet velit pulvinar. Facilisis ut amet
          interdum pretium. Fames pretium eget orci facilisis mattis est libero
          facilisis ullamcorper. Est auctor amet egestas risus libero et. Auctor
          faucibus sit id fringilla vitae. Ac volutpat sodales tristique ut
          netus turpis.
        </Text>
        <Text style={margin.Vertical_16} medium color={colors.grayText}>
          Lorem ipsum dolor sit amet, consectetur
        </Text>
      </Wrapper>
    </ScrollView>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
