var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Series } from './../../models/series';
import { Movie } from './../../models/movie';
import { PosterService } from 'src/app/providers/poster/poster.service';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from './../../providers/storage/storage.service';
var DetailPage = /** @class */ (function () {
    function DetailPage(thisRouter, omdbService, posterService, storage) {
        this.thisRouter = thisRouter;
        this.omdbService = omdbService;
        this.posterService = posterService;
        this.storage = storage;
        this.isSerie = true;
        this.isFavori = false;
    }
    DetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.thisRouter.params.subscribe(function (params) {
            _this.omdbService.findById(params.id)
                .subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                var i;
                var _this = this;
                return __generator(this, function (_a) {
                    if (res["Type"] == "movie") {
                        this.isSerie = false;
                        this.info = new Movie(res);
                    }
                    else {
                        this.info = new Series(res);
                        this.isSerie = true;
                        this.seasons = [];
                        for (i = 1; i <= this.info["totalSeasons"]; i++) {
                            this.seasons.push({ seasonNb: i });
                        }
                        //forkJoin(foo).subscribe(response => {
                        //  console.log(response);
                        //  this.seasons = response;
                        //})
                    }
                    this.storage.isFavoris(this.info)
                        .then(function (isFav) {
                        console.log(isFav);
                        _this.isFavori = isFav;
                    });
                    return [2 /*return*/];
                });
            }); });
            _this.poster = _this.posterService.getUrl(params.id, 1500);
        });
    };
    DetailPage.prototype.addFavoris = function () {
        this.storage.add(this.info);
        this.isFavori = true;
    };
    DetailPage.prototype.removeFavoris = function () {
        this.storage.remove(this.info);
        this.isFavori = false;
    };
    DetailPage = __decorate([
        Component({
            selector: 'app-detail',
            templateUrl: './detail.page.html',
            styleUrls: ['./detail.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            OmdbService,
            PosterService,
            StorageService])
    ], DetailPage);
    return DetailPage;
}());
export { DetailPage };
//# sourceMappingURL=detail.page.js.map