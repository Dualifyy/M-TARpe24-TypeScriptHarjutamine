interface KolmandaOsapooleYoutubeTeenus {
    loetleVideod(): string[];
    loeVideoInfo(id: string): string;
    laeVideoAlla(id: string): void;
}

class KolmandaOsapooleYoutubeTeenus implements KolmandaOsapooleYoutubeTeenus {
    loetleVideod(): string[] {
        console.log("Loen videod youtubelt")
        return ["Video1", "Video2", "Video3"]
    }
    loeVideoInfo(id: string): string {
        console.log(`hangin info video ${id} kohta`)
        return `siin on info ${id} kohta: abkldsfjd`;
    }
    laeVideoAlla(id: string): void {
        console.log(`laen alla videot ${id} youtuubist`)
    }
}

class ProxyKlassYoutubeTeenusele implements KolmandaOsapooleYoutubeTeenus {
    private teenus: KolmandaOsapooleYoutubeTeenus;
    private loendiPuhver: string[] | null = null;
    private videoPuhver: Map<string, string> = new Map();
    private allalaetudVideo: string[] = [];
    vajabVärskendust: boolean = false;

    constructor(teenus: KolmandaOsapooleYoutubeTeenus) {
        this.teenus = teenus;
    }
    loeVideoInfo(id: string): string {
        const puhverdatudVideo = this.videoPuhver.get(id);
        if (puhverdatudVideo === undefined || this.vajabVärskendust) {
            const info = this.teenus.loeVideoInfo(id)
            this.videoPuhver.set(id, info);
            return info;
        }
        console.log(`info video ${id} jaoks tuleb puhvrist`)
        return puhverdatudVideo;
    }

    laeVideoAlla(id: string): void {
        const jubaAllalaetudVideo = this.allalaetudVideod.includes(id);
        if (this.allalaetudVideo === undefined || this.vajabVärskendust) {
            this.teenus.laeVideoAlla(id);
            this.allalaetudVideod.push(id);
        }
        else {
            console.log()
        }
    }
}