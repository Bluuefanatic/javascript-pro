class counter {
    constructor(startingNum, incrementAmt) {
        this.count = startingNum;
        this.incrementAmt = incrementAmt;
    }

    start() {
        setInterval(function () {
            console.log(this.count);
            this.count += this.incrementAmt;
        },1000);
    }
}