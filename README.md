
#KaytejEmoji


This is an Ionic/React/TypeScript based recreation of the [IndigEmoji](https://github.com/Indigemoji-Australia/indigemoji-app) app. 


## Install

You will need Android Studio (including all the respective Java libraries, sdks etc) to develop for Android and X-code etc to develop for IOS.

Ionic has its own <a href='https://ionicframework.com/docs/'>documentation </a> so any Ionic based solutions should be at there.

To install and run this source code you will need to install the Ionic CLI `npm install -g @ionic/cli`
 
after that run npm install as usual.


## notes for audio (from IndigEmoji src)

Files kept here to be imported into all platforms. These files are not referenced in the codebase.
All sound filenames must be in lowercase with no spaces.

Sound files must be in the following places:
Android: Save your sound clip files under the directory android/app/src/main/res/raw. Note that files in this directory must be lowercase and underscored (e.g. my_file_name.mp3) and that subdirectories are not supported by Android.
iOS: Open Xcode and add your sound files to the project (Right-click the project and select Add Files to [PROJECTNAME])

We may want to make an automation tool for doing both of the above at some point.
