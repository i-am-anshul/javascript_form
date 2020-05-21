/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Colors,
  TouchableOpacity,
  Alert,
  Console,
} from 'react-native';

import {Form} from './Form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: [],
      name: [],
      email: [],
      phno: [],
      dob: [],
    };
    this._initState();
  }

  _initState = () => {
    this.state.number.push(1);
    this.state.name.push('');
    this.state.email.push('');
    this.state.phno.push('');
    this.state.dob.push('');

    //Alert.alert(""+ this.state.number + " "+ this.state.dob.length);
  };

  _addForm = () => {
    const numberOld = this.state.number;
    const nameOld = this.state.name;
    const emailOld = this.state.email;
    const dobOld = this.state.dob;
    const phnoOld = this.state.phno;

    numberOld.push(numberOld[numberOld.length - 1] + 1);
    nameOld.push('');
    emailOld.push('');
    dobOld.push('');
    phnoOld.push('');
    this.setState({
      number: numberOld,
      name: nameOld,
      email: emailOld,
      dob: dobOld,
      phno: phnoOld,
    });
    //Alert.alert("" + numberOld + " "+  nameOld.length);
  };

  renderForms = () => {
    const numberForms = this.state.number;
    return (
      <View style={styles.columnView}>
        {numberForms.map((element, index) => {
          return <Form onTextChange={this.updateState} index={index} />;
        })}
      </View>
    );
  };

  updateState = (id, field, value) => {
    switch (field) {
      case 'name':
        const nameOld = this.state.name;
        nameOld[id] = value;
        this.setState({name: nameOld});
        //Alert.alert('name ' + this.state.name[0] + this.state.name[1]);
        break;
      case 'email':
        const emailOld = this.state.email;
        emailOld[id] = value;
        this.setState({email: emailOld});
        // this.state.email = emailOld;
        //Alert.alert('email ' + this.state.name[0] + this.state.name[1]);
        break;
      case 'dob':
        const dobOld = this.state.dob;
        dobOld[id] = value;
        this.setState({dob: dobOld});
        // this.state.dob = dobOld;
        break;
      case 'phno':
        const phnoOld = this.state.phno;
        phnoOld[id] = value;
        this.setState({phno: phnoOld});
        // this.state.phno = phnoOld;
        break;
    }
  };

  _submitForm = () => {
    const submit = this.state.number;
    submit.map((element, index) => {
      Alert.alert(
        'name =' +
          this.state.name[index] +
          ' email =' +
          this.state.email[index] +
          ' dob =' +
          this.state.dob[index] +
          ' phone = ' +
          this.state.phno[index],
      );
    });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView>
            <View style={styles.parentView}>
              {this.renderForms()}
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this._addForm();
                }}>
                <Text>Add Form</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  this._submitForm();
                }}>
                <Text>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 20,
    margin: 20,
    backgroundColor: 'grey',
    alignSelf: 'center',
  },
  columnView: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
  },
  parentView: {
    flexDirection: 'column',
  },
});
