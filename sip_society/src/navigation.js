'use strict'

import { StackNavigator } from 'react-navigation'

import EventList from 'src/components/event-list'
import EventDetail from 'src/components/event'

export const App = StackNavigator({
  Main: { screen: EventList },
  Event: { screen: EventDetail }
})

export default App
