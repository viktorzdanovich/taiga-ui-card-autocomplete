import {Component, ElementRef, ViewChild} from '@angular/core';
import {Subject, takeUntil, timer} from "rxjs";
import {TuiCard, tuiDefaultCardValidator, TuiInputCardGroupedComponent} from "@taiga-ui/addon-commerce";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('cardGroupedInput')
  private cardGroupedInput?: TuiInputCardGroupedComponent;

  @ViewChild('fakeInput')
  private fakeInput?: ElementRef<HTMLInputElement>;

  public readonly card = new FormControl<TuiCard | null>(null);

  private readonly destroyed$ = new Subject<void>();

  cardValidator(card: string): boolean {
    return tuiDefaultCardValidator(card) && card.length === 16;
  }

  focusCard(): void {
    this.fakeInput?.nativeElement.focus();
    timer(2000).pipe(takeUntil(this.destroyed$)).subscribe(() => this.cardGroupedInput?.focusCard());
  }
}
