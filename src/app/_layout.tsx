import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import { PostHogErrorBoundary, PostHogProvider } from 'posthog-react-native'

import { posthog } from '../config/posthog'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
    throw new Error('Add your Clerk Publishable Key to the .env file')
}

function RootErrorFallback({ resetError }: { resetError: () => void }) {
    return (
        <View>
            <Text>Something went wrong. Please try again.</Text>
            <Pressable onPress={resetError}>
                <Text>Try again</Text>
            </Pressable>
        </View>
    )
}

export default function RootLayout() {

    const [fontLoaded] = useFonts({
        'sans-regular': require('@/assets/fonts/PlusJakartaSans-Regular.ttf'),
        'sans-bold': require('@/assets/fonts/PlusJakartaSans-Bold.ttf'),
        'sans-medium': require('@/assets/fonts/PlusJakartaSans-Medium.ttf'),
        'sans-semibold': require('@/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
        'sans-extrabold': require('@/assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
        'sans-light': require('@/assets/fonts/PlusJakartaSans-Light.ttf')
    });

    useEffect(() => {
        if(fontLoaded)
            SplashScreen.hideAsync();

    }, [fontLoaded])

    if(!fontLoaded) return null;


    const app = (
        <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
            <Stack screenOptions={{headerShown: false}}></Stack>
        </ClerkProvider>
    )

    return posthog ? (
        <PostHogProvider client={posthog}>
            <PostHogErrorBoundary fallback={RootErrorFallback}>
                {app}
            </PostHogErrorBoundary>
        </PostHogProvider>
    ) : app
}