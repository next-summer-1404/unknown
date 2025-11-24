export interface TravelerDetails {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;    
  nationalId: string;
}

export interface BookingPayload {
  houseId: number;    
  reservedDates: [string, string]; 
  traveler_details: TravelerDetails[];
  sharedEmail: string;
  sharedMobile: string;
}