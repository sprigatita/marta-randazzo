export default async function handler(req, res) {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
        return res.status(500).json({ error: 'Missing GitHub token' });
    }

    try {
        const response = await fetch(`https://api.github.com/users/sprigatita`, {
            headers: {
                Authorization: `token ${token}`,
                Accept: 'application/vnd.github.v3+json',
            },
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`GitHub API error: ${text}`);
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
