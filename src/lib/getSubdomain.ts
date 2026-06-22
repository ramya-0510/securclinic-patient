// src/lib/getSubdomain.ts

export type AppSection = "patient" | "doctor" | "admin";

/**
 * Reads the current hostname and decides which section of the app to render.
 *
 * Production:  patient.securclinic.com  -> "patient"
 *              doctor.securclinic.com   -> "doctor"
 *              admin.securclinic.com    -> "admin"
 *
 * Local dev:   patient.securclinic.local:5173 -> "patient"
 *              (same idea, .local instead of .com)
 *
 * Fallback:    plain "localhost" or anything unrecognized -> null
 *              (caller decides what to do — e.g. show a section picker,
 *              or default to "patient")
 */
export function getSubdomain(): AppSection | null {
  const host = window.location.hostname; // no port, no protocol

  // e.g. "patient.securclinic.local" -> "patient"
  const firstLabel = host.split(".")[0];

  if (firstLabel === "patient" || firstLabel === "doctor" || firstLabel === "admin") {
    return firstLabel;
  }

  return null;
}