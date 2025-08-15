import { createElement } from 'react';

/
 * Utility function to conditionally join class names.
 * 
 * @param {...(string|false|null|undefined)} classes - Class names to join.
 * @returns {string} - The joined class names.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

/
 * Formatter utilities for the luxery dark AirBNB application.
 */
export namespace formatters {
    /
     * Format a price to include currency symbol and two decimal places.
     * 
     * @param {number} price - The price value.
     * @returns {string} - Formatted price string.
     */
    export function formatPrice(price: number): string {
        return $${price.toFixed(2)};
    }

    /
     * Format a date to a readable string.
     * 
     * @param {Date} date - The date object to format.
     * @returns {string} - Formatted date string.
     */
    export function formatDate(date: Date): string {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }
}

/
 * Luxery dark AirBNB-specific types and interfaces.
 */

/
 * Interface representing a property listing in luxery dark AirBNB.
 */
export interface PropertyListing {
    id: string;
    title: string;
    description: string;
    pricePerNight: number;
    location: string;
    images: string[];
}

/
 * Interface representing a booking in luxery dark AirBNB.
 */
export interface Booking {
    propertyId: string;
    userId: string;
    startDate: Date;
    endDate: Date;
    totalPrice: number;
}

/
 * Interface representing a user in luxery dark AirBNB.
 */
export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture?: string;
}

/
 * Function to create a styled component for luxery dark AirBNB.
 * 
 * @param {string} componentName - Name of the component.
 * @param {string} style - CSS styles.
 * @returns {HTMLElement} - The styled component.
 */
export function createStyledComponent(componentName: string, style: string): HTMLElement {
    const element = createElement('div', { className: cn('luxery-dark-airbnb', style) });
    element.innerHTML = <h1 style="color: pink;">${componentName}</h1>;
    return element;
}