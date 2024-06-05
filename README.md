# Little Lemon Restaurant
- Code from React Native course in Coursera (created by Meta)
- Probably published on November 2022
- 5 modules, 38 hours 
- https://www.coursera.org/learn/react-native-course

## Module 1
- Open-sourced in 2015, developed by Meta
- RN can also be used to create Windows apps and TV apps
- Hybrid apps: 
  - e.g. Apache Cordova
  - hybrid apps do not have access to built-in native features of the mobile device.
  - Hybrid apps render the graphic elements via a browser, which takes several steps to start showing the components on the screen. These are essentially web views.
- Cross-platform apps: e.g. React Native
- Native mobile components, e.g. `Text` and `View`
- Interview to Eric Hartzog
- Expo Go quickstart vs RN CLI quickstart
- React Native with Expo
  - You need Node, an emulator and an IDE
  - With Expo you can compile into iOS. But you can not run an emulator.
  - `npx create-expo-app SampleProject`
- https://guides.cocoapods.org/using/getting-started.html


### Introduction to React Native
- https://snack.expo.dev/
- Debugging React Native apps is simple since you are essentially debugging JavaScript code.  You can use the Chrome developer tools to debug the JavaScript code. In addition, you can use the React Developer tools to debug the React Component hierarchy.
- The JavaScript code is bundled into a single file, which is then loaded by the native code. The native code is compiled into a binary that is then installed on the device.
- **Over-the-Air Updates**
  - The next feature, which is another big time-saver, is over-the-air updates. In traditional native apps, both iOS and Android, the release process can be tedious and getting approval from the app store can take several days. With React Native, you may be able to avoid this wait, depending on your changes. 
  - **App Center’s Code Push** is a cloud service that enables React Native developers to deploy mobile app updates directly to the users’ devices. It acts as a central repository to which developers can publish updates, and those apps can query for updates. This means **small features or bug fixes can be made available to users immediately**, without redistribution through the respective app stores. 
  - Features like **Over the Air (OTA)** updates make the React Native developer experience seamless.
- **Expo**
  - https://expo.dev/
  - It adds a layer of abstraction on top of RN
  - Open source
  - It comes with several built-in APIs
  - It comes with **OTA**
  - **Limitations**
    - Not optimized for custom modules: with Expo you won't have access to the native iOS or Android code
    - Limited API support, it does not support all the iOS and Android APIs
    - Not lean: it comes with several packages and libraries that you might not use.
      - Large app sizes
  - You can **eject your app from Expo** if eventually you find their limitations a real issue.
    - You might have to refactor some code
  - It is highly recommended.
  - Avoid pain points, fastest way to develop in RN
  - [Continuous Native Generation](https://docs.expo.dev/workflow/continuous-native-generation/) (CNG) is an abstract concept that defines the generation of native code from several inputs, typically the fusion of a code template and configuration. The result is a native project that can be compiled into a native app. It is a process used by Expo Prebuild to generate native projects for React Native apps
  - Before a native app can be compiled, the native source code must be generated. Expo CLI provides a unique and powerful system called [**prebuild**](https://docs.expo.dev/workflow/prebuild/), which generates the native code for your project based on four factors.
  - **Expo Config Plugins** are a way to customize the native code for your project during the prebuilding process.
    - They provide a way to add custom native code and manage native dependencies for your project.
    - https://docs.expo.dev/config-plugins/introduction/
    - A config plugin can be used to automatically configure your native project for a module and reduce the complexity by avoiding interaction with the native project.
  - [Expo Application Services](https://expo.dev/eas)
    - Deeply integrated cloud services for Expo and RN apps
    - EAS Build is a hosted service for building app binaries for your Expo and React Native projects.
    - Very recommended
    - Other options: Expo Prebuild (to generate the native code of our Expo apps) + Fastlane (to compile and submit to the stores)
    - [Continuous Integration and Deployment for React Native Apps: Streamlining Development Workflow 🚀🔄](https://dev.to/medaimane/continuous-integration-and-deployment-for-react-native-apps-streamlining-development-workflow-4i04)


### React Native Components
- Types of components:
  - **Core components**
    - View, Text, Image, TextInput, ScrollView
    - They translate into native iOS/Android components
  - **Custom Components**: some components are reusable, like headers, footers, menu bars and images. 
  - **Community components**
    - React Navigation
    - React Native Screens, Maps, Video, etc.
    - [Community-contributed React Components](https://reactnative.directory/)
  - **Your native components**
    - Build custom iOS or Android components based on your application's unique needs
    - Written in native code (e.g. Swift, Kotlin)

### Views, Text and Scrollable components
- **View**: 
  - basic building block of the user interface.
  - it can be nested in other Views
- **Text**
  - basic core components to display text
  - any text MUST be wrapped in a `Text` component
  - properties
    - `style`
    - `numberOfLines`
- `flex: 1` means that the entire mobile screen will be taken by this view (e.f. for the parent view of the root component).
- **`ScrollView`**
  - All the parent views must have a height or `flex: 1`,
  - `horizontal={true}`
  - `indicatorStyle={'white'}`

### Styling components using StyleSheet
- Separate the component code from the style code
- `const styles = StyleSheet.create({ ... })`

### Process
- https://reactnative.dev/docs/libraries
- React Native uses CocoaPods to manage iOS project dependencies and most React Native libraries follow this same convention.
  - `npx pod-install` (from root folder, no need to go to `ios` folder; it's the same as `cd ios && pod install`)
  - `yarn ios` (re-build the app binary to start using your new library)
- React Native uses Gradle to manage Android project dependencies. After you install a library with native dependencies, you will need to re-build the app binary to use your new library:
  - `yarn android`


## Module 2
### Render large lists with FlatList
- TBD

### Render large lists with FlatList
-TBD

### Accept user input
-TBD

### Working with TextInput components
-TBD


## Module 3
### TBD
-TBD


## Module 4
### TBD
-TBD


## Module 5
### TBD
-TBD


## References and further readings
### Module 1
- https://github.com/bluesky-social/social-app
- [Moving Off React Native](https://www.youtube.com/watch?v=gntZth3mIbM)
- https://medium.com/alan/our-journey-from-react-native-to-expo-for-mobile-app-development-at-alan-%EF%B8%8F-3b1569e8ab7c
  - https://docs.expo.dev/develop/development-builds/introduction/#what-is-expo-dev-client
    - By using development builds instead of Expo Go, you gain full control over the native runtime, so you can install any native libraries, modify any project configuration, or write your own native code.

### Module 2
- TBD

### Module 3
- TBD

### Module 4
- TBD

### Module 5
- TBD