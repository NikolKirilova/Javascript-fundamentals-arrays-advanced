function solve (input){
        let list = input.shift().split(', ');
        let commands = input.shift();
        let countBlacklist = 0;
        let countLost = 0;
        while(commands !== 'Report'){
            commands= commands.split(' ');
            let action = commands.shift();
            let name = commands.shift();
            if(action === 'Blacklist'){
                if(list.includes(name)){
                    let index = list.indexOf(name);
                    list[index]= 'blacklisted';
                    console.log(`${name} was blacklisted`);
                    countBlacklist++;
                }else {
                    console.log(`${name} was not found.`);
                }
            }else if(action === 'Error'){
                if(list[name]!== 'blacklisted' && 
                list[name]!== 'lost'){
                    let lostName = list[name];
                    list[name] = 'lost'
                    console.log(`${lostName} was lost due to an error.`);
                    countLost++;
                    
                }
            }else if(action === 'Change'){
                let newName = commands.shift();
                if(name>=0 && name<list.length){
                    let oldName = list[name];
                    list[name] = newName;
                    console.log(`${oldName} changed his username to ${newName}.`);
                    
                }
            }
            commands = input.shift();
        }
        console.log(`Blacklisted names: ${countBlacklist}`);
        console.log(`Lost names: ${countLost}`);      
        console.log(list.join(' '));
        
}solve(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error 0",
    "Error 1",
    "Change 2 Mike123",
    "Report"
    ])