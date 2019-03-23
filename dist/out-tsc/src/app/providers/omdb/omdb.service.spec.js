import { TestBed } from '@angular/core/testing';
import { OmdbService } from './omdb.service';
describe('OmdbService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(OmdbService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=omdb.service.spec.js.map