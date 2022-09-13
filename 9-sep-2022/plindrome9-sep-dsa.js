function detectPalindrome(num){
//write code here

  let count=0;
    for(i=num-1;i>=0;i--){
        count++;
    }

    if(num==count){
        console.log("Yes");
    }
    else{
        console.log("No");
    }

}
