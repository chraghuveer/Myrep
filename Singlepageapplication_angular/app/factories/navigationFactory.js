function navFn(){
    var navBar =[
        {   displayName:"Home",
            routeName:'home',
            templateUrl:"app/templates/home.html"},
        {   displayName:"Contact",
            routeName:'contact',
            templateUrl:"app/templates/contact.html"},
        {displayName:"Register",
            routeName:'register',
            templateUrl:"app/templates/register.html"},
        {displayName:"About us",
            routeName:"about",
            templateUrl:"app/templates/about.html"},
        {displayName:"Login",
            routeName:"login",
            templateUrl:"app/templates/login.html"},
        {displayName:"Order",
            routeName:"order",
        templateUrl:"app/templates/order.html"}
    ];
    return{
        getNavigationItems:function(){
            return navBar;
        }
    }
}

app.factory('navigationFctry',[navFn]);