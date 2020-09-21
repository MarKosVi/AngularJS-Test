var app = angular.module('myApp', []);

    app.controller('ListaController', function($scope) {
        $scope.itens = [
            {
                id: 1, 
                nome: 'Marcos Vinicio Fonseca Barros', 
                email: 'mfonsecabarros@gmail.com', 
                nascimento: 09121993, 
                telefone: 31984315504
            },
        ];
        var id = 1;
        $scope.adicionaItem = function () {
            $scope.itens.push({
                id: ++id,
                nome: $scope.item.nome,
                email: $scope.item.email,
                nascimento: $scope.item.nascimento,
                telefone: $scope.item.telefone});
        };

        $scope.$watch(function () {
            updateItem(0)
        });
    })

function selecionarTabela(e){
    updateItem(e.id - 1);
}

function updateItem(e) {
    k = document.querySelectorAll('[name=tabl]').length
    for(i=0; i<k; i++){
        if( i != e){
            el = document.querySelectorAll('[name=tabl]')[i];
            el.classList.add('d-none');
        }else{
            el = document.querySelectorAll('[name=tabl]')[i];
            el.classList.remove('d-none');
        }
    };
}
