# KaytejEmoji

This is an Ionic(v6)/React/TypeScript based recreation of the [IndigEmoji](https://github.com/Indigemoji-Australia/indigemoji-app) app.

## Install

You will need Android Studio (including all the respective Java libraries, sdks etc) to develop for Android. For IOS you will need X-code (and probably an apple device) with respective libraries for that.

Ionic has its own <a href='https://ionicframework.com/docs/'>documentation </a> so Ionic install and usage instructions should be sourced there first.

To install and run this source code you will need to install the Ionic CLI

```
npm install -g @ionic/cli
```

After that run npm install as usual.

## Android/IOS instructions

Features such as the social sharing will not work from just a web server so you will need to install Android/IOS wrappers to be able to use this in your development environment.

- Develop for Android <a href="https://ionicframework.com/docs/developing/android"> Android Documentation </a>
- Develop for IOS <a href = "https://ionicframework.com/docs/developing/ios"> IOS Documentation </a>

## Python files

The python files in the repository are quality of life scripts. The <strong>ConvertXL</strong> script generates the table and reformats some of the cells to get them ready to be exported as a CSV file.We have this running in a virtual environment (hence requirements.txt) So make sure you run:

```
pip install -r requirements.txt
```

- Once converted to CSV then we can run Sam's script <strong>check_images.py</strong> to convert to JSON which we then use to dynamically load in the audio etc.

<!-- ## create your own emoji App -->

<!-- The app has been created in such a way that you can easily create your own version by creating whichever emoji or branding assets you want, then populating the csv with the language words and links to the paths of your assets. The aforementioned Python files can automate these processes if you  -->

## License

GPL-3.0

The copyright for the artwork and cultural knowledge remains with each individual artist involved. They have licensed the use of their work to the emoji bosses and broader team to be included and shared through the free apps (IndigEmoji/Kaytetyemoji).
