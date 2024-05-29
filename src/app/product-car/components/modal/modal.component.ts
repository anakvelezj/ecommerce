import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  @Input() modalOpen: boolean = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private modalService: ModalService) {}

  close() {
    this.closeModal.emit();
  }
}
