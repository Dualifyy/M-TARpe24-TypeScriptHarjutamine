/*
kirjuta klass asukoha jaoks, kus on kirjas lat, lon, aadress, postiindeks, elamutüüp(enumina), mäja värv, korruste arv,
klass omab 1 konstruktor kõik andmeväärtused
klass omab ka meetodit asukoha kuvamiseks, ainult laiuskraadide väljastuseks, majavärvi kuvamiseks tekstina
*/
//kasutage siin, klassist väljaspool kõiki meetodeid millekski

class House {
    lat: number;
    lon: number;
    address: string;
    index: number;
    typeOfHouse: string;
    houseColor: string;
    floors: number;
    set_type_house(newHouseType: string): void {
        this.typeOfHouse = newHouseType;
    }
    set_color_house(newColorHouse: string): void {
        this.houseColor = newColorHouse;
    }
    get_house_info_internal(): void {
        console.log("Maja info: " + this.lat + " " + this.lon + " " + this.address + " " + this.index + " " + this.typeOfHouse + " " + this.houseColor + " " + this.floors);
    }
    constructor(lat: number, lon: number, address: string, index: number, typeOfHouse: string, houseColor: string, floors: number) {
        this.lat = lat;
        this.lon = lon;
        this.address = address;
        this.index = index;
        this.typeOfHouse = typeOfHouse;
        this.houseColor = houseColor;
        this.floors = floors;
    }

}
let houseType: string[] = ['ridaelamu', 'kortermaja', 'eramaja'];
let colorOfHouse: string[] = ['valge', 'hall', 'must', 'beez'];


function get_house_info(thisHouse: House): void {
    console.log("Maja info: " + this.lat + " " + this.lon + " " + this.address + " " + this.index + " " + this.typeOfHouse + " " + this.houseColor + " " + this.floors);
}
let house1 = new House(56.4234, 34.5453, "peetri tn 3", 13453, houseType[2], colorOfHouse[3], 1)

console.log(house1)
house1.set_color_house(colorOfHouse[2])
console.log(house1)
house1.set_type_house(houseType[1])
console.log(house1)