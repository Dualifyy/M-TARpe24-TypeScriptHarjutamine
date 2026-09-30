"use strict";
//Flyweighti klassis sisaldab osa puu seisundist. Need väljad hoiavad väärtusi 
// mis on unikaalsed iga üksiku puu jaoks. Näiteks ei leia siit puu kordinaate, aga
//puu pinnavorm (texture) ja värv, mida jagatakse mitme puu vahel hoitakse tavaliselt 
// siin klassis. Kuna see andmemaht on tavaliselt üsna suur oleks raiskamine hoida 
//iga puu juures seda pinnavormi ja värvi individuaalselt eraldi. Selle asemel me saame
//kõik korduvad andmed eraldada ühte jagatud klassi, kus hoitakse neid andmeid 
// ühekordselt mida kõik teised puu-objektid saavad viidata. See hoiab kokku mälumahtu
class PuuLiik {
    nimi;
    värv;
    pinnavorm;
    constructor(nimi, värv, pinnavorm) {
        this.nimi = nimi,
            this.värv = värv,
            this.pinnavorm = pinnavorm;
    }
    draw(x, y, canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx === null) {
            return;
        }
        ctx.fillStyle = this.värv;
        ctx.fillRect(x - 3, y, 6, 20); //tüvi
        ctx.beginPath();
        ctx.arc(x, y - 10, 15, 0, Math.PI * 2);
        ctx.fill();
        console.log(`joonistan ${this.nimi} puud`);
        
    }
}
// Flyweighti tehas otsustab kas taaskasutada olemasolevat flyweighti või 
// teha uus objekt, näiteks kui on kaks eri liiki puud ja nende pinnavorm erineb.
class PuuVabrik {
    static puuLiigid = [];
    static puuTüüp(nimi, värv, pinnavorm) {
        let tüüp = PuuVabrik.puuLiigid.find(p => p.nimi == nimi && p.värv == värv && p.pinnavorm == pinnavorm);
        if (tüüp == null) {
            tüüp = new PuuLiik(nimi, värv, pinnavorm);
            PuuVabrik.puuLiigid.push(tüüp);
        }
        return tüüp;
    }
}
//Objekt ise hoiab oma kontekstis ainult talle unikaalset puu oleku muutujaid. 
// Programmis võib olla neid miljardeid kuna nad on väikese mäluruumi tarbega
// antud juhul ainult üks viiteväli ja koordinaadid
class Puu {
    x;
    y;
    tüüp;
    constructor(x, y, tüüp) {
        this.x = x;
        this.y = y;
        this.tüüp = tüüp;
    }
    draw(canvas) {
        this.tüüp.draw(this.x, this.y, canvas);
    }
}
// Puu ja Mets-a klassid on flyweightide kliendid, neid saab kokku liita, kui 
// puu klassi enam edasi ei arendata
class Mets {
    puudMetsas = [];
    istutaPuu(x, y, nimi, värv, pinnavorm) {
        let tüüp = PuuVabrik.puuTüüp(nimi, värv, pinnavorm);
        let puu = new Puu(x, y, tüüp);
        this.puudMetsas.push(puu);
    }
    drawCanvas(canvas) {
        this.puudMetsas.forEach(tree => { tree.draw(canvas); });
        console.log("DrawCanvas");
    }
}
const canvas = document.getElementById("canvas");
const mets = new Mets();
mets.istutaPuu(50, 100, "Tamm", "Green", "tamm.png");
mets.istutaPuu(100, 120, "Tamm", "Green", "tamm.png");
mets.istutaPuu(150, 100, "Mänd", "Green", "mand.png");
mets.istutaPuu(200, 130, "Jaapani Kirss", "Pink", "sakura.png");
mets.drawCanvas(canvas);
