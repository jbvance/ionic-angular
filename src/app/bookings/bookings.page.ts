import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  constructor(private bookingService: BookingService) { }
  loadedBookings: Booking[];

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }

  onCancelBooking(offerId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    // TODO: Cancel booking with id offerId
  }
}
