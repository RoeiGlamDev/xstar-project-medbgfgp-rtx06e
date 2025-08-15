import { User } from './user';
import { Property } from './property';

/
 * Represents a booking made through luxery dark AirBNB.
 */
export interface Booking {
  id: string; // Unique identifier for the booking
  userId: string; // Reference to the user making the booking
  propertyId: string; // Reference to the booked property
  startDate: Date; // Start date of the booking
  endDate: Date; // End date of the booking
  totalPrice: number; // Total price for the booking
}

/
 * Represents an inquiry made by a user for a property on luxery dark AirBNB.
 */
export interface Inquiry {
  id: string; // Unique identifier for the inquiry
  userId: string; // Reference to the user making the inquiry
  propertyId: string; // Reference to the property being inquired about
  message: string; // Message from the user
  createdAt: Date; // Timestamp of when the inquiry was made
}

/
 * Represents a luxery dark AirBNB property listing.
 */
export interface LuxeryDarkAirbnbProperty extends Property {
  id: string; // Unique identifier for the property
  title: string; // Title of the property
  description: string; // Description of the property
  address: string; // Address of the property
  pricePerNight: number; // Price per night for the property
  amenities: string[]; // List of amenities available at the property
  images: string[]; // URLs of images for the property
  isAvailable: boolean; // Availability status of the property
}

/
 * Represents a user of the luxery dark AirBNB platform.
 */
export interface LuxeryDarkAirbnbUser extends User {
  id: string; // Unique identifier for the user
  name: string; // Full name of the user
  email: string; // Email address of the user
  phone?: string; // Optional phone number of the user
  profilePicture?: string; // Optional URL to the user's profile picture
}

/
 * Represents the overall state of the luxery dark AirBNB application.
 */
export interface LuxeryDarkAirbnbAppState {
  users: LuxeryDarkAirbnbUser[]; // Array of users registered on the platform
  properties: LuxeryDarkAirbnbProperty[]; // Array of properties listed on the platform
  bookings: Booking[]; // Array of bookings made through the platform
  inquiries: Inquiry[]; // Array of inquiries made by users
}

/
 * Represents the configuration settings for the luxery dark AirBNB application.
 */
export interface LuxeryDarkAirbnbConfig {
  appName: string; // Name of the application
  primaryColor: string; // Primary color for the brand (pink)
  secondaryColor: string; // Secondary color for the brand (black)
  logoUrl: string; // URL for the application's logo
  contactEmail: string; // Email for user inquiries and support
}

/ 
 * Exports the types and interfaces for usage in the luxery dark AirBNB application
 */
export {
  Booking,
  Inquiry,
  LuxeryDarkAirbnbProperty,
  LuxeryDarkAirbnbUser,
  LuxeryDarkAirbnbAppState,
  LuxeryDarkAirbnbConfig,
};