app.controller('CounterController', function(){

})
app.controller('TempCon', function(){
var tc = this;
tc.temp = 0;

tc.fToC = function(){
    tc.temp = (tc.temp - 32) / 1.8;
}
tc.cToF = function(){
    tc.temp = (tc.temp + 32) * 1.8;
}

})   
    

app.controller('LargeDist', function(){
var ld = this;
ld.count= 0;
ld.mToK = function(){
ld.count = (ld.count * 0.6214);

   
}
ld.kToM = function(){
    ld.count= (ld.count / 0.6214);
}

})

app.controller('WeightCon', function(){
    
var wc = this;
wc.count= 0;
wc.lbToKg = function(){
    wc.count = (wc.count * 2.2046);
   
}
wc.kgToLb = function(){
    wc.count = (wc.count / 2.2046);
}

}) 
app.controller('InchCon', function(){
var ic = this;
ic.length= 0;
ic.fToI = function(){
    ic.length= (ic.length * 12);
   
}
ic.iToF = function(){
    ic.length= (ic.length / 12);
}

}) 
app.controller('BodyCon', function(){
var bc = this;
bc.count= 0;
bc.lbs= 0;
bc.height= 0;

bc.conToMI = function(){
    bc.count= (bc.lbs / (bc.height ^ 2)) / 703;
 //(Weight in Pounds / (Height in inches^2 ) ) x 703  
}
bc.conMiToDim = function(){
    bc.count = (bc.lbs * (bc.height)) / 703;
}

}) 
app.controller('LoanCalc', function(){
var lcal = this;
lcal.count= 0;

lcal.estimate = function(){
    lcal.count = lcal.amt * Math.pow(1 + ( lcal.rate / 100), lcal.years) ; 
}

})

