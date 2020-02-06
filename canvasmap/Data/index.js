import Point from "./Point.js";
import Character from "./Character.js";
import { makeRandomNumber } from "../Api/index.js";
import { NUM_MAX } from "../ConstData/ConstNumber.js";

const point2DArray = [];
const pointArray = [];
const pointRoadArray = [];
//init
for(let i = 0; i < 10; i++){
    point2DArray[i] = [];
    for(let j = 0; j < 10; j++){
        const point = new Point(i,j);
        pointArray.push(point);
        point2DArray[i].push(point);
    }
}

const stack = [{x:0,y:0}];
let prev, binaryNum;
point2DArray[0][0].setTrueIsLoad();

loop1:
while(prev = stack.pop()){
    let x = prev.x,
        y = prev.y;
    //RIGHT
    if(x + 1 < NUM_MAX && point2DArray[x + 1][y].m_isLoad == false){
        let rightPoint = point2DArray[x + 1][y];
        binaryNum = makeRandomNumber(2);
        if(binaryNum == 1){
            rightPoint.setTrueIsLoad();
            stack.push({x:x+1,
                         y});
            continue loop1;
        } 
    } 

    //DONW
    if(y + 1 < NUM_MAX && point2DArray[x][y + 1].m_isLoad == false){
        let donwPoint = point2DArray[x][y + 1];
        donwPoint.setTrueIsLoad();
        stack.push({
            x,
            y: y+1
        });
        continue loop1;
    } 
    //LEFT
    
    //UP
}

const character = new Character(0,0);

export {
    pointArray,
    point2DArray,
    pointRoadArray,
    character
}