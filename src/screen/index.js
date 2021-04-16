import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const loginScreen = () => {
    // cho nay vi khi nhan vao text input cai keyboard no che mat phan duoi nen em dung tam scrollview
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.mainView}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.viewTitleLogin}>
            <Text style={styles.titleLogin}>Scopic</Text>
          </View>
          <View style={styles.fillLogin}>
            <Text style={styles.signIn}>Sign In</Text>
            <Text style={styles.titleEmail}>Email</Text>
            <TextInput
              style={styles.fillInput}
              placeholder="Enter your email here"
            />
            <Text style={styles.titlePassword}>Password</Text>
            <TextInput
              style={styles.fillInput}
              placeholder="Enter your password here"
            />
            <TouchableOpacity style={styles.buttonSignIn}>
              <Text style={styles.titleButtonSignIn}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.viewSignUp}>
            <Text style={styles.titleSignUp}>Sign up</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  viewTitleLogin: {
    width: '100%',
    marginTop: 80,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLogin: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#69696F',
  },
  fillLogin: {
    marginHorizontal: 40,
  },
  signIn: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  titleEmail: {
    fontSize: 16,
    marginBottom: 16,
  },
  titlePassword: {
    fontSize: 16,
    marginBottom: 16,
    marginTop: 30,
  },
  fillInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    paddingBottom: 18,
    fontSize: 18,
  },
  buttonSignIn: {
    backgroundColor: '#DB535B',
    padding: 20,
    borderRadius: 10,
    marginTop: 36,
    marginHorizontal: 10,
  },
  titleButtonSignIn: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewSignUp: {
    marginHorizontal: 40,
    marginTop: 70,
  },
  titleSignUp: {
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DB535B',
  },
});

export default loginScreen;
