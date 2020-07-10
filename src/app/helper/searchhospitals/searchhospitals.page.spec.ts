import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchhospitalsPage } from './searchhospitals.page';

describe('SearchhospitalsPage', () => {
  let component: SearchhospitalsPage;
  let fixture: ComponentFixture<SearchhospitalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchhospitalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchhospitalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
