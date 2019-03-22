var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { OmdbService } from './../../providers/omdb/omdb.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var SeasonPage = /** @class */ (function () {
    function SeasonPage(thisRouter, omdbService) {
        this.thisRouter = thisRouter;
        this.omdbService = omdbService;
    }
    SeasonPage.prototype.ngOnInit = function () {
        var _this = this;
        this.thisRouter.params.subscribe(function (params) {
            _this.omdbService.getOneSeason(params.id, params.season)
                .subscribe(function (res) {
                _this.title = res["Title"];
                _this.season = res["Season"];
                _this.episodes = res["Episodes"];
            });
            //for (let i = 1; i <= parseInt(this.info["totalSeasons"]); i++) {
            //foo.push(this.omdbService.getOneSeason(params.id, i));
            // foo.push({Season: i})
            // }
            //forkJoin(foo).subscribe(response => {
            //  console.log(response);
            //  this.seasons = response;
            //})
        });
    };
    SeasonPage = __decorate([
        Component({
            selector: 'app-season',
            templateUrl: './season.page.html',
            styleUrls: ['./season.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            OmdbService])
    ], SeasonPage);
    return SeasonPage;
}());
export { SeasonPage };
//# sourceMappingURL=season.page.js.map