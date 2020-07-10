import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EssentialsrequestdetailsPage } from './essentialsrequestdetails.page';

describe('EssentialsrequestdetailsPage', () => {
  let component: EssentialsrequestdetailsPage;
  let fixture: ComponentFixture<EssentialsrequestdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssentialsrequestdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EssentialsrequestdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
