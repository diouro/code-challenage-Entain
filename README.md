# code-challenge-Entain

Code challenge for Entain

Project dependencies

- Node version 16.0.0 ( but it might work fine with version 12 and above )
- redux ( https://react-redux.js.org/ )

## Setup

run `yarn`

Before running the iOS app you must install the pod dependencies.

run `cd ios` && `pod install`

## Run

To start server run `yarn start`

Run on iOS `yarn ios`
Run on Android `yarn android`

## IMPORTANT
If you have any issues with installing the app with the error "Command PhaseScriptException failed with a nonzero exit code."
This is likely because some conflict with node, which can be due to use of nvm.
You will need to unset your default nvm and that should work.

`nvm unalias default`

Try running the app again after that.


## Test

run `yarn test`
