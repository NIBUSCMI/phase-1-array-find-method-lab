// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];

//function superbowlWin(record) {
   // if (record.find(element => element.result === "W")){
        //return record.find(element => element.result === "W").year
    //}
    //else {
        //return undefined
    //}
//}

function superbowlWin(record) {
    let win = record.find(element => element.result === "W");
    if (win) {
        return win.year
    }
    else {
        return undefined
    }
}





