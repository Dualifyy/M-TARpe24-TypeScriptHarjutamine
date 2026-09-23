//komponendi liides defineerib ära tegevused mida dekoraatorid muuta saavad

interface AndmeAllikas {
    kirjutaAndmed(data: string)
    loeAndmed(): string
}
class FailiAndmeAllikas implements AndmeAllikas {
    public kirjutaAndmed(data: string): void {

    }
    public loeAndmed(): string {
        return "siin on andmed"
    }

    //baas dekoraatori klass jälgib sama liidest nagu kõik teised komponendid
    //selle klassi esmane eesmärk on defineerida wrappimisliides kõikidele kindlatele dekoraatoritele Vaikeimplemtatsioon wrappivast koodist välju mis hoiavad endas seda wrapitud komponenti ennast ning ka siis mooduseid selle kasutamiseks või initialiseerimiseks

    
}
class ZipFail implements AndmeAllikas {
    protected wräpitav!: AndmeAllikas

    constructor(allikas: AndmeAllikas) {
        this.wräpitav = allikas
    }

    kirjutaAndmed(data: string): void {
        console.log(`Kirjutasin andmed ${data}sse`)
    }
    //Kindlad dekoraatorid võivad kutsuda esile ülemobjekti meetodi implementatsiooni mingist meetodist selle asemel et seda wräpitud objekti ise otse välja kutsuda see lähenemine lihtsustab dekoraatorklasside laiendamist.
    loeAndmed(): string {
        this.wräpitav.loeAndmed()
        return "lugesin andmeid aga mitte midagi aru ei saanud, vist on zip-pomm"
    }
}

//kindlad dekoraatorid peavad kutsuma meetodeid wräpitud objektilt, aga võivad lisada midagi omalt poolt tulemusele, dekoraatorid saavad käivitada lisandkäitumist kas enne või pärast kutset wräpitud objektil  olevale meetodile.
class KrüpteerimisDekoraator extends FailiAndmeAllikas {
    public kirjutaAndmed(data: string): void {
        console.log("Kirjutasin krüpteeritud andmed, süsteem valmis")
    }
    public loeAndmed(): string {
        return "siin on andmed";
    }
}
function kliendiKood9() {
    let source = new FailiAndmeAllikas()
    source.kirjutaAndmed("mingifail.dat");
    source.loeAndmed();

    source = new KrüpteerimisDekoraator()
    source.kirjutaAndmed("krüpteeritudandmed.bat")
    source.loeAndmed();

    source = new ZipFail(source)
    source.kirjutaAndmed("pakitudandmed.cab")
    source.loeAndmed();
}