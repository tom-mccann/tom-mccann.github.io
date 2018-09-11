function counter(initDate, id){
    this.counterDate = new Date(initDate);
    this.container = document.getElementById(id);
    this.update();
}
 
counter.prototype.calculateUnit=function(secDiff, unitSeconds){
    var tmp = Math.abs((tmp = secDiff/unitSeconds)) < 1? 0 : tmp;
    return Math.abs(tmp < 0 ? Math.ceil(tmp) : Math.floor(tmp));
}
 
counter.prototype.calculate=function(){
    var secDiff = Math.abs(Math.round(((new Date()) - this.counterDate)/1000));
    this.days = this.calculateUnit(secDiff,86400);
    this.hours = this.calculateUnit((secDiff-(this.days*86400)),3600);
    this.mins = this.calculateUnit((secDiff-(this.days*86400)-(this.hours*3600)),60);
    this.secs = this.calculateUnit((secDiff-(this.days*86400)-(this.hours*3600)-(this.mins*60)),1);
}
 
counter.prototype.update=function(){
    this.calculate();
    this.container.innerHTML =
        '<p id="days"><strong>' + this.days + '</strong>' + (this.days == 1? 'day' : 'days') + '</p>' +
        '<p id="hours"><strong>' + this.hours + '</strong>' + (this.hours == 1? 'hour' : 'hours') + '</p>' +
        '<p id="mins"><strong>' + this.mins + '</strong>' + (this.mins == 1? 'min' : 'mins') + '</p>' +
        '<p id="secs"><strong>' + this.secs + '</strong>' + (this.secs == 1? 'sec' : 'secs') + '</p>';
    var self = this;
    setTimeout(function(){self.update();}, (1000));
}