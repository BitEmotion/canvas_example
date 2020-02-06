import { STR_COLOR_RED, STR_COLOR_WHITE, STR_COLOR_BLUE } from "./ConstData/ConstString.js";
import { NUM_MIN, NUM_MAX, NUM_BLOCK } from "./ConstData/ConstNumber.js";
import { makeRandomNumber } from "./Api/index.js";
import { character, pointArray, point2DArray, pointRoadArray } from "./Data/index.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
const size = NUM_BLOCK;
const blockWidth = Math.floor((canvas.width - size) / size);
// const blockHeight = Math.floor((canvas.width - size) / size);
let requestAnimeCount = 0;
let requestId = 0;

//-render-
//map render
const mapRender = () => {
    for(let i = 0; i< 100; i++){
        if(pointArray[i].m_isLoad == true){
            context.fillStyle = STR_COLOR_WHITE;
            context.fillRect(pointArray[i].m_x * blockWidth, 
                            pointArray[i].m_y * blockWidth, 
                            blockWidth, blockWidth);
            pointRoadArray.push(pointArray[i]);
            continue;
        }
        context.fillStyle = STR_COLOR_RED;
        context.fillRect(pointArray[i].m_x * blockWidth, 
                        pointArray[i].m_y * blockWidth, 
                        blockWidth, blockWidth);
    }
}

//character render
const characterInit = () => {
    context.fillStyle = STR_COLOR_BLUE;
    context.fillRect(character.m_x * blockWidth + makeRandomNumber(29), 
                     character.m_y * blockWidth + makeRandomNumber(29), 
                     size, size);
    character.updateLocation( character.m_x * blockWidth + makeRandomNumber(29),
                              character.m_y * blockWidth + makeRandomNumber(29));
}

const characterRenderer = () => {
    if(requestAnimeCount > 800){
        cancelAnimationFrame(requestId);
        return;
    }

    pointRoadArray.forEach(point => {
        context.clearRect( point.m_x * blockWidth, point.m_y * blockWidth , 
                            blockWidth, blockWidth);
        context.fillStyle = STR_COLOR_WHITE;
        context.fillRect( point.m_x * blockWidth, point.m_y * blockWidth , 
                            blockWidth, blockWidth);                       
    });  
    const x = Math.floor(character.getLocation().x / blockWidth);
    const y = Math.floor(character.getLocation().y / blockWidth);   
    if(x + 1 < NUM_MAX && point2DArray[x + 1][y].m_isLoad == true ){
        const rightPoint = point2DArray[x][y];
        context.clearRect( rightPoint.m_x * blockWidth, rightPoint.m_y * blockWidth , 
                            blockWidth, blockWidth);                  
        context.fillStyle = STR_COLOR_WHITE;
        context.fillRect( rightPoint.m_x * blockWidth, rightPoint.m_y * blockWidth , 
                          blockWidth, blockWidth);
        context.fillStyle = STR_COLOR_BLUE;
        context.fillRect( character.m_x, 
                          character.m_y, 
                          size, size);
        character.updateLocation(character.m_x + 1, character.m_y);
    } else if(y + 1 < NUM_MAX && point2DArray[x][y + 1].m_isLoad == true) {
        const downPoint = point2DArray[x][y];
        context.clearRect( downPoint.m_x * blockWidth, downPoint.m_y * blockWidth , 
                            blockWidth, blockWidth);
                            
        context.fillStyle = STR_COLOR_WHITE;
        context.fillRect( downPoint.m_x * blockWidth, downPoint.m_y * blockWidth , 
                          blockWidth, blockWidth);

        context.fillStyle = STR_COLOR_BLUE;
        context.fillRect( character.m_x , 
                          character.m_y , 
                          size, size);
        character.updateLocation(character.m_x, character.m_y + 1);
    }  else {

    }
    requestAnimeCount++;
    requestId = requestAnimationFrame(characterRenderer);
}

mapRender();
characterInit();
characterRenderer();
   