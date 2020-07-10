import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildcarerequestdetailsPage } from './childcarerequestdetails.page';

describe('ChildcarerequestdetailsPage', () => {
  let component: ChildcarerequestdetailsPage;
  let fixture: ComponentFixture<ChildcarerequestdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcarerequestdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildcarerequestdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
