import { useRouter } from 'expo-router'
import React from 'react'
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { icons } from '@/constants/icons'
import { images } from '@/constants/images'

const Profile = () => {
  const router = useRouter()

  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "Profile editing feature coming soon!")
  }

  const handleSettings = () => {
    Alert.alert("Settings", "Settings feature coming soon!")
  }

  const handleLogout = () => {
    Alert.alert(
      "Logout", 
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Logout", style: "destructive", onPress: () => {
          // Add logout logic here
          console.log("User logged out")
        }}
      ]
    )
  }

  const ProfileOption = ({ icon, title, onPress, showArrow = true }: {
    icon: any
    title: string
    onPress: () => void
    showArrow?: boolean
  }) => (
    <TouchableOpacity 
      className="flex-row items-center justify-between py-4 px-5 bg-gray-800/50 rounded-lg mb-3"
      onPress={onPress}
    >
      <View className="flex-row items-center">
        <Image source={icon} className="w-6 h-6 mr-3" />
        <Text className="text-white text-base font-medium">{title}</Text>
      </View>
      {showArrow && (
        <Image source={icons.arrow} className="w-4 h-4 opacity-60" />
      )}
    </TouchableOpacity>
  )

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full h-full z-0"
        resizeMode="cover"
      />
      
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row justify-center items-center mt-20 mb-8">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>

        {/* User Profile Section */}
        <View className="items-center mb-8">
          <View className="w-24 h-24 bg-gray-700 rounded-full items-center justify-center mb-4">
            <Image source={icons.person} className="w-12 h-12" />
          </View>
          
          <Text className="text-white text-xl font-bold mb-1">Movie Lover</Text>
          <Text className="text-gray-400 text-sm">movie.lover@email.com</Text>
          
          <TouchableOpacity 
            className="mt-4 px-6 py-2 bg-accent rounded-full"
            onPress={handleEditProfile}
          >
            <Text className="text-white font-medium">Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Stats Section */}
        <View className="flex-row justify-around bg-gray-800/30 rounded-lg py-6 mb-8">
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">42</Text>
            <Text className="text-gray-400 text-sm">Movies Saved</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">128</Text>
            <Text className="text-gray-400 text-sm">Movies Watched</Text>
          </View>
          <View className="items-center">
            <Text className="text-white text-2xl font-bold">15</Text>
            <Text className="text-gray-400 text-sm">Reviews</Text>
          </View>
        </View>

        {/* Menu Options */}
        <View className="mb-8">
          <ProfileOption 
            icon={icons.save}
            title="Saved Movies"
            onPress={() => router.push('/saved')}
          />
          
          <ProfileOption 
            icon={icons.star}
            title="My Reviews"
            onPress={() => Alert.alert("Reviews", "Reviews feature coming soon!")}
          />
          
          <ProfileOption 
            icon={icons.search}
            title="Search History"
            onPress={() => Alert.alert("Search History", "Search history feature coming soon!")}
          />
          
          <ProfileOption 
            icon={icons.person}
            title="Account Settings"
            onPress={handleSettings}
          />
          
          <ProfileOption 
            icon={icons.arrow}
            title="About App"
            onPress={() => Alert.alert("About", "Movie App v1.0\nBuilt with React Native & Expo")}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          className="bg-red-500/20 border border-red-500 rounded-lg py-4 items-center mb-10"
          onPress={handleLogout}
        >
          <Text className="text-red-500 font-medium text-base">Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Profile