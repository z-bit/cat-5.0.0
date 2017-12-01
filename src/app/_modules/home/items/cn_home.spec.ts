// has h1 Home
import { TestBed, async } from '@angular/core/testing';
import { HomeContainer } from './cn_home.container';

describe('HomeContainer', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeContainer
      ],
      imports: [

      ]
    }).compileComponents();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HomeContainer);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Home');
  }));
});
