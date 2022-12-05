import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class App extends Component{
  constructor(){
    super()
    this.state = {}
  }
  render(){
    return(
      <View style = {css.container}>
        <View style={css.result}></View>
        <View style={css.calculation}></View>
        <View style={css.buttons}>
          <View style={css.numbers}></View>
          <View style={css.operations}></View>
        </View>
        <View style={css.new}></View>
      </View>
    )
  }
}
const css = StyleSheet.create({
  container:{
    flex: 1
  },
  result:{
    flex:2,
    backgroundColor:'red'
  },
  calculation:{
    flex:2,
    backgroundColor:'green'
  },
  buttons:{
    flex:7, 
    flexDirection: 'row'
  },
  numbers:{
    flex:3,
    backgroundColor: 'yellow'
  },
  operations:{
    flex: 1,
    backgroundColor: 'black'
  },
  new:{
    flex:1,
    backgroundColor: "blue"
  }
});