var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { OmdbService } from './../../providers/omdb/omdb.service';
import { ActivatedRoute } from '@angular/router';
import { Episode } from 'src/app/models/episode';
var EpisodePage = /** @class */ (function () {
    function EpisodePage(thisRouter, omdbService) {
        this.thisRouter = thisRouter;
        this.omdbService = omdbService;
    }
    EpisodePage.prototype.ngOnInit = function () {
        var _this = this;
        this.thisRouter.params.subscribe(function (params) {
            _this.omdbService.findById(params.id)
                .subscribe(function (res) {
                _this.info = new Episode(res);
            });
        });
    };
    EpisodePage = __decorate([
        Component({
            selector: 'app-episode',
            templateUrl: './episode.page.html',
            styleUrls: ['./episode.page.scss'],
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            OmdbService])
    ], EpisodePage);
    return EpisodePage;
}());
export { EpisodePage };
//# sourceMappingURL=episode.page.js.map