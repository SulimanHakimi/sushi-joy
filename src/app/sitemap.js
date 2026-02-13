export default function sitemap() {
    return [
        {
            url: 'https://sushijoy.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://sushijoy.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://sushijoy.com/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://sushijoy.com/track-order',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: 'https://sushijoy.com/#produkte',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://sushijoy.com/#standorte',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://sushijoy.com/#blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://sushijoy.com/#kontakt',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: 'https://sushijoy.com/imprint',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: 'https://sushijoy.com/privacy-policy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: 'https://sushijoy.com/terms-of-service',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: 'https://sushijoy.com/cookie-policy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.3,
        },
    ]
}
