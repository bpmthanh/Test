var OPQ1_20010104_BuiPhamMinhThanh = /** @class */ (function () {
    function OPQ1_20010104_BuiPhamMinhThanh(height) {
        this.height = height;
    }
    OPQ1_20010104_BuiPhamMinhThanh.prototype.calculateMaxWater = function () {
        var maxWater = 0;
        for (var i = 0; i < this.height.length; i++) {
            for (var j = i + 1; j < this.height.length; j++) {
                var minH = Math.min(this.height[i], this.height[j]);
                var distance = j - i;
                var water = minH * distance;
                if (water > maxWater) {
                    maxWater = water;
                }
            }
        }
        return maxWater;
    };
    return OPQ1_20010104_BuiPhamMinhThanh;
}());
var height = [3, 2, 3, 5, 6, 4];
var waterCalculator = new OPQ1_20010104_BuiPhamMinhThanh(height);
var result = waterCalculator.calculateMaxWater();
console.log("Lượng nước tối đa có thể lưu trữ là:", result);
