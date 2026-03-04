let i;
let j;
let row;
let n=5;

//hollow square pattern
for(i=1;i<=n;i++){
    row="";
    for(j=1;j<=n;j++){
        if(i==1 || i==n || j==1 || j==n){
            row+= i; //to print row number instead of * and for * it is row+= " *";
        }
        else{
            row+=" ";
        }
    }
    console.log(row);
}