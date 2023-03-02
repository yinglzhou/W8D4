class Clock {

    constructor() {
        this.date = new Date;
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this.printTime();
        setInterval(_tick, 1000);
    }

    printTime() {
        let time = "";
        if (this.hours < 10) {
            time += "0" 
        }
        time += `${this.hours}`;
        time += ":";
        if (this.minutes < 10) {
            time += "0" 
        }
        time += `${this.minutes}`;
        time += ":";
        if (this.seconds < 10) {
            time += "0" 
        }
        time += `${this.seconds}`;
    }


    _tick() {

    }
}