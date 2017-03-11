'use strict'

import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from 'src/styles/styles'

const demoData = {
  id: '3',
  name: 'Wino Wino',
  type: 'Pinot Grigio'
}

export default class WineDetail extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.wine}`
  }

  componentDidMount() {
    // fetch wine
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {demoData.name}
        </Text>
        <Text>{demoData.type}</Text>
        <Text>api image</Text>
        <Text>Event Data: who brought it, where/when</Text>
        <Text>Your rating</Text>
        <Text>Notes</Text>
      </View>
    )
  }
}
