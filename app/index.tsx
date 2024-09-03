import { Redirect } from 'expo-router'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return <Redirect href="/(auth)/welcome" />
}

export default Home;