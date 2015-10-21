var op1 = "";
var op2 = "";
var res = "";
var res1 =0;
var sec = false;
var thi = false;
var flag = false;
var func ="";

function func1(){
	
	console.log("1");
	if(sec===true){
		op2=op2 + 1;
		console.log(op2);
	}

	else{
		op1=op1 + 1;
		console.log(op1);
	}
}
function func2(){
	
	console.log("2");
	if(sec===true){
		op2=op2 + 2;
		console.log(op2);
	}

	else{
		op1=op1 + 2;
		console.log(op1);
	}

}
function func3(){
	
	console.log("3");
	if(sec===true){
		op2=op2 + 3;
		console.log(op2);
	}

	else{
		op1=op1 + 3;
		console.log(op1);
	}
}
function func4(){
	
	console.log("4");
	if(sec===true){
		op2=op2 + 4;
		console.log(op2);
	}

	else{
		op1=op1 + 4;
		console.log(op1);
	}
}
function func5(){
	
	console.log("5");
	if(sec===true){
		op2=op2 + 5;
		console.log(op2);
	}

	else{
		op1=op1 + 5;
		console.log(op1);
	}
}
function func6(){
	
	console.log("6");
	if(sec===true){
		op2=op2 + 6;
		console.log(op2);
	}

	else{
		op1=op1 + 6;
		console.log(op1);
	}
}
function func7(){
	
	console.log("7");
	if(sec===true){
		op2=op2 + 7;
		console.log(op2);
	}

	else{
		op1=op1 + 7;
		console.log(op1);
	}
}
function func8(){
	
	console.log("8");
	if(sec===true){
		op2=op2 + 8;
		console.log(op2);
	}

	else{
		op1=op1 + 8;
		console.log(op1);
	}
}
function func9(){
	
	console.log("9");
	if(sec===true){
		op2=op2 + 9;
		console.log(op2);
	}

	else{
		op1=op1 + 9;
		console.log(op1);
	}
}
function func0(){
	
	console.log("0");
	if(sec===true){
		op2=op2 + 0;
		console.log(op2);
	}

	else{
		op1=op1 + 0;
		console.log(op1);
	}
}
function func10(){
	
	console.log(".");
	if(sec===true){
		op2=op2 + ".";
		console.log(op2);
	}

	else{
		op1=op1 + ".";
		console.log(op1);
	}
}
function funcadd()

{
	
	if(func==="")
{
	func = "add";
	console.log("add");
	if(sec===false && thi!==true){
		sec = true;
		console.log(func);
		console.log(sec);

	}

	else if(sec===true)
	{
		flag = true;
		operationadd();

		sec = false; 
		thi = true;
		op1 = "";
		op2 = "";

	}

	else if(thi==true){
		flag = true;
		operationadd();
		sec = false;
		op1 = "";
	}
	else{
		flag = true;
        operationadd();
        sec = false;
        op1 ="";
        op2 ="";
		}
}

else
{
	finaloperation();
}
}
function funcsub(){
	
	if(func==="")
	{
	func = "sub";
	console.log("sub");
	console.log(sec);
	if(sec===false && thi!==true){
		sec = true;
		func = "sub";
		console.log(func);
		console.log(sec);

	}

	else if(sec===true)
	{
		flag = true;
		operationsub();
		sec = false; 
		thi = true;
		op1 = "";
		op2 = "";

	}

	else if(thi==true){
		flag = true;
		operationsub();
		sec = false;
		op1 = "";
	}
	else{
		flag = true;
        operationsub();
        sec = false;
        op1 ="";
        op2 ="";
		}
}

else{
	finaloperation();
}
}
function funcmul(){
	
	if(func==="")
	{
	func = "mul";
	console.log("mul");
	if(sec===false && thi!==true){
		sec = true;
		func = "mul";
		console.log(func);
		console.log(sec);

	}

	else if(sec===true)
	{
		flag = true;
		operationmul();
		sec = false; 
		thi = true;
		op1 = "";
		op2 = "";

	}

	else if(thi==true){
		flag = true;
		operationmul();
		sec = false;
		op1 = "";
	}
	else{
		flag = true;
        operationmul();
        sec = false;
        op1 ="";
        op2 ="";
		}
}

else
{
	finaloperation();
}
}
function funcdiv(){
	if(func==="")
	{
	func = "div";
	console.log("div");
   	if(sec===false && thi!==true){
		sec = true;
		func = "div";
		console.log(func);
		console.log(sec);

	}

	else if(sec===true)
	{
		
        flag =true;
		operationdiv();
		sec = false; 
		thi = true;
		op1 = "";
		op2 = "";

	}

	else if(thi==true){
		flag = true;
		operationdiv();
		sec = false;
		op1 = "";
	}
	else{
		flag = true;
        operationdiv();
        sec = false;
        op1 ="";
        op2 ="";
		}


}
else{
	finaloperation();
}

}




