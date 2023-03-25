# Werbefrei-Hub

The typical cityscape in Germany is increasingly dominated by flashing advertisements and animated advertising screens. As soon as you set foot outside, a battle for your attention begins. This is not only annoying, but can also restrict accessibility or even endanger road users through distraction.

That's why there are several initiatives to take back our cities through new advertising laws.

The Werbefrei-Hub helps you find such initiatives near you for you to get involved in.

## Data

All initiatives are stored in [`data/initiativen`](./data/initiativen/). Each file is a JSON file named after the region this initiative is targetting.

The JSON files are following this syntax:

```json
{
    "name": "My Awesome City Werbefrei", // This is the name of the initiative
    "region": {
        "wikidata": "Q1" // This is the initiatives target region as an object from https://www.wikidata.org
    },
    "url": "https://example.com/", // This is the initiatives homepage

    // The following CTA part can be left out. It should be added when the initiative needs help with something (e.g. recruiting new members)
    "cta": {
        "i18nKey": "phase2_signup", // See ./public/locales/*/translation.json for available keys under "cta"
        "url": "https://example.com/cta" // The URL which the call-to-action should lead to
    }
}
```

## Development

The whole site is built on [Astro](https://astro.build/). Use `yarn` to install dependencies and `yarn start` to start the development environment.
