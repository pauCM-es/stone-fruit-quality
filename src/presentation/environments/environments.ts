/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export enum envs {
  API_URL = "VITE_API_URL",

}

export const getEnv = (variable: string) => {
    return import.meta.env[variable] as string
}
