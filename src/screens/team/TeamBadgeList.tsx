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
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {Colors} from '../../constants/Colors';

export const TeamBadgeList = ({selectedBadge, setBadge}) => {
  const teamBadgeList = [
    {
      _id: 1,
      component: <Shield1 fill={Colors.background.component} />,
    },
    {
      _id: 2,
      component: <Shield2 fill={Colors.background.component} />,
    },
    {
      _id: 3,
      component: <Shield3 fill={Colors.background.component} />,
    },
    {
      _id: 4,
      component: <Shield4 fill={Colors.background.component} />,
    },
    {
      _id: 5,
      component: <Shield5 fill={Colors.background.component} />,
    },
    {
      _id: 6,
      component: <Shield6 fill={Colors.background.component} />,
    },
    {
      _id: 7,
      component: <Shield7 fill={Colors.background.component} />,
    },
    {
      _id: 8,
      component: <Shield8 fill={Colors.background.component} />,
    },
    {
      _id: 9,
      component: <Shield9 fill={Colors.background.component} />,
    },
    {
      _id: 10,
      component: <Shield10 fill={Colors.background.component} />,
    },
  ];
  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={teamBadgeList || []}
      renderItem={({item}) => (
        <TouchableWithoutFeedback
          onPress={() => {
            setBadge({...selectedBadge, _id: `${item._id}`});
          }}>
          <View
            style={
              selectedBadge._id == item._id
                ? styles.selectedTeamBadgeView
                : styles.teamBadgeView
            }>
            {item.component}
          </View>
        </TouchableWithoutFeedback>
      )}
      keyExtractor={item => item._id}
      ItemSeparatorComponent={() => <Separator />}
      horizontal
    />
  );
};

export const SelectBadge = ({color, badgeId}) => {
  switch (parseInt(badgeId)) {
    case 1:
      return <Shield1 fill={color} />;
    case 2:
      return <Shield2 fill={color} />;
    case 3:
      return <Shield3 fill={color} />;
    case 4:
      return <Shield4 fill={color} />;
    case 5:
      return <Shield5 fill={color} />;
    case 6:
      return <Shield6 fill={color} />;
    case 7:
      return <Shield7 fill={color} />;
    case 8:
      return <Shield8 fill={color} />;
    case 9:
      return <Shield9 fill={color} />;
    case 10:
      return <Shield10 fill={color} />;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  flatList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamBadgeView: {
    width: Dimensions.get('window').width - 100,
    height: moderateScale(220),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.background.component,
    borderRadius: 10,
  },
  selectedTeamBadgeView: {
    width: Dimensions.get('window').width - 80,
    height: moderateScale(250),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.background.component,
    borderRadius: 10,
    borderColor: Colors.especial.main,
    borderWidth: 5,
  },
});

export const Separator = styled.View`
  /* background-color: ${Colors.primary.light}; */
  width: 10px;
  height: 100%;
  border-radius: 5;
`;
