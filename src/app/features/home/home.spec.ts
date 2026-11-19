import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';
import { provideMockStore } from '@ngrx/store/testing';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  const initialState = {
    customers: {
      customers: [],
      isLoading: false,
      error: null,
      sortBy: 'id'
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers:[provideMockStore({initialState})]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
