import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  openModal(): void {
    this.modalState.next(true);
  }

  closeModal(): void {
    this.modalState.next(false);
  }

}
