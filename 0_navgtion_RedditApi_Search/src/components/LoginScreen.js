import React, { PropTypes,Component } from 'react';
import {  StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged , passwordChanged ,loginUser} from '../actions/index';
import {Card,CardSection,Input,Button,Spinner} from './common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   button:{
       alignSelf: 'stretch',
       flex:1,
       width:200
   }
});


class LoginScreen extends Component{

    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const {email ,password} = this.props;
        this.props.loginUser({email , password});
    }

    renderButton(){
        const {navigation} = this.props;

        return(
            <Button
                style={styles.button}
                onPress={() => navigation.dispatch({ type: 'Login' })}
                >
                Login
            </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="example@something.com"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="pass"
                        placeholder="password"
                    />
                </CardSection>
                <CardSection>
                      {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}




LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

const  mapStateToProps = state => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        error : state.auth.error,
        loading: state.auth.loading,
    };
};

export default connect (mapStateToProps,{emailChanged ,passwordChanged ,loginUser}) (LoginScreen);
