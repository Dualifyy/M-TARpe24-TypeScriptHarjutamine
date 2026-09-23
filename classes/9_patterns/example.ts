//hetkel abstraktne tehase liides, ütleb et ta on järgnevad meetodid mis tagastavad erinevaid Neid nimetatakse perekonnaks ja nad sarnanevad üksteisega kõrgetasemelise kontseptsiooni abil, mõlemad on mingisugused sõidukid
//ühe perekonna tooted tavaliselt on koostöövõimelised, võib olla mitu erinevat varianti, aga ei ole ühilduvad teise variandiga

interface VehicleFactory {

    createCar(): VehicleProductA;
    createTram(): VehicleProductB;

}

class CarFactory implements VehicleFactory {
    public createCar() : VehicleProductA
    {
        return new CarProduct();
    }
    public createTram() : VehicleProductB
    {
        return null;
    }
}
class TramFactory implements VehicleFactory {
    public createCar() : VehicleProductA
    {
        return null;
    }
    public createTram() : VehicleProductB
    {
        return new TramProduct();
    }
}
class CarProduct implements VehicleProductA {
    public whatIsThis()
    {
        return "This is a volvo";
    }
}
class CarProduct2 implements VehicleProductA {
    public createCar() : VehicleProductA
    {
        return "this is a mazda"
    }
}