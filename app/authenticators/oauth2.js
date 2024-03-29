import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: 'http://localhost:5000/oauth/token',
  serverTokenRevocationEndpoint: 'http://localhost:5000/oauth/revoke'
});
