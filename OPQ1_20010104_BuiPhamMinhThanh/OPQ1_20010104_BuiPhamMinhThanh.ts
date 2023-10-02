class OPQ1_20010104_BuiPhamMinhThanh {
    private height: number[];

    constructor(height: number[]) {
        this.height = height;
    }

    calculateMaxWater(): number {
        let maxWater = 0;

        for (let i = 0; i < this.height.length; i++) {
            for (let j = i + 1; j < this.height.length; j++) {
                const minH = Math.min(this.height[i], this.height[j]);
                const distance = j - i;
                const water = minH * distance;
                if (water > maxWater) {
                    maxWater = water;
                }
            }
        }

        return maxWater;
    }
}

const height: number[] = [3, 2, 3, 5, 6, 4];
const waterCalculator = new OPQ1_20010104_BuiPhamMinhThanh(height);
const result: number = waterCalculator.calculateMaxWater();
console.log("Lượng nước tối đa có thể lưu trữ là:", result);
