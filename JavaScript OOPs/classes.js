class Bicycle {
    constructor(gears, color, handlebars) {
        this.gears = gears; // default value
        this.color = color; // default value
        this.breaks = 'disc';
        this.handlebars = handlebars;
        this.currentSpeed = 0;
    }

    getMaxSpeed() {
        return this.gears * 2 + 10; // Example formula for max speed
    }

    

    increaseSpeed(amount) {
        let maxSpeed = this.getMaxSpeed();
        this.currentSpeed += amount;
        if (this.currentSpeed > maxSpeed) {
            this.currentSpeed = maxSpeed;
        }
    }

    decreaseSpeed(amount) {
        this.currentSpeed -= amount;
        if (this.currentSpeed < 0) {
            this.currentSpeed = 0;
        }
    }

    getcurrentSpeed() {
        return this.currentSpeed;
    }
}

export default Bicycle;