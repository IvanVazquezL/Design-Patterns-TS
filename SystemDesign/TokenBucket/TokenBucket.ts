class TokenBucket {
    private bucketSize: number;
    private refillRate: number;
    private bucket: number;
    private lastRefillTime: number;

    constructor(bucketSize: number, refillRate: number) {
        this.bucketSize = bucketSize;
        this.refillRate = refillRate;
        this.bucket = bucketSize;
        this.lastRefillTime = Date.now(); // Track last refill time
    }

    private refill(): void {
        const now = Date.now();
        const elapsedSeconds = (now - this.lastRefillTime) / 1000;

        // Calculate new tokens based on elapsed time
        const newTokens = Math.floor(elapsedSeconds * this.refillRate);
        if (newTokens > 0) {
            this.bucket = Math.min(this.bucket + newTokens, this.bucketSize);
            this.lastRefillTime = now;
            console.log(`Bucket refilled. Tokens available: ${this.bucket}`);
        }
    }

    consume(): void {
        this.refill(); // Ensure tokens are refilled before consuming

        if (this.bucket > 0) {
            this.bucket--;
            console.log(`Token consumed. Remaining tokens: ${this.bucket}`);
        } else {
            console.log('Request denied (Bucket empty)');
        }
    }
}

// Simulating token consumption
function main() {
    const tokenBucket = new TokenBucket(4, 1); // 4 tokens max, refills 1 per second

    const interval = setInterval(() => {
        console.log(`Trying to consume at ${new Date().toISOString()}`);
        tokenBucket.consume();
    }, 500); // Attempt to consume every 0.5 seconds

    setTimeout(() => {
        clearInterval(interval);
        console.log('Simulation ended');
    }, 10000); // Stop after 10 seconds
}

main();
