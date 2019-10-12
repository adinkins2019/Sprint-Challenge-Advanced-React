import React from 'react'
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import PlayerCard from './PlayerCard'

it('displays a Card successfully', () => {
    const player = { name: 'Anfernee Hardaway', country: 'United States', searches: 50}
    const wrapper = rtl.render(<PlayerCard name={player.name} country={player.country} searches={player.searches} /> )
})