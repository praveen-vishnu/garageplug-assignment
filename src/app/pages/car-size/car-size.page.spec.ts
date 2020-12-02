import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarSizePage } from './car-size.page';

describe('CarSizePage', () => {
  let component: CarSizePage;
  let fixture: ComponentFixture<CarSizePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarSizePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarSizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
