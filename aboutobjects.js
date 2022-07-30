const obj = {
    name : 'anurag',
    lastname:'kumar',
    companies:['ncr','honeywell','novell'],
    greet: function(caller) {
        console.log('hello ' + this.name+ ' by ' + caller + this.lastname + ' '+ this.addsomemsg());
    },
    addsomemsg: function(){
        return "enjoy";
    }
}

console.log(obj);
console.log(obj.lastname);
console.log(obj['lastname']);
const grt = obj.greet('bhujang');
console.log(grt);

