import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodrequestPage } from './foodrequest.page';

describe('FoodrequestPage', () => {
  let component: FoodrequestPage;
  let fixture: ComponentFixture<FoodrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
