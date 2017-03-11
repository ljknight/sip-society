'use strict'

import { StackNavigator, TabNavigator } from 'react-navigation'

import EventList from 'src/components/event-list'
import EventDetail from 'src/components/event'
import WineList from 'src/components/wine-list'
import Wine from 'src/components/wine'

const EventNavigator = StackNavigator({
  Main: { screen: EventList },
  Event: { screen: EventDetail }
})

const WineNavigator = StackNavigator({
  Main: { screen: WineList },
  Wine: { screen: Wine }
})

EventNavigator.navigationOptions = {
  tabBar: {
    label: 'Events'
  }
}

WineNavigator.navigationOptions = {
  tabBar: {
    label: 'Wines'
  }
}

export const App = TabNavigator({
  Events: { screen: EventNavigator },
  Wines: { screen: WineNavigator }
}, {
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true
})

export default App
