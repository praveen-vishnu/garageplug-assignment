import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceNummberPage } from './service-nummber.page';

describe('ServiceNummberPage', () => {
  let component: ServiceNummberPage;
  let fixture: ComponentFixture<ServiceNummberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceNummberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceNummberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
