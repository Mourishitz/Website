import { WakatimeUserResponse } from "@/app/types/wakatime/WakatimeUserResponse";
import { WakaTimeUserStats } from "../types/wakatime/WakatimeUserStats";

export default class Wakatime {
    private url: string = 'https://wakatime.com/api/v1';
    private user: string;

    public constructor({ user }: { user: string }) {
        this.user = user;
    }

    public async getUser(user: string): Promise<WakatimeUserResponse> {
        try {
            const response = await fetch(`${this.url}/users/${user}`);
            return await response.json() as WakatimeUserResponse;    
        } catch (error) {
            throw new Error(`Error fetching Wakatime stats: ${error}`);
        }
    }

    public async getStats(user: string): Promise<WakaTimeUserStats> {
        try {
            const response = await fetch(`${this.url}/users/${user}/stats`);
            return await response.json() as WakaTimeUserStats;
        } catch (error) {
            throw new Error(`Error fetching Wakatime stats: ${error}`);
        }
    }

}