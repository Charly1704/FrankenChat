chatApp=angular.module("FrankenChat",[]);
chatApp.controller("chatCtrl",function($scope,$http){
    $scope.mensajes=[];
    $scope.mensajeActual = {};
    $scope.obtnerMensaje = function(){
        console.log("Los datos que se tienen son")
        $http.get("https://proyecto-carlossn.c9users.io/api/chat").success(function(data){
            console.log(data)
            for(var dato in data){
                $scope.mensajes.push(data[dato].mensaje);
            }
            console.log($scope.mensajes);
        }).error(function(err){
            console.log(err);
        })
    }

    $scope.guardarMensaje = function(mensaje){
     $http.post("https://proyecto-carlossn.c9users.io/api/guardar",mensaje).success(function(data){
         $scope.mensajeActual = data;
         $scope.mensajes.push(data.mensaje);
     })
    }
});
