import React , { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity, View , Image } from 'react-native';
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants';

type Props = {}

const Onboarding = (props: Props) => {

  const swipeRef = useRef<Swiper>(null)
  const [acyiveIndex , setActiveIndex] = useState(0);
  return (
    <>
    <SafeAreaView className='flex h-full items-center justify-between bg-white'>
       <TouchableOpacity onPress={() => {
        router.replace('/(auth)/sign-up')
       }}
       className='w-full flex justify-end items-end p-5'
       >
        <Text className='text-black text-md font-JakartaBold'>Skip</Text>
       </TouchableOpacity>
       <Swiper ref={swipeRef}
       loop={false}
       dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0]' />}
       activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF]' />}
       onIndexChanged={(index) =>setActiveIndex(index)}
       >
        {onboarding.map((item)=>(
          <View key={item?.id} className='flex items-center justify-center'>
            <Image source={item.image} className='w-full h-[300px]' resizeMode='contain' />
          <View className='text-black text-3xl font-bold mt-10 text-center'>
           <Text className='text-black text-3xl font-bold mx-10 text-center'>{item.title}</Text>
          </View>
          <Text className='text-md font-JakartaExtraBold text-center text-[#858585] mx-10 mt-3'>{item.description}</Text>
            </View>
        ))}
       </Swiper>
    </SafeAreaView>
    </>
  )
}

export default Onboarding;