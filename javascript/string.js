/* Guide Document (string)
   Author: Cezar Leigos
   last modify: Cezar Leigos
   Year: 2018-05-25
*/

var string = {

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
    },

    /*
        Verifica se o texto contido em y esta em x
    */
    Strpos : function(x, y) {
      if(x.match(y)){
         return true;
      }else{
         return false;
      }
    },

    /*
        Semelhante a Strpos com uma única diferença, a de que StrposNoSensitive
        não é case sensitive.
    */
    StrposNoSensitive : function(x, y) {
      var x = x.toLowerCase();
      var y = y.toLowerCase();
      if(x.match(y)){
         return true;
      }else{
         return false;
      }
    }




};
