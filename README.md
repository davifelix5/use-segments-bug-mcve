# Bug report on the useSegments hook

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npm run ios
   ```

   or

   ```bash
    npm run android
   ```

## Step-by-step setup

- Start an app with expo router set up.

- Create tow groups: one for authenticated users (`(authorized)`) and other for non-authenticated users (`(login)`).

- Set up a `Stack` navigator in the `(login)`.

- Set up a `Tab` navigator in the `(authorized)` group. 

- Set up a `Stack` navigator on each tab of the `Tab` navigator.

## Describing the bug

**Bug behavior**: When navigating back to the `(login)` group's `index.tsx` page from inside one of the stacks in the tab navigator, the `useSegments` hook is triggered twice, whereas the `usePathname` hook is triggered only once.

**Expected behavior**: To my understanding of the [documentation](https://docs.expo.dev/router/reference/hooks/#usepathname), the hooks should have the same behavior, apart form the `usePathname` returning the normalized route instead of the array of un-normalized segments like the `useSegments` hook.

**Use case**: I need the `useSegments` hook working [like the `usePathname`](https://docs.expo.dev/router/reference/screen-tracking/) so I can know whether a route has `url` params in order to build a custom screen name to the path for analytics tracking.

## How to reproduce

- Run the app.
- Press the `Sign in` link.
- Navigate to the `Account tab`.
- Press the `Log out` button and see the effect with `segments` dependency running two `console.log`'s for the same route.


> Notice that, when pressing the `Log out (to login-page2)` button, the bug does not happen, neither when navigating **to** an `index` of a stack inside the tab navigator -- which is the case when the `Sign in` button is pressed. That seems to indicate that the problem is related to navigating **back** to `index` pages from stacks nested into tab navigators.
