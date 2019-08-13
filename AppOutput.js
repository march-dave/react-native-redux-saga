import React from 'react'
import { Component } from 'react'
import { TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native'

import { connect } from 'react-redux';


// 아래 state 는 어디서 연결 되어 있냐면? connect(mapStateToProps, null)(AppOutput); 통해서 리덕스 state 와 연결이 되어 있다.
// 좀더 자세히 말해 state는 리덕스 state를 통해  ==> Provider 의 store 를 통해 ==> 전역 state 에 연결 되어 있다.
// 내가 따로 subscribe를 하지 아니 했더라도 connect 를 통해 subscribe 가 되어 있다는 얘기

// selecter 좀 연구 해보자.
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

