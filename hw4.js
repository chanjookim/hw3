function userInput() {
    const arr = [];
    for (i = 0; i < 3; i++){
        // this creates a for loop, 
        arr.push(prompt("Please enter a word."));
    }
    
    //this adds the user input into the array, and assigns the array elements to a word. 
    document.getElementById("one").innerHTML = arr[0];
    document.getElementById("two").innerHTML = arr[1];
    document.getElementById("three").innerHTML = arr[2];
    
    const arrTwo = arr.map(x => swap(x)); {
        
    }
    
    console.log(arrTwo);
    
    document.getElementById("oneM").innerHTML = arrTw0[0];
    document.getElementById("twoM").innerHTML = arrTw0[1];
    document.getElementById("threeM").innerHTML = arrTw0[2];
    
}

function swap(x){
    let cont = x;
    let temp = x.split("");
    let sOne = temp[0];
    let sTwo = temp[temp.length-1];
    temp[0] = sTwo;
    temp[temp.length-1] = sOne; 
    
    const final = temp.join("");
    
    return final; 
}

function displayOne(){
    intro.style.display = "block";
    second.style.display = "none";
}

function displayTwo(){
    intro.style.display = "none";
    second.style.display = "block";
}

function showNone(){
    intro.style.display = "none";
    second.style.display = "none";
}






