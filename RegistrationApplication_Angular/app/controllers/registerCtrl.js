function register($scope){

    $scope.regdata = {};
    $scope.check = ($scope.regdata.agreed && $scope.regdata.firstname && $scope.regdata.lastname && $scope.regdata.state && $scope.regdata.city && $scope.regdata.age && $scope.regdata.gender);

    $scope.states = ["Andhra Pradesh","Telangana","Uttar Pradesh","Haryana"];
    $scope.citys = [];
    $scope.locations=[
        {
        state:"Andhra Pradesh",
        city:"Guntur"
    },
        {
            state:"Andhra Pradesh",
            city:"Vijayawada"
        },
        {
        	state:"Andhra Pradesh",
        	city:"visakhapatnam"

        },
        {

             state:"Andhra Pradesh",
             city:"Tirupati"

        },
        {
            state:"Telangana",
            city:"Hyderabad"
        },
        {
        	state:"Telangana",
        	city:"khammam"

        },
        {
            state:"Uttar Pradesh",
            city:"allahabad"
        },
        {
             state:"Uttar Pradesh",
             city: "Lucknow"

        },
        {
            state:"Haryana",
            city:"Chandigharh"
        },
        {
             state:"Haryana",
             city: "gurgaon"
        },
    ];

    $scope.dropdownChange = function(){
    $scope.citys = [];
    console.log("hello");
    var x = $scope.regdata.state;
    console.log(x);

    for(var i =0; i < $scope.locations.length;i++){
    var y = $scope.locations[i].state;
    console.log(y);
    if(y == x)
    {
     
     console.log("yes");
     var z = $scope.locations[i].city;
     $scope.citys.push(z);

    }
    }


    

    console.log($scope.citys);


    


    };

   $scope.registeredSuc = function(){

    alert("user registered sucessfully");
  }
 


  
}



function checkInput(ob) {
  var invalidChars = /[^0-9]/gi
  if(invalidChars.test(ob.value)) {
            ob.value = ob.value.replace(invalidChars,"");
      }   
           
}
  

angular.module("registerApp").controller('registerCtrl',['$scope',register]);