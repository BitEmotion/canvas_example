const mouseMove = (event) => {
    console.log("mouseMove",event);
}

const mouseDown = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const _x = Math.floor(x / 39);
    const _y = Math.floor(y / 39);
    if(point2DArray[_x][_y].m_isLoad == true){
        context.fillStyle = STR_COLOR_RED;
        context.fillRect(point2DArray[_x][_y].m_x * slotw, 
                         point2DArray[_x][_y].m_y * slotw, 
                         slotw, slotw);
        point2DArray[_x][_y].setFalseIsLoad();
    } else {
        context.fillStyle = STR_COLOR_WHITE;
        context.fillRect(point2DArray[_x][_y].m_x * slotw, 
                         point2DArray[_x][_y].m_y * slotw, 
                         slotw, slotw);
        point2DArray[_x][_y].setTrueIsLoad();
    }
}

canvas.addEventListener("mouseMove",mouseMove);
canvas.addEventListener("click",mouseDown);
