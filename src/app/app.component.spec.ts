import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {CarsDataComponent} from "./cars-data/cars-data.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CarsService} from "./cars-data/services/cars.service";

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule, HttpClientTestingModule],
        providers: [CarsService],
        declarations: [AppComponent, CarsDataComponent]
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-patents'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('angular-patents');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const appComponent = fixture.componentInstance;
        fixture.detectChanges();
        const title = appComponent.title;
        expect(title).toBeTruthy();
        expect(title).toContain('angular-patents');
    });

});