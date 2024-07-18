import { FlightItem } from './flight-item';
import { UserItem } from './user-item';
import { CheckInItem } from './checkin-item';

export class TicketItem {
  tickedId!: number;
  flight!: FlightItem;
  passager!: UserItem;
  checkIn!: boolean;
  luggage!: boolean;
  price!: number;

  constructor(ticket?: Partial<TicketItem>) {
    Object.assign(this, ticket);
  }
}
