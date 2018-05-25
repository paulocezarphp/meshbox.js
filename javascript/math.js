/* Guide Document (math)
   Author: Cezar Leigos
   last modify: Cezar Leigos
   Year: 2018-05-25
*/

var math = {
    /*
       Termo geral de uma pa
    */
    PaGeneralTerm : function(a1,n,r) {
        return a1 + (n -1)*r;
    },

    /*
       Soma de todos os termos da pa
    */
    PaSumOfTerm : function(a1,an,n) {
        return ((a1 + an)*n)/2;
    }
};
