var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http';
var PosterService = /** @class */ (function () {
    function PosterService(http, httpCLient) {
        this.http = http;
        this.httpCLient = httpCLient;
        this.baseURL = "http://img.omdbapi.com?";
        this.apiKey = "apiKey=75522b56";
    }
    PosterService.prototype.getPoster = function (id, height) {
        return this.httpCLient.get(this.baseURL + this.apiKey + "&i=" + id + "&h=" + height);
    };
    PosterService.prototype.getUrl = function (id, height) {
        return this.baseURL + this.apiKey + "&i=" + id + "&h=" + height;
    };
    PosterService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HTTP, HttpClient])
    ], PosterService);
    return PosterService;
}());
export { PosterService };
//# sourceMappingURL=poster.service.js.map