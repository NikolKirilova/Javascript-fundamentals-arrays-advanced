function solve (input){
  let list = input.shift().split(' ').map(Number);
  let command = input.shift();
  let counter = 0;
  while(command !== 'End'){
      command= Number(command);
      if(command<list.length){
        let value = list[command];  
        list[command] = -1;
        counter++;
        for(let i=0; i<list.length; i++){
            let num = list[i];
            if(num >value){
                list[i]-=value;
            }else if(num <=value && num !== -1){
                list[i] +=value;
            }
        }

      }
      command = input.shift();
    }
    console.log(`Shot targets: ${counter} -> ${list.join(' ')}`);
    
}
solve([
    "24 50 36 70",
    "0",
   "4",
   "3",
    "1",
    "End",
      
])