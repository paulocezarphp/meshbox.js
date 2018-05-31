/* Guide Document (date)
   Author: Cezar Leigos
   last modify: Cezar Leigos
   Year: 2018-05-30
*/

var date = {
    /*
       Retorna o ano atual
    */
    DateYear : function() {
        var date = new Date();
        return date.getFullYear();
    },

    /*
       Retorna o mês atual 0-11
    */
    DateMonth : function() {
        var date = new Date();
        return date.getMonth();
    },

    /*
       Retorna o dia atual 0-11
    */
    DateDay : function() {
        var date = new Date();
        return date.getDate();
    },

    /*
       Retorna a data atual (pt-br -> brazilian, en -> english)
    */
    DateFull : function(x) {
        var date = new Date();
        if(x == "pt-br"){
           if(date.getMonth() < 10){
              return date.getDate() + "/" + "0"+(date.getMonth()+1) + "/" + date.getFullYear();
           }else{
              return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
           }
        }
        else if(x == "en"){
           if(date.getMonth() < 10){
              return date.getFullYear() + "/" + "0"+(date.getMonth()+1) + "/" + date.getDate();
           }else{
              return date.getFullYear() + "/" + (date.getMonth()+1) + date.getDate();
           }
        }
    },

    /*
       Retorna a hora atual
    */
    DateHours : function() {
        var date = new Date();
        return date.getHours();
    },

    /*
       Retorna o minuto atual
    */
    DateMinutes : function() {
        var date = new Date();
        return date.getMinutes();
    },

    /*
       Retorna o segundo atual
    */
    DateSeconds : function() {
        var date = new Date();
        return date.getSeconds();
    },

    /*
       Retorna os milisegundos atual
    */
    DateMilliseconds : function() {
        var date = new Date();
        return date.getMilliseconds();
    },

    /*
       Retorna o dia da semana atual
    */
    DateWeek : function() {
        var date = new Date();
        return date.getDay();
    }

};
