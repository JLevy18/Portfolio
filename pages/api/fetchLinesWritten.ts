import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

interface Repo {
    name: string;
}

interface File {
    type: string;
    size: number;
    path: string;
}

const fetchLinesInFile = async (username: string, repo: string, filePath: string, token: string): Promise<number> => {
    const fileResponse = await axios.get(`https://api.github.com/repos/${username}/${repo}/contents/${filePath}`, {
        headers: {
            Authorization: `token ${token}`
        }
    });
    const fileContent = Buffer.from(fileResponse.data.content, 'base64').toString('utf8');
    return fileContent.split('\n').length;
};

const fetchLinesInDirectory = async (username: string, repo: string, directoryPath: string, token: string): Promise<number> => {
    const dirResponse = await axios.get<File[]>(`https://api.github.com/repos/${username}/${repo}/contents/${directoryPath}`, {
        headers: {
            Authorization: `token ${token}`
        }
    });

    const files = dirResponse.data;
    const lineCounts = await Promise.all(files.map(async (file) => {
        if (file.type === 'file') {
            return fetchLinesInFile(username, repo, file.path, token);
        } else if (file.type === 'dir') {
            return fetchLinesInDirectory(username, repo, file.path, token);
        }
        return 0;
    }));

    return lineCounts.reduce((total, count) => total + count, 0);
};

const fetchLinesInRepo = async (username: string, repo: Repo, token: string): Promise<number> => {
    return fetchLinesInDirectory(username, repo.name, '', token);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { username } = req.query;
    const token = process.env.GITHUB_TOKEN; // Server-side environment variable

    if (!username || !token) {
        return res.status(400).json({ error: 'Username and token are required' });
    }

    try {
        let totalLines = 0;
        let page = 1;
        const per_page = 100;

        while (true) {
            const repoResponse = await axios.get<Repo[]>(`https://api.github.com/users/${username}/repos`, {
                headers: {
                    Authorization: `token ${token}`
                },
                params: {
                    per_page,
                    page
                }
            });

            const repos = repoResponse.data;
            if (repos.length === 0) break;

            const repoLineCounts = await Promise.all(repos.map(repo => fetchLinesInRepo(username as string, repo, token)));
            totalLines += repoLineCounts.reduce((total, count) => total + count, 0);

            page++;
        }

        res.status(200).json({ totalLines });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch lines written' });
    }
}