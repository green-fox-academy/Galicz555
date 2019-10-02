interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
}

class Reservations implements Reservationy {
    protected _CodeBooking: string [];
    protected _DowBooking: string [];

    

    
    getDowBooking(): string{
    }
    getCodeBooking(): string{
    }
}

