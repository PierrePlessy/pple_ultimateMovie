import { TestBed } from '@angular/core/testing';
import { DownloadService } from './download.service';
describe('DownloadService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(DownloadService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=download.service.spec.js.map