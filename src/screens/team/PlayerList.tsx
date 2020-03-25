import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const datalist = [
  {
    id: 1,
    name: 'jose',
    nickName: 'nickName',
    lastName: 'Pinto',
    team: 'Pain Game',
    image: 'https://avatars0.githubusercontent.com/u/15197050?s=460&v=4',
    price: '13,23',
  },
  {
    id: 2,
    name: 'Whesley',
    lastName: 'Holler',
    nickName: 'Leko',
    team: 'Pain Game',
    image:
      'http://news.wellplayed.com.br/wp-content/uploads/2015/08/leko-2ixjzpf8-810x300.png',
    price: '3,23',
  },
  {
    id: 3,
    name: 'jose',
    team: 'Pain Game',
    image: 'https://avatars0.githubusercontent.com/u/15197050?s=460&v=4',
    price: '13,23',
  },
  {
    id: 4,
    name: 'jose',
    team: 'Pain Game',
    image: 'https://avatars0.githubusercontent.com/u/15197050?s=460&v=4',
    price: '13,23',
  },
];

export const PlayerList = ({lane, pickNewPlayer}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Container>
        <FlatList
          data={datalist}
          renderItem={({item}) => (
            <Player player={item} onPress={pickNewPlayer} />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Separator />}
        />
      </Container>
    </SafeAreaView>
  );
};

const Player = ({player, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(player);
      }}>
      <View style={styles.container}>
        <Image source={{uri: player.image}} style={styles.playerPhoto} />
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>
            {player.name}{' '}
            <Text style={styles.playerNickName}>"{player.nickName}"</Text>{' '}
            {player.lastName}
          </Text>
          <Text style={styles.playerTeam}>{player.team}</Text>
        </View>
        <View style={styles.playerPrice}>
          <Text style={styles.playerPriceText}>{player.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Container = styled.View`
  background-color: ${Colors.backgroundScreen};
  margin: 20px;
  width: 90%;
  height: 300px;
  border-radius: 20;
  border-color: ${Colors.lightGray};
  margin-left: 25;
  margin-right: 25;
  margin-top: 20;
  /* z-index: 99; */
  position: relative;
  top: -50px;
`;

export const Separator = styled.View`
  background-color: ${Colors.inputGrey};
  /* margin: 20px; */
  width: 100%;
  height: 5px;
  border-radius: 5;
`;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 20,
  },
  playerPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  playerInfo: {
    height: 50,
    width: 250,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    // borderColor: '#000000',
    // borderWidth: 2,
    paddingHorizontal: 20,
  },
  playerName: {
    fontSize: 14,
    color: Colors.lightGray,
    fontFamily: 'verdana',
  },
  playerNickName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  playerTeam: {
    fontSize: 12,
    color: Colors.lightGray,
    fontFamily: 'verdana',
  },
  playerPrice: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerPriceText: {
    fontSize: 18,
    color: Colors.success,
    fontWeight: 'bold',
  },
});
