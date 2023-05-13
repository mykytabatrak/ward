import { cookies } from "next/headers";
import {
  ColorScheme,
  ColorSchemeCookieKey,
  DefaultColorScheme,
} from "./models";

export function getColorScheme() {
  const cookiesList = cookies();
  return ColorScheme.catch(DefaultColorScheme).parse(
    cookiesList.get(ColorSchemeCookieKey)?.value
  );
}
