/*sum of elemts in an array*/
var s=0;
var sum=function(a)
{ for(let i in a)
{s+=parseInt(a[i]);
}
console.log(s);


}
var aa=[1,2,3,4];

sum(aa);
 
( function(b){var c=0; for(let i in b)
{c+=parseInt(b[i]);
}
console.log(c);


})([1,2,3])
/*-------------------------------------------------------------------*/

/*remove duplicates*/
let u=function(array)
{ var uniq=[...new Set(array)]
console.log(uniq);


}
var arrray1=[1,2,2,4,5,5];

u(arrray1);
 
( function(b){var uniq=[...new Set(b)]
console.log(uniq);
})([1,2,6,6,3,3,4])

/*----------------------------------------------------------------------*/
/*print odd numbers in an array*/
var sum=function(e)
{for(let i in e)
if(e[i]%2!==0)
{
console.log(e[i]);


}}
var ee=[1,2,2,4,5,5];

sum(ee);
 
( function(f){for(let i in f)
if(f[i]%2!==0)
{
console.log(f[i]);}
})([1,2,6,6,3,3,4])

/*-----------------------------------------------------------------------*/
/*median of 2 array*/
var sum=function(k)
{var len=k.length
var m;
if(len%2===0)
{ m=((len/2)+((len/2)+1))
console.log(m);}
else if(len%2!==0)
{  m=(len+1)/2;
console.log(m);}


}
var ee=[1,2,3];
var ff=[3,2,1];
var g=ee+','+ff
var h=g.split(',')
sum(h);
  
  
( function(l,m){
    var h=l+","+m;
    var n=h.split(",")
    var le=n.length
var med;
if(le%2===0)
{ med=((le/2)+((le/2)+1))
console.log(med);}
else if(le%2!==0)
{  med=(le+1)/2;
console.log(med);}


}
)([1,2,3],[3,2,1])

/*---------------------------------------------------------------------*/
/*convert all the strings to title in a string array*/
var sum=function(string1)
{for(let z in string1){
    var text=string1[z].toUpperCase();
console.log(text);}
}
var string=["spider","dark","devil"]
sum(string);

  
  
( function(string2){
  for(let x in string2){  
var text1=string2[x].toUpperCase();
console.log(text1);}

}
)(["ironman","spdierman","panther"])
/*--------------------------------------------------------------------*/
/*Return all the palindromes in an array*/
var sum=function(string3)
{for(let z in string3){
    var text=string3[z].split("").reverse();
    var tx=text.join("")
    if(string3[z]==tx)
{console.log(string3[z]);}

}
}
var strings=["spider","asa","devil"]
sum(strings);

  
  
( function(string4){
  for(let zz in string4){
    var text2=string4[zz].split("").reverse();
    var tx2=text2.join("")
    if(string4[zz]==tx2)
{console.log(string4[zz]);}}
 

}
)(["ironman","madam","panther"])
/*----------------------------------------------------------------*/
/*print the prime number in an array*/
var sum=function(arr1)
{var i,flag=0;
		
         for(j=0;j<arr1.length;j++)
		{for(i=2; i <= arr1[j]/2; i++)
		{
			if(arr1[j]%i === 0)
			{
				flag = 1;
				break;
			}
		}
		if(flag === 0)
		{
			console.log(arr1[j]);
		}
		}
}
var st=[2,3,7]
sum(st);

  
  
( function(arr2){
  let is,flag1=0;
		
         for(let js in arr2)
		{for(is=2; is <= arr2[js]/2; is++)
		{
			if(arr2[js]%is === 0)
			{
				flag1 = 1;
				break;
			}
		}
		if(flag1 === 0)
		{
			console.log(arr2[js]);
		}}

}
)([2,4,7])
/*----------------------------------------------------------------------------*/
/*Rotate an array by K times and return the rotatede array*/

var rotate=function(nu,k)
{let i=0;
while(i<k){
    nu.unshift(nu.pop())
    i++;}
    console.log(nu)

}
var num=[1,2,3,4,5,6,7]
rotate(num,3);

  
  
( function(ne,k1){
  let j=0;
while(j<k1){
    ne.unshift(ne.pop())
    j++;}
    console.log(ne);}


)([1,2,3,4,5,6,7],3)