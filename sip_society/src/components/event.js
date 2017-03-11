'use strict'

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import moment from 'moment'

import styles from 'src/styles/styles'

const demoData = {
  date: '2017-01-29',
  location: 'Golden Gate Park',
  wine_type: 'Pinot Noir'
}

export default class EventDetail extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.event}`
  }

  componentDidMount() {
    // fetch event
  }

  render() {
    const date = moment(demoData.date).format('MMMM DD, YYYY')

    return (
      <View style={styles.container}>
        <Text>
          {date} at {demoData.location}
        </Text>
        <Text>{demoData.wine_type}</Text>
        <Text>Who Was There</Text>
        <Text>Wines We Tried</Text>
        <Text>Comments</Text>
      </View>
    )
  }
}
