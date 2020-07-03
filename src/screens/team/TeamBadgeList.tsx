import React from 'react';
import Shield1 from '../../assets/img/team/shields/shield1.svg';
import Shield2 from '../../assets/img/team/shields/shield2.svg';
import Shield3 from '../../assets/img/team/shields/shield3.svg';
import Shield4 from '../../assets/img/team/shields/shield4.svg';
import Shield5 from '../../assets/img/team/shields/shield5.svg';
import Shield6 from '../../assets/img/team/shields/shield6.svg';
import Shield7 from '../../assets/img/team/shields/shield7.svg';
import Shield8 from '../../assets/img/team/shields/shield8.svg';
import Shield9 from '../../assets/img/team/shields/shield9.svg';
import Shield10 from '../../assets/img/team/shields/shield10.svg';
import {FlatList, View, StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {Colors} from '../../constants/Colors';

export const TeamBeadgeList = () => {
  const teamBeadgeList = [
    {
      _id: 0,
      component: <Shield1 fill={Colors.primary.main} />,
    },
    {
      _id: 1,
      component: <Shield2 fill={Colors.primary.main} />,
    },
    {
      _id: 3,
      component: <Shield3 fill={Colors.primary.main} />,
    },
    {
      _id: 4,
      component: <Shield4 fill={Colors.primary.main} />,
    },
    {
      _id: 5,
      component: <Shield5 fill={Colors.primary.main} />,
    },
    {
      _id: 6,
      component: <Shield6 fill={Colors.primary.main} />,
    },
    {
      _id: 7,
      component: <Shield7 fill={Colors.primary.main} />,
    },
    {
      _id: 8,
      component: <Shield8 fill={Colors.primary.main} />,
    },
    {
      _id: 9,
      component: <Shield9 fill={Colors.primary.main} />,
    },
    {
      _id: 10,
      component: <Shield10 fill={Colors.primary.main} />,
    },
  ];
  return (
    <FlatList
      data={teamBeadgeList || []}
      renderItem={({item}) => (
        <View style={styles.teamLogoView}>{item.component}</View>
      )}
      keyExtractor={item => item._id}
      ItemSeparatorComponent={() => <Separator />}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  teamLogoView: {
    width: Dimensions.get('window').width - 100,
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.component,
    borderRadius: 10,
  },
});

export const Separator = styled.View`
  /* background-color: ${Colors.primary.light}; */
  width: 10px;
  height: 100%;
  border-radius: 5;
`;
