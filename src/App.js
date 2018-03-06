// @flow
import React, { Component } from 'react';
import {View} from 'react-native-web';

// see https://github.com/necolas/react-native-web

type V={
    name:String
}

class MyComponent extends Component<{name:string,age:number}>{
    render(){
        return <h1>Hi {this.props.name} you are {this.props.age} years old</h1>
    }
}

class App extends Component<{},{}> {
    render() {
        return (
            <View onBlur={2}>
                <View dadz={""}></View>
            </View>
        );
    }
}

/*
*
*
*  {[0,1,2,3,4,5,6,7,8,9,10].map(i=>{
                    return <View style={styles.groupOrderListItem} blable={"hello"}  >
                        <Text>Achat groupé couche</Text>
                        <Text>Organisé par Joséphine</Text>
                        <Text>Commandes avant 10/02/2018</Text>
                        <TextInput></TextInput>
                        <View style={styles.listItemSeparator}/>

                    </View>
                })}

const styles=StyleSheet.create({
    groupOrderListItem:{
        padding:10
    },
    listItemSeparator:{
        backgroundColor:'black', height:1
    }
});
*/

/*<View style={styles.app}>
                <View style={styles.header}>
                    <Image accessibilityLabel="React logo" source={logo} resizeMode="contain" style={styles.logo} />
                    <Text style={styles.title}>Welcome to React</Text>
                </View>
                <Text style={styles.intro}>
                    To get started, edit <Text style={styles.code}>src/App/index.js</Text> and save to reload.
                </Text>
                <Button title={"Hello"}></Button>
            </View>

const styles = StyleSheet.create({
    logo: {
        height: 80
    },
    header: {
        backgroundColor: '#222',
        padding: 20
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        marginVertical: '1em',
        textAlign: 'center'
    },
    intro: {
        fontSize: '1.125rem',
        marginVertical: '1em',
        textAlign: 'center'
    },
    code: {
        fontFamily: 'monospace, monospace'
    }
});
*/

export default App;