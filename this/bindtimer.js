class counter {
    constructor(startingNum = 0, incrementAmt = 1) {
        this.count = startingNum;
        this.incrementAmt = incrementAmt;
    }

    start() {
        setInterval(this.IncrementAndPrint.bind(this), 1000);
    }

    IncrementAndPrint() {
        console.log(this.count);
        this.count += this.incrementAmt;
    }
}