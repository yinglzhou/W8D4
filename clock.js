class Clock {

    constructor() {
        this.date = new Date;
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this.printTime();
        setInterval(this._tick.bind(this), 1000);
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
        
        console.log(time);
    }


    _tick() {
        if (this.seconds < 59){
        this.seconds++;
        }else{
            //hardstuff
            this.seconds = 0;
            this.minutes ++;
            if (this.minute > 59){
                this.minutes = 0;
                this.hours++;
                if(this.hours > 24){
                    this.hours = 0;
                }
            }
        }
        
        this.printTime();
    }
}

const clock = new Clock();