import { View, Text } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const NotFoundScreen = () => {
  return (
    <>
        <Stack.Screen options={{
            title: 'Ooops! Page Not Found'
        }} />
        <View className='flex-auto justify-center items-center'>
            <Link href='/' className='underline'>Go back to home</Link>
        </View>
    </>
  )
}

export default NotFoundScreen