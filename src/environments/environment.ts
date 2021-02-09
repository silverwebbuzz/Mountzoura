// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: "AIzaSyAlQ_TMt8U4ioOQ5nPTspMRTGxV7RYcTkc",
    authDomain: "mountozoura-5a39d.firebaseapp.com",
    databaseURL: "https://mountozoura-5a39d.firebaseio.com",
    projectId: "mountozoura-5a39d",
    storageBucket: "mountozoura-5a39d.appspot.com",
    messagingSenderId: "420100119507",
    appId: "1:420100119507:web:adc182f26d355b51e9ed26",
    measurementId: "G-EPWZYYMZ7M"
  },
  // https://mountzoura.gr/demo/api/realtedPdfQuiz/1
  base_url:'https://mountzoura.gr/api/',
  image_url:'https://mountzoura.gr/public/quizImage/',
  profile_url:'https://mountzoura.gr/public/profile/',
  article_url:'https://mountzoura.gr/public/frontEnd/articleImage/',
  pdf_url:'https://mountzoura.gr/public/document/',
  advertise_url : "https://mountzoura.gr/public/frontEnd/advertiseImage/",
  stripe_api_key: "pk_live_6GlIkO6FjXPe5zYP3nIxERvd00AM7QaTOy",
  

  // https://go-demo.co/mountzoura/api/areaList
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
