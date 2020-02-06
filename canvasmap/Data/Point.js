const Point = class {
    m_x;
    m_y;
    m_isLoad = false;
    m_isBlock = false;
    constructor(x,y){
        this.m_x = x;
        this.m_y = y;
    }
    equals(point){
        if(point == null){
            return false;
        } else {
            return point.m_x == this.m_x && point.m_y == this.m_y;
        }
    }
    setTrueIsLoad(){
        this.m_isLoad = true;
    }
    setFalseIsLoad(){
        this.m_isLoad = false;
    }   
    getIsLoad(){
        return this.m_isLoad;
    }
}

export default Point;
