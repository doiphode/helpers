import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewrequestsPage } from './viewrequests.page';

describe('ViewrequestsPage', () => {
  let component: ViewrequestsPage;
  let fixture: ComponentFixture<ViewrequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrequestsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewrequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
