import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildcarerequestPage } from './childcarerequest.page';

describe('ChildcarerequestPage', () => {
  let component: ChildcarerequestPage;
  let fixture: ComponentFixture<ChildcarerequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcarerequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildcarerequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
