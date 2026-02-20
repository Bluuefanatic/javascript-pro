class counter {
    constructor(startingNum = 0, incrementAmt = 1) {
        this.count = startingNum;
        this.incrementAmt = incrementAmt;
    }

    start() {
        setInterval((function () {
            console.log(this);
            console.log(this.count);
            this.count += this.incrementAmt;
        }).bind(this), 1000);
    }
}