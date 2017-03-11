'use strict'

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import * as firebase from 'firebase'
import firebaseConfig from './firebase-config'
import App from 'src/navigation'

const firebaseApp = firebase.initializeApp(firebaseConfig)

AppRegistry.registerComponent('sip_society_ios', () => App)

// *** Views ***
// login/signup
  // FB auth & email https://developers.facebook.com/docs/react-native/login
  // verify email address
  // forgot password
// events
  // list
    // past & upcoming
  // detail
    // date, wines, who was there, where it was, what kind of wine, comments
// wines
  // list (either all wines you've rated or all wines from all events you've attended)
  // detail
    // add/edit wine
      // who brought it
      // which event
      // use api - only have 1 per kind in db
      // your rating
      // notes
// your profile
  // wines you've brought
  // admin
    // add new events & edit existing
  // email address
