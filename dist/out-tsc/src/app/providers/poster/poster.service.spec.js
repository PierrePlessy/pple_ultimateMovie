import { TestBed } from '@angular/core/testing';
import { PosterService } from './poster.service';
describe('PosterService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PosterService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=poster.service.spec.js.map