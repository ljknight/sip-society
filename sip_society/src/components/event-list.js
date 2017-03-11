'use strict'

import React, { Component } from 'react'
import { Text, View, ListView } from 'react-native'
import moment from 'moment'

import styles from 'src/styles/styles'

const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId]
const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`]
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
  getSectionData,
  getRowData,
})

const demoData = [{
  date: '2017-01-29',
  location: 'Golden Gate Park',
  wine_type: 'Pinot Noir'
}, {
  date: '2017-02-04',
  location: 'Dolores Park',
  wine_type: 'Syrah'
}, {
  date: '2017-05-18',
  location: 'Alamo Square',
  wine_type: 'Pinot Grigio'
}]

const Header = () => (
  <View style={styles.container}>
    <Text>Events</Text>
  </View>
)

const SectionHeader = props => (
  <View style={styles.container}>
    <Text style={styles.welcome}>{props.text}</Text>
  </View>
)

const EventListItem = ({ event }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      {event.wine_type}
    </Text>
    <Text style={styles.instructions}>
      {moment(event.date).format('dddd, MMMM Do YYYY')} at {event.location}
    </Text>
  </View>
)

export default class EventList extends Component {
  constructor(props) {
    super(props)
    const { dataBlob, sectionIds, rowIds } = this.formatSections(demoData)

    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
    }
  }

  componentDidMount() {
    // fetch events
  }

  formatSections = events => {
    const dataBlob = {}
    const sectionIds = []
    const rowIds = []
    let sectionId

    const pastEvents = events.filter(event => moment().diff(moment(event.date)) > 0)
    const futureEvents = events.filter(event => moment().diff(moment(event.date)) < 0)

    if (pastEvents.length) {
      sectionId = 0
      sectionIds.push(sectionId)
      rowIds.push([])
      dataBlob[sectionId] = { text: 'Past Events' }

      pastEvents.forEach((event, index) => {
        const rowId = `${sectionId}:${index}`
        rowIds[rowIds.length - 1].push(rowId)
        dataBlob[rowId] = pastEvents[index]
      })
    }

    if (futureEvents.length) {
      sectionId = 1
      sectionIds.push(sectionId)
      rowIds.push([])
      dataBlob[sectionId] = { text: 'Future Events' }

      futureEvents.forEach((event, index) => {
        const rowId = `${sectionId}:${index}`
        rowIds[rowIds.length - 1].push(rowId)
        dataBlob[rowId] = futureEvents[index]
      })
    }

    return { dataBlob, sectionIds, rowIds }
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <EventListItem event={rowData}/>}
          renderHeader={() => <Header/>}
          renderSectionHeader={(sectionData) => <SectionHeader {...sectionData}/>}
        />
      </View>
    )
  }
}
