/**
 * Created by Administrator on 9/11/2015.
 */
function navCtrl($scope,$state,navigationFctry){

    $scope.navigation ={};    
    $scope.navigation.brandName="Twitter";
    
    $scope.navigation.navItems= navigationFctry.getNavigationItems();

    $scope.loadPage = function(route){
       // $scope.contentUrl = route.templateUrl;
        $state.go(route.routeName);

    }
}

app.controller('navigationCtrl',['$scope','$state','navigationFctry',navCtrl]);