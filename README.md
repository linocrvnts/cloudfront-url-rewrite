# URL Rewrite Function for Amazon CloudFront

Simple Function for Distributions with S3 origin that rewrites the URL if the ff. conditions are met:
- The host doesn't start with www, redirect with www prefix
- The URI doesn't have a dot (.), redirect with slash (/) suffix
- The URI ends with a slash (/), append index.html