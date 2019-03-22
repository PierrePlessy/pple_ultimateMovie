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
var Episode = /** @class */ (function (_super) {
    __extends(Episode, _super);
    function Episode(episode) {
        var _this = _super.call(this, episode) || this;
        _this.runtime = episode["Runtime"];
        return _this;
    }
    return Episode;
}(Media));
export { Episode };
//# sourceMappingURL=episode.js.map