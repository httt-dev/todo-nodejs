var app = angular.module("app.todos", ["xeditable"]);
app.controller("todoController", ['$scope', 'serviceTodos', function ($scope, serviceTodos) {
    $scope.appName = "TODO APP(NODE JS)";
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;

    //load data 
    serviceTodos.get().then(function (response) {
        $scope.todos = response.data;
        console.log($scope.todos);
        $scope.loading = false;
    });
    $scope.createTodo = function () {
        $scope.loading = true;

        let todo = {
            text: $scope.formData.text,
            isDone: false
        }
        serviceTodos.create(todo).then(function(response){
            $scope.todos = response.data;
            $scope.formData.text="";
            $scope.loading = false;

        });
    }

    $scope.updateTodo = function (todo) {
        $scope.loading = true;

        serviceTodos.update(todo).then(function(response){
            $scope.todos = response.data;
            $scope.loading = false;
        });
    }
    $scope.deleteTodo = function (todo) {
        $scope.loading = true;

        serviceTodos.delete(todo._id ).then(function(response){
            $scope.todos = response.data;
            $scope.loading = false;
        });
    }
}]);