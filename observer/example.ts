interface Subjekt {
    // lisame observeri subjekti juurde
    attach(jälgija: Jälgija): void;
    // eemaldame observeir subjekti juurest
    detach(jälgija: Jälgija): void;
    //teavitas
    teavita(): void;

}
//subjektilt omab mingit tähtsat olekut ja teavitab jälgijaid kui olek muutub
class KindelSubjekt implements Subjekt {
    // Lihtsuse mõttes on sisemine olek ainult üks number
    public olek: number;
    //Jälgijate nimekiri, päriselt hoitakse seda nimekirja tunduvalt detailsemalt, siin lihtsalt array
    private jälgijad: Jälgija[] = [];
    public attach(jälgija: Jälgija): void {
        const onOlemas = this.jälgijad.includes(jälgija)
        if (onOlemas)
        {
            return console.log("Subject: Jälgija on juba registreeritud")
        }
        console.log('Subjekt: uus jälgija lisatud')
        this.jälgijad.push(jälgija);
    }
    public detach(jälgija: Jälgija): void {
        const jälgijaIndeks = this.jälgijad.indexOf(jälgija)
        if (jälgijaIndeks === -1)
        {
            return console.log("Subjekt: Jälgijat ei leitud")
        }
        this.jälgijad.splice(jälgijaIndeks, 1);
        console.log("Subject jälgija lahkus. (Code: JälgijaIndeks(-1)")
    }
    //teavitusmeetod mis kutsub esile uuenduse jälgijatele
    public teavita(): void {
        console.log("Subjekt: Teavitan jälgijaid")
        for (const jälgija of this.jälgijad) 
        {
            jälgija.uuendaMind(this);
        }
        console.log("uuendatud");
    }

    // Tavaliselt, tellimisLoogika on ainult osa mida üks subjekt teha päriselt oskab.
    // Subjektid tüüpiliselt hoiavad endas mingit kindlat tähtsat äriloogikat, see päästab valla teavituste laine teavitusmeetodi abil, kui midagi tähtsat kas hakkab juhtuma või on juba juhtunud.

    public äriLoogika(): void {
        console.log("Subjekt: midagi toimus()")
        this.olek = Math.floor(Math.random()*11);
        console.log(`Subjekt: mu olek on nüüd: ${this.olek}`)
        this.teavita();
    }
}

//Jälgija liides ütleb ära meetodi millega teda uuendada saab või teavitada saad
interface Jälgija{
    //uuenduste saamismeetod
    uuendaMind(subjekt: Subjekt): void;
}

//Kindlad jälgijad reageerivad teavitustele mis tulevad subjektil kelle kuulajad nad on
class KindelKuulajaA implements Jälgija {
    public uuendaMind(subjekt: Subjekt): void {
        if (subjekt instanceof KindelSubjekt && subjekt.olek < 3)
        {
            console.log("KindelJälgijaA reageeris juhtimule");
        }    
    }
}