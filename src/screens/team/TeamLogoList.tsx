import React from 'react';
import Wolf from '../../assets/img/team/logos/wolf.svg';
import Fish from '../../assets/img/team/logos/fish.svg';
import Cat from '../../assets/img/team/logos/cat.svg';
import Seahorse from '../../assets/img/team/logos/seahorse.svg';
import Pig from '../../assets/img/team/logos/pig.svg';
import Bear from '../../assets/img/team/logos/bear.svg';
import Deer from '../../assets/img/team/logos/deer.svg';
import Dino from '../../assets/img/team/logos/dino.svg';

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

export const TeamLogoList = ({selectedLogo, setLogo}) => {
  const teamLogoList = [
    {
      _id: 1,
      component: <Wolf fill={Colors.background.component} />,
    },
    {
      _id: 2,
      component: <Fish fill={Colors.background.component} />,
    },
    {
      _id: 3,
      component: <Cat fill={Colors.background.component} />,
    },
    {
      _id: 4,
      component: <Seahorse fill={Colors.background.component} />,
    },
    {
      _id: 5,
      component: <Pig fill={Colors.background.component} />,
    },
    {
      _id: 6,
      component: <Bear fill={Colors.background.component} />,
    },
    {
      _id: 7,
      component: <Deer fill={Colors.background.component} />,
    },
    {
      _id: 8,
      component: <Dino fill={Colors.background.component} />,
    },
    // {
    //   _id: 9,
    //   component: <Shield9 fill={Colors.background.component} />,
    // },
    // {
    //   _id: 10,
    //   component: <Shield10 fill={Colors.background.component} />,
    // },
  ];
  return (
    <FlatList
      contentContainerStyle={styles.flatList}
      data={teamLogoList || []}
      renderItem={({item}) => (
        <TouchableWithoutFeedback
          onPress={() => {
            setLogo({color: selectedLogo.color, _id: `${item._id}`});
          }}>
          <View
            style={
              selectedLogo._id == item._id
                ? styles.selectedTeamLogoView
                : styles.teamLogoView
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

export const SelectLogo = ({color, badgeId}) => {
  switch (parseInt(badgeId)) {
    case 1:
      return <Wolf fill={color} />;
    case 2:
      return <Fish fill={color} />;
    case 3:
      return <Cat fill={color} />;
    case 4:
      return <Seahorse fill={color} />;
    case 5:
      return <Pig fill={color} />;
    case 6:
      return <Bear fill={color} />;
    case 7:
      return <Deer fill={color} />;
    case 8:
      return <Dino fill={color} />;
    // case 9:
    //   return <Shield9 fill={color} />;
    // case 10:
    //   return <Shield10 fill={color} />;
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
  teamLogoView: {
    width: Dimensions.get('window').width - 100,
    height: moderateScale(220),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: Colors.background.component,
    borderRadius: 10,
  },
  selectedTeamLogoView: {
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
