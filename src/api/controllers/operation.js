var logger = require('winston');
var operationBO = require('../../business/numbers')();

module.exports = function() {
    return {
        sum: function(req, res) {
            logger.log('info', '[controller-operation] start opereation sum');
                logger.log('[controller-operation] checking if it is an array',req.body);
            if ( Array.isArray(req.body) ) {
                logger.log('[controller-operation] checking if it is an array of integers',result);
                var result = operationBO.verifyArray(req.body)
                if(result){
                var resultSum =  operationBO.sumArray(req.body)
                res.status(200).json({"result":resultSum});
                }else{
                    logger.log('[controller-operation] Not an array of integers',result);
                    res.status(400).json({"error":'the array must contain only integer numbers'});
                }
            }
            else{
                res.status(400).json({"error":'the submitted object is not an array'});
            }    
        },
        avg: function(req, res) {
            logger.log('info', '[controller-operation] start opereation sum');
            if ( Array.isArray(req.body) ) {
                    logger.log('[controller-operation] verificando se é um array',req.body);
                    var result = operationBO.verifyArray(req.body)
                    logger.log('[controller-operation] verificando se é um array de inteiros',result);
                if(result){
                    logger.log('[controller-operation] É um array de inteiros',result);
                    var resultAvg =  operationBO.avgArray(req.body)
                    res.status(200).json({"resultado":resultAvg});
                }else{
                    logger.log('[controller-operation] Não é um array de inteiros',result);
                    res.status(400).json({"result":'não é array de inteiros'});
                }
            }
            else{
                res.status(400).json({"result":'não é array'});
            }    
          
        }
    };
};
