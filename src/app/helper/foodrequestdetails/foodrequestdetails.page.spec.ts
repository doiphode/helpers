import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodrequestdetailsPage } from './foodrequestdetails.page';

describe('FoodrequestdetailsPage', () => {
  let component: FoodrequestdetailsPage;
  let fixture: ComponentFixture<FoodrequestdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodrequestdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodrequestdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
