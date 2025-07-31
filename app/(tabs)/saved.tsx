import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import MovieCard from '@/components/MovieCard'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { getTrendingMovies } from '@/services/appwrite'
import useFetch from '@/services/useFetch'

const Saved = () => {
  const router = useRouter()
  const [filter, setFilter] = useState<'all' | 'recent' | 'favorites'>('all')

  // For now using trending movies as saved movies placeholder
  // Replace this with actual saved movies from your database
  const {
    data: savedMoviesData = [],
    loading,
    error,
    refetch
  } = useFetch(getTrendingMovies)

  const savedMovies = savedMoviesData || []

  const handleClearAll = () => {
    Alert.alert(
      "Clear All Saved Movies",
      "Are you sure you want to remove all saved movies?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Clear All", 
          style: "destructive", 
          onPress: () => {
            // Add clear all logic here
            console.log("Clearing all saved movies")
          }
        }
      ]
    )
  }

  const FilterButton = ({ 
    title, 
    isActive, 
    onPress 
  }: { 
    title: string
    isActive: boolean
    onPress: () => void 
  }) => (
    <TouchableOpacity
      className={`px-4 py-2 rounded-full mr-3 ${
        isActive ? 'bg-accent' : 'bg-gray-800/50'
      }`}
      onPress={onPress}
    >
      <Text className={`text-sm font-medium ${
        isActive ? 'text-white' : 'text-gray-400'
      }`}>
        {title}
      </Text>
    </TouchableOpacity>
  )

  const EmptyState = () => (
    <View className="flex-1 justify-center items-center px-5">
      <Image source={icons.save} className="w-16 h-16 opacity-30 mb-4" />
      <Text className="text-white text-xl font-bold mb-2">No Saved Movies</Text>
      <Text className="text-gray-400 text-center mb-6">
        Start exploring and save your favorite movies to watch later
      </Text>
      <TouchableOpacity 
        className="bg-accent px-6 py-3 rounded-full"
        onPress={() => router.push('/search')}
      >
        <Text className="text-white font-medium">Discover Movies</Text>
      </TouchableOpacity>
    </View>
  )

  const renderSavedMovie = ({ item, index }: { item: any, index: number }) => {
    // Convert trending movie format to movie format for MovieCard
    const movieData: Movie = {
      id: item.movie_id,
      title: item.title,
      poster_path: item.poster_url ? item.poster_url.replace('https://image.tmdb.org/t/p/w500', '') : '',
      vote_average: 8.5,
      release_date: '2024',
      adult: false,
      backdrop_path: '',
      genre_ids: [],
      original_language: 'en',
      original_title: item.title,
      overview: '',
      popularity: 0,
      video: false,
      vote_count: 100
    }

    return <MovieCard {...movieData} />
  }

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full h-full z-0"
        resizeMode="cover"
      />

      <View className="flex-1 px-5">
        {/* Header */}
        <View className="flex-row justify-between items-center mt-20 mb-6">
          <View className="flex-row items-center">
            <Image source={icons.save} className="w-8 h-8 mr-3" />
            <Text className="text-white text-2xl font-bold">Saved Movies</Text>
          </View>
          
          {savedMovies.length > 0 && (
            <TouchableOpacity onPress={handleClearAll}>
              <Text className="text-red-500 font-medium">Clear All</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Filter Tabs */}
        {savedMovies.length > 0 && (
          <View className="mb-6">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={[
                { key: 'all', title: 'All' },
                { key: 'recent', title: 'Recent' },
                { key: 'favorites', title: 'Favorites' }
              ]}
              renderItem={({ item }) => (
                <FilterButton
                  title={item.title}
                  isActive={filter === item.key}
                  onPress={() => setFilter(item.key as any)}
                />
              )}
              keyExtractor={(item) => item.key}
            />
          </View>
        )}

        {/* Movies Count */}
        {savedMovies.length > 0 && (
          <Text className="text-gray-400 text-sm mb-4">
            {savedMovies.length} {savedMovies.length === 1 ? 'movie' : 'movies'} saved
          </Text>
        )}

        {/* Content */}
        {loading ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#0000ff" />
            <Text className="text-white mt-3">Loading saved movies...</Text>
          </View>
        ) : error ? (
          <View className="flex-1 justify-center items-center">
            <Text className="text-red-500 text-center mb-4">
              Error loading saved movies: {error}
            </Text>
            <TouchableOpacity
              className="bg-accent px-6 py-3 rounded-full"
              onPress={refetch}
            >
              <Text className="text-white font-medium">Retry</Text>
            </TouchableOpacity>
          </View>
        ) : savedMovies.length === 0 ? (
          <EmptyState />
        ) : (
          <FlatList
            data={savedMovies}
            renderItem={renderSavedMovie}
            keyExtractor={(item, index) => `saved-${item.movie_id}-${index}`}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 15
            }}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  )
}

export default Saved