'use strict'

import React, { Component } from 'react'
import { Text, View, ListView, Button, TouchableHighlight } from 'react-native'
import moment from 'moment'

import styles from 'src/styles/styles'

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

const demoData = [{
  id: '1',
  name: 'Winey Wine',
  type: 'Pinot Noir'
}, {
  id: '2',
  name: 'Pretty Good Wine',
  type: 'Syrah'
}, {
  id: '3',
  name: 'Wino Wino',
  type: 'Pinot Grigio'
}]

const WineListItem = ({ wine, navigate }) => (
  <TouchableHighlight onPress={() => navigate('Wine', { wine: wine.name })}>
    <View style={styles.container}>
      <Text style={styles.welcome}>
        {wine.name}
      </Text>
      <Text style={styles.instructions}>
        {wine.type}
      </Text>
    </View>
  </TouchableHighlight>
)

export default class WineList extends Component {
  state = {
    dataSource: ds.cloneWithRows(demoData)
  }

  componentDidMount() {
    // fetch wines
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <WineListItem wine={rowData} navigate={navigate}/>}
        />
      </View>
    )
  }
}
