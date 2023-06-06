import { z } from "zod";

export const ColorSchemeCookieKey = "scheme";
export const ColorScheme = z.enum(["system", "light", "dark"]);
export const DefaultColorScheme = ColorScheme.enum.system;
