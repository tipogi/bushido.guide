import { useCallback } from "react";

const BS_DESCRIPTION_SESSION_STORAGE = 'bs.description'

export default function useDescriptionStorage() {
  const findDescription = useCallback((pathTo: string) => {
    const descriptionStorage = sessionStorage.getItem(BS_DESCRIPTION_SESSION_STORAGE);
    if (descriptionStorage === null) return '';
    const descriptionObject = JSON.parse(descriptionStorage);
    return descriptionObject[pathTo];
  }, [])

  const setDescription = useCallback((pathTo: string, description: string) => {
    const descriptionStorage = sessionStorage.getItem(BS_DESCRIPTION_SESSION_STORAGE);
    const descriptionObject = descriptionStorage === null
    ? {}
    : JSON.parse(descriptionStorage);
    // If the key does not exist, add the description of that topic
    if (!Object.prototype.hasOwnProperty.call(descriptionObject, pathTo)) {
      descriptionObject[pathTo] = description;
      sessionStorage.setItem(BS_DESCRIPTION_SESSION_STORAGE, JSON.stringify(descriptionObject))
    }
  }, [])

  return { findDescription, setDescription }
}