//originaator hoiab endas mingit tähtsat olekut, mis võib aja jooksul muutuda. Ta defineerib ära meetodi millega salvestada tema sisemist olekut memento seed ja teist meetodit mis eda seisundit taastab mementost.
class Originaator {
    private sisemineOlek: string;

    constructor(sisemineOlek: string) {
        this.sisemineOlek = sisemineOlek;
        console.log(`Originaator: Minu olek on: ${sisemineOlek}`)
    }
    public teeMidagi(): void {
        console.log("Originaator: Toimub tähtis tegevus");
        this.sisemineOlek = this.genereeriSõne(30);
        console.log(`Originaator: Minu sisemine olek on muutunud ${this.sisemineOlek}`)
    }
    private genereeriSõne(pikkus: number = 10): string {
        const tähestik = "abcdefghijklmnopqrstuvõäöüABCDEFGHIJKLMNOPQRSTUVWXYÕÄÖÜ";
        return Array.apply(null, {pikkus})
        .map(()=>tähestik.charAt(Math.floor(Math.random()*tähestik.length))).join('')
    }

    public salvesta(): Memento {
        return new KindelMemento(this.sisemineOlek)
    }
    public taasta(memento: Memento): void {
        this.sisemineOlek = memento.saaOlek();
        console.log(`Originaator: Mu sisemine olek on muudetud: ${this.sisemineOlek}`)
    }
    //Taastab originaatori hetkeoleku memento seest
}
//Memento liides annab viisi saada kätte memento metaandmed nagu selle tekitamise ajahetk või selle nime. Aga ta ei paljasta originaatori sisemist olekut olekut ennast.
interface Memento {
    saaOlek(): string;
    saaNimi(): string;
    saaAeg(): string;
}
//Kindel memento sisaldab endas taristut originaatori oleku salvestamiseks.
class KindelMemento implements Memento {
    private sisemineOlek: string;
    private kuupäev: string;
    constructor(sisemineOlek: string) {
        this.sisemineOlek = sisemineOlek;
        this.kuupäev = new Date().toISOString().slice(0,19).replace('T', ' ')
    }

    public saaOlek(): string {
        return this.sisemineOlek;
    }
    public saaAeg(): string {
        return this.kuupäev;
    }
    public saaNimi(): string {
        return `${this.kuupäev} / (${this.sisemineOlek.substring(0,9)})`
    }
    //Teisi meetodeid kasutab hoolekandja metaandmete kuvamiseks.
}

//Hoolekandja klass ei sõltu KindelMemento Klassist, seega tal juurdepääsu originaatiori olekule ei ole, mida memento sees hoitakse. see töötab. See töötab kõikide Mementodega läbi memento baasliides.

class Hoolekandja {
    private mementod: Memento[] = [];
    private originaator: Originaator;

    constructor(originaator: Originaator) {
        this.originaator = originaator;
    }

    public varuKoopia(): void {
        console.log("Teen varukoopia originaatori olekust")
        this.mementod.push()
    }

    public tagasivõtt(): void {
        if (!this.mementod.length) {
            return;
        }
        const memento = this.mementod.pop()!;
        console.log(`Hoolekandja: Taastan oleku: ${memento.saaNimi}`)
    }
    public kuvaAjalugu(): void {
        console.log(`Hoolekandja: siin on mementode nimekiri`) {
            for (const memento of this.mementod) {
                console.log(memento.saaNimi());
            }
        }
    }
}

const originaator = new Originaator("fucked");
const hoolekandja = new Hoolekandja(originaator);

hoolekandja.varuKoopia();
originaator.teeMidagi();
for (let index = 0; index < 3; index ++) {
    hoolekandja.varuKoopia();
    originaator.teeMidagi();
}

console.log('')
hoolekandja.kuvaAjalugu()

console.log('Klient: võta üks tagasi')
hoolekandja.tagasivõtt();


console.log("Klient: võta veel üks tagasi")
hoolekandja.tagasivõtt();


 

//originaatori äriloogika voib mojutada selle sisemist olekut. seega klient peaks tegema uhe varu koopia sisemisest olekust, enne ariloogika meetodite kaivitamist. antud juhu lteeb seda meil "salvesta()" meetod