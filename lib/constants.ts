import { Theme } from 'styled-components';

/
 * Brand constants for the luxery dark AirBNB application.
 * This file contains configuration values specific to the brand.
 * 
 * Brand Name: luxery dark AirBNB
 * Industry: Technology
 * Style: Dark
 * Colors: Pink and Black
 * 
 * This configuration is essential for maintaining brand consistency
 * across the application.
 */

export const BRAND_NAME = "luxery dark AirBNB";
export const PRIMARY_COLOR = "#FF69B4"; // Pink
export const SECONDARY_COLOR = "#000000"; // Black
export const DARK_BACKGROUND = "#121212"; // Dark background for dark theme

/
 * Interface representing the configuration for the luxery dark AirBNB application.
 */
export interface AppConfig {
    brandName: string;
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
}

/
 * Configuration object for the luxery dark AirBNB application.
 */
export const appConfig: AppConfig = {
    brandName: BRAND_NAME,
    primaryColor: PRIMARY_COLOR,
    secondaryColor: SECONDARY_COLOR,
    backgroundColor: DARK_BACKGROUND,
};

/
 * Theme interface for styled-components to ensure consistency
 * with the luxery dark AirBNB branding throughout the application.
 */
export interface LuxeryDarkAirbnbTheme extends Theme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
    };
}

/
 * Theme object for styled-components.
 */
export const luxeryDarkAirbnbTheme: LuxeryDarkAirbnbTheme = {
    colors: {
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
        background: DARK_BACKGROUND,
    }
};