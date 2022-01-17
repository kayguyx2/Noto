
# Noto Application

A notes taking application with the following pages: all notes, create note page, update note page, archived notes, favorite notes and settings.

### Enviorment

- **Defualt**
    - Node (Node version 12 or newer)
    - watchman
- **Ios**
    - CocoaPods
    - Xcode
- **Android**
    - JDK 8 or newer
    - Android Studio

### iOS
In the root directory
* Install dependencies: `yarn install`

In the `ios` directory
* Install Pods: `cd ios && pod install`

Run App
* Run server: `yarn start`
* Run ios: `yarn ios`

### Android

In the root directory
* Install dependencies: `yarn install`

Run App
* Run server: `yarn start`
* Run ios: `yarn android`


## Tests

To run tests, run the following command

```bash
  yarn run test
```

To run coverage tests, run the following command

```bash
  yarn run coverage:test
```