import React from 'react'
import { Component } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux';
import fetchCall from "./fetchCall";

const mapStateToProps = state => {
    return {
        getpage: state.pages
    }
}

class AppOutput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pages: []
        }
    }

    renderItem({ item, index }) {
        return (
            <TouchableOpacity>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        backgroundColor: item.backgroundColor
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            paddingLeft: 10,
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "stretch"
                        }}
                    >
                        <Text>
                            {item.first_name} {item.last_name}
                        </Text>
                        <Text>{item.email}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View>

                <View>
                    <Text>Output: {JSON.stringify(this.props.getpage)}</Text>
                </View>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 250, height: 250, backgroundColor: 'skyblue' }} >
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.pages}
                        renderItem={this.renderItem}
                        horizontal={false}
                    />
                </View>
            </View>
        )
    }
}

AppOutput = connect(mapStateToProps, null)(AppOutput);
export default AppOutput;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    list: {
        justifyContent: "center"
    }
});

