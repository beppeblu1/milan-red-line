export function formatGuests(guests: number) {
    return guests === 1 ? "1 guest" : `${guests} guests`;
  }
  
  export function formatMinutes(minutes: number) {
    return `${minutes} min`;
  }