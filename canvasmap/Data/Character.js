const Character = class {
    m_x;
    m_y;
    constructor(x,y){
        this.m_x = x;
        this.m_y = y;
    }
    updateLocation(x,y){
        this.m_x = x;
        this.m_y = y;
    }
    getLocation(){
        return {
            x:this.m_x,
            y:this.m_y
        }
    }
}

export default Character;