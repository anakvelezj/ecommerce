import { Injectable } from "@angular/core";
import { CartModalStrategy } from "./cart-modal-strategy";
import { CartEventService } from "src/app/shared/services/event.service";

@Injectable({
    providedIn: 'root'
  })
  export class ModalServiceCartModalStrategy implements CartModalStrategy {
    constructor(private modalService: CartEventService) { }
  
    openCartModal() {
      this.modalService.openCartModal();
    }
  }
  