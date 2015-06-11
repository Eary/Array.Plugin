/**
 * Author:niineo
 * Github:https://github.com/niineo/Array.plugin
 */
(function(){
    Array.prototype.insert = function(i,item){
        this.splice(i,0,item);
    };
    Array.prototype.clone = function(){
        return this.slice(0);
    };
    Array.prototype.clear = function(){
        this.length = 0;
    };
    Array.prototype.remove = function(item){
        for(var i = this.length-1; i--;){
            if(this[i] === item ) this.splice(i, 1);
        }
    };
})();