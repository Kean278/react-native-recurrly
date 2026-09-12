import Constants from 'expo-constants'
import PostHog from 'posthog-react-native'

type PostHogExtra = {
  posthogProjectToken?: string
  posthogHost?: string
}

const extra = Constants.expoConfig?.extra as PostHogExtra | undefined
const projectToken = extra?.posthogProjectToken
const host = extra?.posthogHost

if (__DEV__ && !projectToken) {
  throw new Error(
    'POSTHOG_PROJECT_TOKEN variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once POSTHOG_PROJECT_TOKEN is configured',
  )
}

if (__DEV__ && !host) {
  throw new Error(
    'POSTHOG_HOST variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once POSTHOG_HOST is configured',
  )
}

const isPostHogConfigured = Boolean(projectToken && host)

export const posthog = isPostHogConfigured
  ? new PostHog(projectToken!, {
      host: host!,
      captureAppLifecycleEvents: true,
    })
  : undefined
