/* Guide Document (tool)
   Author: Cezar Leigos
   last modify: Cezar Leigos
   Year: 2018-05-19
*/

var tool = {
    /*
       Gera aleatoriamente um elemento de um array
    */
    Ramdom : function(x) {
        var element = x[Math.floor(Math.random() * x.length)];
        return element;
    },

    /*
        Verificar qual o mair elemento em um array
    */
    Max : function(x) {
        var a;
        a = x[0];
        for(var i = 0; i < x.length; i++){
           if(x[i] > a){
              a = x[i];
           }
        }
        return a;
    },

    /*
        Verificar qual o menor elemento em um array
    */
    Min : function(x) {
        var a;
        a = x[0];
        for(var i = 0; i < x.length; i++){
           if(x[i] < a){
              a = x[i];
           }
        }
        return a;
    },

    /*
        Conta quantos elementos tem um determinado array
    */
    LengthArray : function(x) {
        return x.length;
    },

    /*
        Conta quantos caracteres tem um determinado array
    */
    LengthString : function(x) {
        return x.length;
    }

};
