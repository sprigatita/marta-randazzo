import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const username = "sprigatita";
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        return res.status(500).json({ error: "GitHub token mancante" });
    }

    try {
        const repoRes = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: { Authorization: `token ${token}`, "User-Agent": "VercelServer" },
        });

        if (!repoRes.ok) {
            const text = await repoRes.text();
            throw new Error(`GitHub error ${repoRes.status}: ${text}`);
        }

        const repos = await repoRes.json();
        const langMap: Record<string, number> = {};

        await Promise.all(
            repos.slice(0, 10).map(async (repo: any) => {
                const langRes = await fetch(repo.languages_url, {
                    headers: { Authorization: `token ${token}` },
                });
                const langData = await langRes.json();
                for (const [lang, bytes] of Object.entries(langData)) {
                    langMap[lang] = (langMap[lang] || 0) + (bytes as number);
                }
            })
        );

        res.status(200).json({ repos, languages: langMap });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}
