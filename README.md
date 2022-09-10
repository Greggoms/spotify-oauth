# Spotify OAuth2 Testing

## Things to figure out

- User loses their auth on page navigation/page refresh
  - `error: Invalid authorization code`
    - I think this is because of how I'm retrieving the url `code`
      and using it inside a useEffect.
  - Requires the user to re-authenticate befire making API calls.
  - I will need to keep values stored, may whip out some redux..
- Get user's currently playing track
  - `https://api.spotify.com/v1/me/player/recently-played`
    - May need to use `https://api.spotify.com/v1/me/player/recently-played`
      instead.
    - [Spotify Docs - Web API - Current Playback](https://developer.spotify.com/documentation/web-api/reference/#/operations/get-information-about-the-users-current-playback)
  - Returns a list of 20 recently played tracks
  - I will need to find a way to filter out what I'm looking for.

## Challenges I've Overcome

- No express usage
- No crypto-\* package usage

---

[Spotify Docs - Web API](https://developer.spotify.com/documentation/web-api/)

You can use Spotify's Web API to discover music and podcasts,
manage your Spotify library, control audio playback, and much more.
Browse our available Web API endpoints using the sidebar at left,
or via the navigation bar on top of this page on smaller screens.

In order to make successful Web API requests your app will need a
valid access token. One can be obtained through OAuth 2.0.

The base URI for all Web API requests is `https://api.spotify.com/v1`.

## Authorization Code Flow

[Spotify Docs - Authorization Code Flow](https://developer.spotify.com/documentation/general/guides/authorization/code-flow/)

If you’re using the authorization code flow in a mobile app, or
any other type of application where the client secret can’t be
safely stored, then you should use the PKCE extension.

If you are implementing the PKCE extension, you must include
these additional parameters:

- code_challenge_method: **Required**. Set to S256.
- code_challenge: **Required**. Set to the code challenge that
  your app calculated in step 1.

In order to generate the code_challenge, your app should hash
the code verifier using the SHA256 algorithm. The code verifier
is a random string between 43 and 128 characters in length. It
can contain letters, digits, underscores, periods, hyphens, or tildes.

## Request Access Token

If the user accepted your request, then your app is ready to
exchange the authorization code for an Access Token. It can do
this by making a POST request to the /api/token endpoint.

The body of this POST request must contain the following
parameters encoded in `application/x-www-form-urlencoded`:

- `grant_type`: **Required**. This field must contain the
  value `"authorization_code"`.
- `code`: **Required**. The authorization code returned from
  the previous request.
- `redirect_uri`: **Required**. This parameter is used for
  validation only (there is no actual redirection). The
  value of this parameter must exactly match the value
  of `redirect_uri` supplied when requesting the authorization
  code.

If you are implementing the PKCE extension, these additional
parameters must be included as well:

- client_id: **Required**. The client ID for your app, available from
  the developer dashboard.
- client_id: **Required**. The value of this parameter must match the
  value of the code_verifier that your app generated in the previous step.

The request must include the following HTTP headers:

- Authorization: **Required**. Base 64 encoded string that contains
  the client ID and client secret key. The field must have the format:
  Authorization: Basic `<base64 encoded client_id:client_secret>`
- Content-Type: **Required**. Set to `application/x-www-form-urlencoded`.

## PKCE or Not?

Everywhere I look, OAuth suggests that if you can't secure your keys
then you should use the PKCE extension. My keys are in a .env but they
are exposed in the fetch request payload.. I've tried many crypto libraries
to create and convert random strings to hashes and base64urlencoded values
to no avail. I'm always returned with an `invalid code_verifier` response.

In order to get results, I removed any crypto/hash/base64 usage. For the
first time in my life, I have acheieved OAuth2.0 Authentication Code Flow.

This video by Maker At Play Coding helped shed light on my problem.

[How to Authenticate and use Spotify Web API](https://www.youtube.com/watch?v=1vR3m0HupGI&t=93s)
