var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Media } from './media';
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie(movie) {
        var _this = _super.call(this, movie) || this;
        _this.runtime = movie["Runtime"];
        _this.production = movie["Production"];
        _this.type = movie["Type"];
        return _this;
    }
    return Movie;
}(Media));
export { Movie };
//# sourceMappingURL=movie.js.map