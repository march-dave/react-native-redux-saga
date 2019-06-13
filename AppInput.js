import React from 'react'
import { Component } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, TextInput, FlatList } from 'react-native'
import ContactActionCreator from './Action';
import { connect } from 'react-redux';
import fetchCall from "./fetchCall";

const mapDispatchToProps = dispatch => {
    return {
        setData: text => dispatch(ContactActionCreator.changeName(text))
    }
}

class AppInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'user name'
        }
    }

    handleChange = (text) => {
        this.props.setData(text);
    }

    render() {
        return (
            <View>
                <View style={{ width: 300, height: 50 }}>
                    <TextInput onChangeText={this.handleChange} value={this.state.text} />
                </View>
            </View>
        )
    }
}

AppInput = connect(null, mapDispatchToProps)(AppInput);
export default AppInput

