//originaator hoiab endas mingit tähtsat olekut, mis võib aja jooksul muutuda. Ta defineerib ära meetodi millega salvestada tema sisemist olekut memento seed ja teist meetodit mis eda seisundit taastab mementost.
class Originaator {
    private sisemineOlek: string;

    constructor(sisemineOlek: string) {
        this.sisemineOlek = sisemineOlek;
        console.log(`Originaator: Minu olek on: ${sisemineOlek}`)
    }
    
}

//originaatori äriloogika voib mojutada selle sisemist olekut. seega klient peaks tegema uhe varu koopia sisemisest olekust, enne ariloogika meetodite kaivitamist. antud juhu lteeb seda meil "salvesta()" meetod