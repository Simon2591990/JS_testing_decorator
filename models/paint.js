const Paint = function(litres){
    this.litres = litres;
    
}

Paint.prototype.isEmpty = function(){
    if (this.litres === 0){
        return true
    }
}

Paint.prototype.pourPaint = function(){
    this.litres = 0;
}

module.exports = Paint;