function funcequal(){
	

	console.log("equals");
	if(func===""){
		res = parseFloat(res);
		console.log(res);
	}

	else{
		finaloperation();
	}
}




function funcac(){
	console.log("AC");
    operationclear();
}



function operationadd(){

if(res===""){
res1 = (parseFloat(op1) || 0)+(parseFloat(op2) || 0);
res = res + res1;
console.log(parseFloat(res));
}
else{
res1 = (parseFloat(op1) || 0)+(parseFloat(op2) || 0);
res = parseFloat(res);
res = res+res1;
console.log(parseFloat(res));
console.log(func);

}
}





function operationsub(){
if(res===""){
res1 = (parseFloat(op1) || 0)-(parseFloat(op2) || 0);
res = res + res1;
console.log(parseFloat(res));
}
else{
res1 = (parseFloat(res) || 0)-(parseFloat(op1) || 0);
res = parseFloat(res1);
console.log(parseFloat(res));

}
}





function operationmul(){
if(res===""){
res1 = (parseFloat(op1) || 0)*(parseFloat(op2) || 0);
res = res + res1;
console.log(parseFloat(res));
}


else if(op1===""){
	res = res;
	console.log(parseFloat(res));

}
else{
res1 = (parseFloat(res) || 0)*(parseFloat(op1) || 0);
res = parseFloat(res1);
console.log(parseFloat(res));

}
}





function operationdiv(){
if(res===""){
res1 = (parseFloat(op1) || 0)/(parseFloat(op2) || 0);
res = res + res1;
console.log(parseFloat(res));
}
else if(op1==="")
{
	res = res;
	console.log(parseFloat(res));

}
else{
res1 = (parseFloat(res) || 0)/(parseFloat(op1) || 0);
res = parseFloat(res1);
console.log(parseFloat(res));

}
}





function operationclear(){
	sec = false;
	thi = false;
	op1 = "";
	op2 = "";
	res = "";
	res1 = 0;
	func ="";
	flag = false;
}




function finaloperation(){

	switch (func) {
    case "add":
        if(res===""){
res1 = (parseFloat(op1) || 0)+(parseFloat(op2) || 0);
res = res + res1;
console.log(parseFloat(res));
}
else{
res1 = (parseFloat(op1) || 0)+(parseFloat(op2) || 0);
res = parseFloat(res);
res = res+res1;
console.log(parseFloat(res));
func ="";
}
        break;
    case "sub":
        res1 = (parseFloat(res) || 0)-(parseFloat(op1) || 0);
        res = parseFloat(res1);
        console.log(parseFloat(res));
        break;
    case "mul":
        res1 = (parseFloat(res) || 0)*(parseFloat(op1) || 0);
        res = parseFloat(res1);
        console.log(parseFloat(res));
        break;
    case "div":
        res1 = (parseFloat(res) || 0)/(parseFloat(op1) || 0);
        res = parseFloat(res1);
        console.log(parseFloat(res));
        break;
    }
    
    op1 = "";
    op2 = "";
    res1 = 0;
    func = "";
    
}
