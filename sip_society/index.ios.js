'use strict'

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import * as firebase from 'firebase'
import firebaseConfig from './firebase-config'

import EventList from 'src/components/event-list'

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default class SipSocietyIos extends Component {
  render() {
    return (
      <EventList/>
    )
  }
}

AppRegistry.registerComponent('sip_society_ios', () => SipSocietyIos)

// *** Views ***
// login/signup
// events
  // list
    // past & upcoming
  // detail
    // date, wines, who was there, where it was, what kind of wine
// wines
  // list (either all wines you've rated or all wines from all events you've attended)
  // detail
    // add/edit wine
      // who brought it
      // use api - only have 1 per kind in db
      // your rating
      // notes
// your profile
  // wines you've brought
  // admin
    // add new events & edit existing
