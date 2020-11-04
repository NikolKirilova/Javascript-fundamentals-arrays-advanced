function solve(input){
    let list = input.shift().split(', ');
    let n = Number(input.shift());
    let commands = input.shift();
    for(let i=0;i<n;i++){
        commands = commands.split(', ');
        let command = commands.shift();
        if(command === 'Add'){
            let tankName = commands.shift();
            if(list.includes(tankName)){
                console.log(`Tank is already bought`);                
            }else{
                list.push(tankName);
                console.log(`Tank successfully bought`);
                
            }
        }else if(command === 'Remove'){
            let tankName = commands.shift();
            if(list.includes(tankName)){
                console.log(`Tank successfully sold`);
                let index = list.indexOf(tankName);
                list.splice(index, 1);
            }else{
                console.log(`Tank not found`);
                
            }  
        }else if(command === 'Remove At'){
            let index = Number(commands.shift());
            if(index>=0 && index<list.length){
                list.splice(index,1);
                console.log(`Tank successfully sold`);
                
            }else {
                console.log(`Index out of range`);
                
            }
        }else if(command === 'Insert'){
            let index = Number(commands.shift());
            let tankName = commands.shift();
            if(index>=0 && index<list.length){
                if(list.includes(tankName)){
                    console.log(`Tank is already bought`);
                    
                }else{
                    list.splice(index, 0 ,tankName);
                    console.log(`Tank successfully bought`);
                    
                }
            }else{
                console.log(`Index out of range`);
                
            }
        }
        commands = input.shift();
    }
    console.log(list.join(', '));
    
}solve(["T-34-85 Rudy, SU-100Y, STG",
    "3",
    "Add, King Tiger(C)",
    "Insert, 2, IS-2M",
    "Remove, T-34-85 Rudy"
    ])