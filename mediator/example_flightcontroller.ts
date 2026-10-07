//Siin asub mediaatori liides. Lennukid teavitavad lennujuhtimistorni, selle asemel et suhelda otse üksteisega
interface Lennujuhtija {
    teavita(sender: object, event: string): void;
}

// Lennujuhtimistornis on lennujuhtijad, kes kordineerivad erinevaid lennukeid
class Lennujuhtimistorn implements Lennujuhtija {
    private reisiLennuk: ReisiLennuk;
    private kaubaLennuk: KaubaLennuk;

    constructor(reisiLennuk: ReisiLennuk, kaubaLennuk: KaubaLennuk) {
        this.reisiLennuk = reisiLennuk;
        this.reisiLennuk.seaLennujuhtija(this);
        this.kaubaLennuk = kaubaLennuk;
        this.kaubaLennuk.seaLennujuhtija(this);
    }
    public teavita(sender: object, event: string): void {
        if (event === "KÜSIN_LUBA_ÕHKUTÕUSU") {
            console.log("Lennujuhtimistorn: Õhkutõuu luba palutud.")
            this.kaubaLennuk.hoiaAsukohta();
            this.reisiLennuk.tõuseÕhku();
        }
        if (event === "KÜSIN_LUBA_MAANDUMISEKS") {
            console.log("Lennujuhtimistorn: Maandumist luba palutud.")
            this.kaubaLennuk.eemalduRajalt();
            this.reisiLennuk.maandu();
        }
        
    }
}

class Lennuk {
    protected lennutorn!: Lennujuhtimistorn;

    public seaLennujuhtija(lennutorn: Lennujuhtimistorn): void {
        this.lennutorn = lennutorn;
    }
}

//reisijalennuk
class ReisiLennuk extends Lennuk {
    public küsiÕhkutõusuLuba(): void {
        console.log("Reisilennnu küsib luba õhkutõusuks")
        this.lennutorn.teavita(this, "KÜSIN_LUBA_ÕHKUTÕUSUKS")
    }
    public õhkuTõus(): void {
        console.log("Õhkutõus toimumas")
    }
}