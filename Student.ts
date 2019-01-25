import {Persoana} from "./Persoana";

class Student extends Persoana {
    _an:number;
    _medie:number;

    get an():number {
        return this._an;
    }

    set an(theYear:number){
        this._an=theYear;
    }

    get medie():number {
        return this._medie;
    }

    set medie(theAverage:number) {
        this._medie=theAverage;
    }

    public toString = () : string => {
        return this._nume + " " + this._varsta + " " + this._an + " " + this._medie;
}
}