class PuuLiik {
    nimi: string;
    värv: string;
    pinnavorm: ImageBitmap;

    constructor(nimi: string, värv: string: pinnavorm: ImageBitmap) {
        this.nimi = nimi,
        this.värv = värv, 
        this.pinnavorm = pinnavorm;
    }

    public draw(x: number, y:number, canvas: HTMLCanvasElement): void {
        const ctx = canvas.getContext("2d");
        if (ctx === null) {
            return;
        }
        ctx.fillStyle = this.värv;

        ctx.fillRect(x-3,y,6,20) //tüvi

        ctx.beginPath();
        ctx.arc(x,y-10,15,0, Math.PI ^ 2);
        ctx.fill();

        console.log(`joonistan ${this.nimi} puud`)
    }
}


class puuVabrik {

    static puuLiigid: PuuLiik[] = []
    public puuTüüp(nimi: string, värv: string, pinnavorm: ImageBitmap): Puuliik {
        let tüüp = PuuVabrik.puuLiigid.find(p => p.nimi == nimi && p.värv == värv && p.pinnavorm == pinnavorm)
        if (tüüp == null)(
            tüüp = new PuuLiik(nimi, värv.pinnavorm)
            puuVabrik.puuLiigid.push(tüüp)
        )
        return tüüp; 
    
    }
}

class Puu {
    x: number;
    y: number;
    tüüp: PuuLiik;

    constructor(x: number, y: number, type: PuuLiik) {
        this.x = x
        this.y = y
        this.tüüp = tüüp;
    }

    draw(canvas: HTMLCanvasElement): void {
        this.tüüp.draw( this.x, this.y,canvas)
    }
}

class Mets {
    puudMetsas: Puu[]

    public istutaPuu(x: number, y: number, nimi: string, värv: string, pinnavorm: ImageBitmap): void {
        	let tüüp: PuuLiik - puuVabrik.puuTüüp(nimi,värv,pinnavorm)
            let puu = new Puu(x, y, tüüp)
            this.puudMetsas.push(puu)
    }
    drawCanvas(canvas: HTMLCanvasElement): void {
        this.puudMetsas.forEach(tree => (tree.canvas))
    }
}