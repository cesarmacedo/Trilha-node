var logger      = require('winston');

module.exports = function() {
    return {
        verifyArray: function (vetor) {
            var result = true;
            for (var cont = 0; cont < vetor.length; cont++){
                if(vetor[cont] % 1 != 0){
                    result = false;
                }
            }
            return result; 
        },
        sumArray: function(vetor) {
            logger.log('[controller-operation] starting method sumArray in vetor',vetor);
            var result=0;
            for (var cont = 0; cont < vetor.length; cont++){
               result = result + vetor[cont];
            }
            logger.log('[controller-operation] sum Array si:',result);
            return result; 
        },
        avgArray: function(vetor) {
            logger.log('[controller-operation] starting method avgArray in vetor',vetor);
            var result=0;
            for (var cont = 0; cont < vetor.length; cont++){
               result = result + vetor[cont];
            }
            result = result / vetor.length;
            return result; 
        }
    };
};