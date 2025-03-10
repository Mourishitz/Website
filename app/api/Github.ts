import { GitHubReposResponse } from "../types/github/GitHubReposResponse";

export default class Github {
private url: string = 'https://api.github.com';
    private username: string;
    private token: string;

    public constructor({ user, token }: { user: string, token: string }) {
        this.username = user;
        this.token = token;
    }

    public async getUser(): Promise<GitHubUserResponse> {
        try {
            const response = await fetch(`${this.url}/users/${this.username}`, {
                headers: {
                    Authorization: `token ${this.token}`
                }
            });
            return await response.json() as GitHubUserResponse;    
        } catch (error) {
            throw new Error(`Error fetching GitHub stats: ${error}`);
        }
    }

    public async getRepositories(): Promise<GitHubReposResponse> {
        try {
            const response = await fetch(`${this.url}/users/${this.username}/repos`, {
                headers: {
                    Authorization: `token ${this.token}`
                }
            });
            return await response.json() as GitHubReposResponse;
        } catch (error) {
            throw new Error(`Error fetching GitHub stats: ${error}`);
        }
    }

}