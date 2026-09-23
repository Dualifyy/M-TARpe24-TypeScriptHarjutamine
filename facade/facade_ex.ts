// fassaadi klass annab lihtsa mingisugusele loogikale kas ühe või mitme alasüsteemi jaoks. fassaad delegeerib kliendi päringud õigetele objektidele alamsüsteemi sees.
//Fassaad on ka vastutav nende elutsükli eest. Kõik see vrjestab klienti alamsüsteemi soovimatu kompleksuse eest.

class Fassaad {
    protected alamsüsteem1: Alamsüsteem1;
    protected alamsüsteem2: Alamsüsteem2;

    //olenevalt sinu programmi vajadustest, sa saad anda fassaadile olemasoleva alamsüsteemi objektid või sundima fassaadi neid ise looma.
    constructor(alamsüsteem1?: Alamsüsteem1, alamsüsteem2?: Alamsüsteem2){
        this.alamsüsteem1 = alamsüsteem1 || new Alamsüsteem1();
        this.alamsüsteem2 = alamsüsteem2 || new Alamsüsteem2();
    }

    //fassaadi meetodid on mugavad läbilõiked/otseteed läbi alasüsteemi keerulise funktsionaalsuse. Aga, kliendid saavad vastu ainult murdosa alamsüsteemi keerukusest.

    public tegevus(): string {
        let tulemus = "Fassad initialiseerib alamsüsteem: \n";
        tulemus += this.alamsüsteem1.tegevus1();
        tulemus += this.alamsüsteem2.tegevus1();
        tulemus += "fassaad käsib alamsüsteemidel täita tegevusi"
        tulemus += this.alamsüsteem1.tegevusN();
        tulemus += this.alamsüsteem2.tegevusZ();
        return tulemus;
    }
}

class Alamsüsteem1 {
    public tegevus1(): string {
        return "Alamsüsteem 1 valmis"
    }
    public tegevusN(): string {
        return "Alamsüsteem 1 TÖTTAB ÄKSHONISSE"
    }
}
//Osad fassaadid suudavad töötada mitme süsteemiga samaaegselt korraga.
class Alamsüsteem2 {
    public tegevus1(): string {
        return "Alamsüsteem 2 valmis"
    }
    public tegevusZ(): string {
        return "Alamsüsteem 2 ründab Venemaad!"
    }
}
//Kliendikood töötab komplekssete alamsüsteemidega läbi lihtsa liidese, mille annab fassaad. Kui fassaad haldab selle alamsüsteemi elutsüklit, Klient ei pruugi üldsegi selle alamsüsteemi olemasolust teadlik olla. Selline lähenemine aitab hoida komplekssust kontrolli all.
function klientKood10(fassaad: Fassaad) {
    console.log(fassaad.tegevus())
}
//Klientkoodil võib olla mõned alamsüsteemi objektid olla  juba loodud. Sellisel juhul võib olla fassaadi initsialiseerimine nende objektidega. Selle asemel et lasta fassaadil luua uued instantsid nendest objektides
const alamsüsteem1 = new Alamsüsteem1();
const alamsüsteem2 = new Alamsüsteem2();
const fassaad = new Fassaad(alamsüsteem1, alamsüsteem2);
klientKood10(fassaad);