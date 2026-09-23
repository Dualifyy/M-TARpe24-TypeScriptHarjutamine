//Baasklass komponent deklareerib ära ühised operatsioonid nii lihtsale kui keerulisele objektile, kompositsioonis

abstract class Komponent {
    protected parent!: Komponent | null;

    //valikuliselt saab Komponent deklareerida ka liidese ülemelemendi leidmiseks mingisuguses puustruktuuris. See saab anda ka mingisuguse vaikeimplementatsiooni neile meetoditele
    public setParent(ülemelement: Komponent | null) {
        this.parent = ülemelement;
    }

    public getParent(): Komponent | null {
        return this.parent;
    }

    //Mõningatel juhtudel on kasulik kui defineeritakse ära alamobjektidega seotud haldusoperatsioonid kohe siin samas alusklassis Komponent. Niimoodi ei pea paljastama mingeid konkreetseid komponentklasse kliendikoodile, isegi kui seda puud parasjagu kokku pannakse. Selle hakb külg on see et need meetodid jäävad vähimatel elementidel (alamelemente enam ei ole) tühjaks.

    public add(komponent: Komponent): void {}
    public remove(komponent: Komponent): void {}

    //saab anda ka meetodi mis laseb klientkoodil aru saada kas sellel komponendil saab olla alamelemente.
    public KasOnKomposiitObjekt(): boolean{
        return false
    }
    //baasklass komponent võib implementeerida mingisuguse vaikekäitumise või tegevuse aga võib ka selle ära jätta, ning lasta otsustada selle üle täielikult kindlatel klassidel. ("seda teebki sõna abstract" meetodi signatuuris, öeldes et selle käitumine on abstraktne)
    public abstract tegevus(): string;

}
//lehe klass väljendab lõppobjekte selles kompositsiooni, lehel ei saa olla alamobjekte ning tavaliselt on just need objektid mis teevad tegelikku tööd. Kusjuures komposiitobjektid ainult delegeerivad tööd oma alamobjektidele.


class Leht extends Komponent {
    public tegevus(): string {
        return "olen leheke c:";
    }
}

//Komposiidi klass väljendab keerukaid objekte millel võib olla alamobjekte. Tavaliselt need objektid tööd ei tee vaid ainult delegeerivad töö mujale
class Komposiit extends Komponent {
    protected alamelemendid: Komponent[] = []

    //Komposiitobjekt
    public add(komponent: Komponent): void {
        this.alamelemendid.push(komponent);
        komponent.setParent(this)

    }

    public remove(komponent: Komponent): void {
        const komponendiIndex = this.alamelemendid.indexOf(komponent);
        this.alamelemendid.splice(komponendiIndex, 1)

        komponent.setParent(null)
    }

    public onKomposiit(): boolean {
        return true;
    }
    //Komposiit täidab oma esmase loogika kindlal viisil, ning reisib kogu alamelementide
    //kogumiku läbi, summeerides tulemust, ja kutsudes esile alamelementide meetodeid.
    //kuna komposiitelemendid esitavad need andmed oma alamentidele jne, kogu puu läbitakse selle tegevuse tulemusena
    public tegevus(): string {
        const results: string [] = [];
        for (const alamelement of this.alamelemendid) {
            results.push(alamelement.tegevus())
        }

        return `Branch (${results.join('+')})`;
    }
}

//Kliendikood töötab kõikide komponentidega läbi ühise alusliidese
function kliendiKood7(komponent: Komponent) {
    console.log(`RESULT ${komponent.tegevus()}`)
}
const lihtne = new Leht();
console.log("On olemas lihtne komponent")
kliendiKood7(lihtne)
console.log("")

//ja klientkood töötab ka kõikide komposiitobjektidega
const puu = new Komposiit();
const oks1 = new Komposiit();
oks1.add(new Leht())
oks1.add(new Leht())
const oks2 = new Komposiit();
oks2.add(new Leht())
puu.add(oks1)
puu.add(oks1)
console.log("Client, nüüd on olemas ka keeruline objekt")
kliendiKood7(puu)
console.log("")

//Tänu sellele et alamobjektide haldusoperatsioonid on deklareeritud Komponendi baasklassis, kliendikood saab töötada ükskõik millise komponendiga, olgu ta siis lihtne või keeruline ilma tuginemata nende kindlatele klassidele

function kliendiKood8(komponent1: Komponent, komponent2: Komponent) {
    if (komponent1.KasOnKomposiitObjekt()) {
        komponent1.add(komponent2)
    }

}
console.log(`ei ole vaja kontrollida komponentide klasse isegi kui on tegemist puu haldamisega`)

kliendiKood8(puu, lihtne)