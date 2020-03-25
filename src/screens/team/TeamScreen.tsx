import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Screen} from '../../components/Screen';
import {Images} from '../../constants/Images';
import {Card} from '../../components/Card';
import {Colors} from '../../constants/Colors';
import styled from 'styled-components/native';
import {LaneIconButton} from '../../components/LaneIconButton';

export const TeamScreen = () => {
  const [lane, changeLane] = React.useState('');
  return (
    <Screen color={Colors.black}>
      <View style={styles.imageCard}>
        <ImageBackground source={Images.map} style={styles.backgroundImage}>
          <View style={styles.imageView}>
            <View style={styles.laneView}>
              <LaneIconButton
                lane={'Top'}
                imageSource={Images.topLaneIcon}
                onPress={changeLane}
              />
              <LaneIconButton
                lane={'Jungle'}
                imageSource={Images.jungleIcon}
                onPress={changeLane}
              />
              <LaneIconButton
                lane={'Mid'}
                imageSource={Images.midLaneIcon}
                onPress={changeLane}
              />
              <LaneIconButton
                lane={'Bot'}
                imageSource={Images.botLaneIcon}
                onPress={changeLane}
              />
              <LaneIconButton
                lane={'Support'}
                imageSource={Images.supportIcon}
                onPress={changeLane}
              />
            </View>
          </View>
        </ImageBackground>
        <Card subtitle="Escolha" title={`Seu ${lane}`}>
          <Text>TESTE</Text>
        </Card>
      </View>
    </Screen>
  );
};

export const styles = StyleSheet.create({
  imageCard: {
    width: '100%',
    height: 500,
  },
  imageView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  laneView: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
