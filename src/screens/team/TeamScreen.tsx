import React from 'react';
import {View, StyleSheet, ImageBackground, Text, Image} from 'react-native';
import {Screen} from '../../components/Screen';
import {Images} from '../../constants/Images';
import {Card} from '../../components/Card';
import {Colors} from '../../constants/Colors';
import styled from 'styled-components/native';
import {LaneIconButton} from '../../components/LaneIconButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PlayerList} from './PlayerList';

export const TeamScreen = () => {
  const [lane, changeLane] = React.useState('');
  const [topLaner, changeTopLaner] = React.useState();
  const [midLaner, changeMidLaner] = React.useState();
  const [jungle, changeJungle] = React.useState();
  const [botLaner, changeBotLaner] = React.useState();
  const [support, changeSupport] = React.useState();

  const pickNewPlayer = player => {
    switch (lane) {
      case 'Top':
        changeTopLaner(player);
        break;
      case 'Jungle':
        changeJungle(player);
        break;
      case 'Mid':
        changeMidLaner(player);
        break;
      case 'Bot':
        changeBotLaner(player);
        break;
      case 'Support':
        changeSupport(player);
        break;
    }
  };
  return (
    <Screen color={Colors.teamScreen}>
      <View style={styles.imageCard}>
        <ImageBackground source={Images.map} style={styles.backgroundImage}>
          <View>
            <Text style={styles.textTittle}>Escolha Seus Jogadores </Text>
          </View>
          <View style={styles.selectedView}>
            {lane === 'Top' || topLaner ? (
              <SelectedTop>
                {!topLaner ? (
                  <Icon name="question" size={35} color={Colors.gold} />
                ) : (
                  <Image
                    source={{uri: topLaner.image}}
                    style={styles.playerPhoto}
                  />
                )}
              </SelectedTop>
            ) : null}
            {lane === 'Jungle' || jungle ? (
              <SelectedJungle>
                {!jungle ? (
                  <Icon name="question" size={35} color={Colors.gold} />
                ) : (
                  <Image
                    source={{uri: jungle.image}}
                    style={styles.playerPhoto}
                  />
                )}
              </SelectedJungle>
            ) : null}
            {lane === 'Mid' || midLaner ? (
              <SelectedMid>
                {!midLaner ? (
                  <Icon name="question" size={35} color={Colors.gold} />
                ) : (
                  <Image
                    source={{uri: midLaner.image}}
                    style={styles.playerPhoto}
                  />
                )}
              </SelectedMid>
            ) : null}
            {lane === 'Bot' || botLaner ? (
              <SelectedBot>
                {!botLaner ? (
                  <Icon name="question" size={35} color={Colors.gold} />
                ) : (
                  <Image
                    source={{uri: botLaner.image}}
                    style={styles.playerPhoto}
                  />
                )}
              </SelectedBot>
            ) : null}
            {lane === 'Support' || support ? (
              <SelectedSupport>
                {!support ? (
                  <Icon name="question" size={35} color={Colors.gold} />
                ) : (
                  <Image
                    source={{uri: support.image}}
                    style={styles.playerPhoto}
                  />
                )}
              </SelectedSupport>
            ) : null}
          </View>
          <View style={styles.imageView}>
            <View style={styles.laneView}>
              <LaneIconButton
                lane={'Top'}
                imageSource={Images.topLaneIcon}
                onPress={changeLane}
                selected={lane === 'Top'}
              />
              <LaneIconButton
                lane={'Jungle'}
                imageSource={Images.jungleIcon}
                onPress={changeLane}
                selected={lane === 'Jungle'}
              />
              <LaneIconButton
                lane={'Mid'}
                imageSource={Images.midLaneIcon}
                onPress={changeLane}
                selected={lane === 'Mid'}
              />
              <LaneIconButton
                lane={'Bot'}
                imageSource={Images.botLaneIcon}
                onPress={changeLane}
                selected={lane === 'Bot'}
              />
              <LaneIconButton
                lane={'Support'}
                imageSource={Images.supportIcon}
                onPress={changeLane}
                selected={lane === 'Support'}
              />
            </View>
          </View>
        </ImageBackground>
        <PlayerList lane={lane} pickNewPlayer={pickNewPlayer} />
      </View>
    </Screen>
  );
};

export const styles = StyleSheet.create({
  textTittle: {
    color: Colors.white,
  },
  imageCard: {
    width: '100%',
    height: 500,
  },
  selectedView: {
    height: 370,
  },
  imageView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  laneView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerPhoto: {
    width: 60,
    height: 60,
    alignItems: 'center',
    resizeMode: 'cover',
  },
});

const SelectedTop = styled.View`
  background-color: ${Colors.teamScreen};
  border-radius: 35px;
  box-shadow: 2px 2px #888888;
  width: 60px;
  height: 60px;
  border: 2px solid;
  border-color: ${Colors.gold};
  position: absolute;
  left: 80px;
  top: 90px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SelectedJungle = styled.View`
  background-color: ${Colors.teamScreen};
  border-radius: 35px;
  box-shadow: 2px 2px #888888;
  width: 60px;
  height: 60px;
  border: 2px solid;
  border-color: ${Colors.gold};
  position: absolute;
  left: 110px;
  top: 170px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SelectedMid = styled.View`
  background-color: ${Colors.teamScreen};
  border-radius: 35px;
  box-shadow: 2px 2px #888888;
  width: 60px;
  height: 60px;
  border: 2px solid;
  border-color: ${Colors.gold};
  position: absolute;
  left: 180px;
  top: 180px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SelectedBot = styled.View`
  background-color: ${Colors.teamScreen};
  border-radius: 35px;
  box-shadow: 2px 2px #888888;
  width: 60px;
  height: 60px;
  border: 2px solid;
  border-color: ${Colors.gold};
  position: absolute;
  left: 270px;
  top: 250px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SelectedSupport = styled.View`
  background-color: ${Colors.teamScreen};
  border-radius: 35px;
  box-shadow: 2px 2px #888888;
  width: 60px;
  height: 60px;
  border: 2px solid;
  border-color: ${Colors.gold};
  position: absolute;
  left: 340px;
  top: 270px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
