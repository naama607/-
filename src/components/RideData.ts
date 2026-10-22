export interface Driver {
  id: number;
  name: string;
  car: string;
  rating: number;
  reviewCount: number;
  pickupTime: string;
  duration: string;
  arrivalTime: string;
  price: number;
  deposit: number;
}

export interface ChatMessageData {
  id: number;
  name: string;
  role: string;
  message: string;
  sentByPassenger: boolean;
}

export interface RideHistoryData {
  id: number;
  description: string;
  payment: string;
  status: string;
}

export interface UpcomingRide {
  id: number;
  role: string;
  driverName: string;
  route: string;
  rideDate: string;
  pickupTime: string;
  price: number;
  status: string;
}

export const drivers: Driver[] = [
  {
    id: 1,
    name: 'יהודה כהן',
    car: 'סקודה אוקטביה',
    rating: 4.9,
    reviewCount: 42,
    pickupTime: '15:00',
    duration: 'שעה ו־10 דקות',
    arrivalTime: '16:10',
    price: 45,
    deposit: 15,
  },
];

export const chatMessages: ChatMessageData[] = [
  {
    id: 1,
    name: 'דני',
    role: 'נוסע מאומת',
    message: 'היי יהודה, נרשמתי לנסיעה הקבועה ב־15:00.',
    sentByPassenger: true,
  },
  {
    id: 2,
    name: 'יהודה',
    role: 'נהג מאומת',
    message: 'מעולה דני! אישרתי את הבקשה.',
    sentByPassenger: false,
  },
];

export const rideHistory: RideHistoryData[] = [
  {
    id: 1,
    description: 'נסיעה קבועה (א׳–ה׳) עם יהודה כהן',
    payment: 'מקדמה בסך 15 ₪ שולמה ב־Bit',
    status: 'מאושר ופעיל',
  },
];

export const upcomingRides: UpcomingRide[] = [
  {
    id: 1,
    role: 'נוסעת',
    driverName: 'יהודה כהן',
    route: 'תל אביב ← ירושלים',
    rideDate: 'יום ראשון',
    pickupTime: '15:00',
    price: 45,
    status: 'מאושר ופעיל',
  },
  {
    id: 2,
    role: 'נהגת',
    driverName: 'הצעה שפרסמתי',
    route: 'ירושלים ← תל אביב',
    rideDate: 'יום שני',
    pickupTime: '08:00',
    price: 40,
    status: 'מאושר ופעיל',
  },
];
