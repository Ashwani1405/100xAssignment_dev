/*

Pattern Printing Problems


Question-1: 

WAP to print this

*
**
***
****
*****    


Question-2: 

WAP to print this 

   *
  ***
 *****
*******


Question-3:

WAP to print this

*****
*   *
*   *
*****


Question-4:

WAP to print this

1
12
123
1234
12345


Question-5

WAP to print this

    A
   BBB
  CCCCC
 DDDDDDD
EEEEEEEEE

*/

//question - 1
let n = 5; 

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        console.log("*"); 
    }
}