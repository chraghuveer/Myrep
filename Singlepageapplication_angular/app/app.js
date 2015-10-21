


var app = angular.module('singlePage',['ui.router']);

function configFn($urlRouterProvider,$stateProvider){

    console.log('yes');

    $urlRouterProvider.otherwise("/");
    var homeObj={
        name:'home',
        templateUrl:'app/templates/home.html',
        url:'/home',
        controller:'homeCtrl'
    };


    var aboutObj={
        name:'about',
        views: {
            "viewA": {
                templateUrl: 'app/templates/about.html'
            }
        },
        url:'/about',
        controller:'aboutCtrl'
    };


    var loginObj={
        name:'login',

        templateUrl:'app/templates/login.html',
        url:'/login',
        controller:'loginCtrl'
    };

    var orderObj={
        name:'order',
        templateUrl:'app/templates/order.html',
        url:'/order',
        controller:'orderCtrl'
    };

    var contactObj={
        name:'contact',
        templateUrl:'app/templates/contact.html',
        url:'/contact',
        controller:'contactCtrl'
    };

    var registerObj={
        name:'register',
        templateUrl:'app/templates/register.html',
        url:'/register',
        controller:'registerCtrl'
    };

    var headerObj={

        name:'header',
        templateUrl:'app/templates/header.html',
        controller:'navigationCtrl'
    };

    var main={

     name:'main',
     url:"/",
        views:{
            'header':headerObj,
            'viewA' :homeObj
               }
              };


    //$stateProvider.state('home',homeObj);
    $stateProvider.state('about',aboutObj);
    $stateProvider.state('login',loginObj);
    $stateProvider.state('order',orderObj);
    $stateProvider.state('contact',contactObj);
    $stateProvider.state('register',registerObj);
    $stateProvider.state('main',main);
}

app.config(['$urlRouterProvider','$stateProvider',configFn]);


