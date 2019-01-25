export class Persoana {
    _nume:string;
    _varsta:number;

    get nume():string {
        return this._nume;
    }

    set nume(theName:string) {
        this._nume=theName;
    }

    get varsta():number {
        return this._varsta;
    }

    set varsta(theAge:number) {
        this._varsta=theAge;
    }

    public toString = () : string => {
        return this._nume + " " + this._varsta;
    }


}