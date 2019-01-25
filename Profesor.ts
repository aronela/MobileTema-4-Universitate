import {Persoana} from "./Persoana";

class Profesor extends Persoana {
    _materie:string;
    _titlu:string;

    get materie():string {
        return this._materie;
    }

    set materie(theSubject:string) {
        this._materie=theSubject;
    }

    get titlu():string {
        return this._titlu;
    }

    set titlu(theTitle:string) {
        this._titlu=theTitle;
    }

    public toString = () : string => {
        return this._nume + " " + this._varsta + " " + this._materie + " " + this._titlu;
    }
}