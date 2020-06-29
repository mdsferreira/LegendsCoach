import React, {Component} from 'react';

import {Text, Dimensions} from 'react-native';
import {Screen} from '../../components/Screen';
import {Card, CardContainer} from '../../components/Card';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

class HomeScreen extends Component {
  // constructor(props) {
  //   this.props = props;
  // }
  render() {
    const {user} = this.props;
    return (
      <Screen>
        <ScrollView>
          <Card subtitle="Fim de " title="Temporada" />
          <CardContainer width={Dimensions.get('window').width - 50}>
            <Text style={{color: 'white'}}>{user ? user.email : '-----'}</Text>
          </CardContainer>
        </ScrollView>
      </Screen>
    );
  }
}
function mapStateToProps(state) {
  return {user: state.user};
}
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
