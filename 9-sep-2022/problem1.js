// Given an array find the unique items in the array
let names = ["suraj","vikas", "ram","raju","vikas"];

let unique_list={};

for(i=0;i<=names.length-1;i++){
  unique_list[names[i]]=1;
}
console.log(unique_list)
