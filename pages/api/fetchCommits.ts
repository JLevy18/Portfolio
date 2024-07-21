import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface Repo {
    name: string;
}

const fetchCommitsInRepo = async (username: string, repo: Repo, token: string): Promise<number> => {
    let totalCommits = 0;
    let page = 1;
    const per_page = 100;

    while (true) {
        try {
            const commitResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/commits`, {
                headers: {
                    Authorization: `token ${token}`
                },
                params: {
                    per_page,
                    page
                }
            });

            const commits = commitResponse.data;
            totalCommits += commits.length;

            if (commits.length < per_page) break;
            page++;
        } catch (error) {
            console.error(`Error fetching commits for repo ${repo.name}:`, error);
            break;
        }
    }

    return totalCommits;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username } = req.query;
    const token = process.env.GITHUB_TOKEN; // Server-side environment variable

    if (!username || !token) {
        return res.status(400).json({ error: 'Username and token are required' });
    }

    try {
        let totalCommits = 0;
        let page = 1;
        const per_page = 100;

        while (true) {
            const repoResponse = await axios.get<Repo[]>(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `token ${token}`
                },
                params: {
                    per_page,
                    page,
                }
            });

            const repos = repoResponse.data;
            if (repos.length === 0) break;

            const repoCommitCounts = await Promise.all(repos.map(repo => fetchCommitsInRepo(username as string, repo, token)));
            totalCommits += repoCommitCounts.reduce((total, count) => total + count, 0);

            page++;
        }

        res.status(200).json({ totalCommits });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch commits' });
    }
}